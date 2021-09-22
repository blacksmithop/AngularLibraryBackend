const express = require('express');
const BookData = require('../model/bookdata');
const AuthorData = require('../model/authordata');
let app = express.Router();


app.delete('/deletebook/:_id', function (req, res) {
    let _id = req.params._id;
    BookData.findByIdAndDelete({ _id: _id },
        (err, result) => {
            if (err) {
                res.send({ status: false });
            } else {
                res.send({ status: true });
            }
        });
});

//deleteauthor

app.delete('/deleteauthor/:_id', function (req, res) {
    let _id = req.params._id;
    AuthorData.findByIdAndDelete({ _id: _id },
        (err, result) => {
            if (err) {
                res.send({ status: false });
            } else {
                res.send({ status: true });
            }
        });
});


module.exports = app;