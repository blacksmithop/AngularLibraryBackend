const express = require('express');
let app = express.Router();
const jwt = require('jsonwebtoken');

const UserData = require('../model/userdata');

const jwt_secret = 'secretKey'

app.post('/', function (req, res) {

    let username = req.body.username;
    let password = req.body.password;

    UserData.findOne({ username: username, password: password }, function (err, user) {
        console.log(req.body, "mongodbcheck for user");
        if (err) {
            res.send({ status: false, data: 'Response error. No Internet' });
        }
        else if (user) {
            console.log("Logged in ", user)
            req.session.role = user.admin ? 'admin' : 'user';
            let payload = { subject: username + password, admin: false }
            let token = jwt.sign(payload, jwt_secret)

            res.send({ status: true, token, role: req.session.role })
            console.log({ status: true, token, role: 'user' })
        } else {
            res.send({ status: false, data: 'NOT FOUND' });
        }
    });
    //}
});


app.post('/signup', function (req, res) {
    let item = {
        username: req.body.user.username,
        password: req.body.user.password,
        admin: false
    }
    let signup = UserData(item);
    signup.save().then(function (data) {
        res.send({ status: true })
    }).catch(function (error) {
        res.send({ status: false })

    })

});

module.exports = app;