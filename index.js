const express = require('express');
const session = require('express-session');
const cors = require('cors');
const jwt = require('jsonwebtoken');
let app = express();

const port = process.env.PORT || 8080;

const jwt_secret = 'secretKey'

app.use(express.json({ limit: '50mb' }));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
/*
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});*/

app.use(session({
    secret: 'top secret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// verify jwt token
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, jwt_secret)
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}
//

//import routes
const login = require('./routes/auth');
const group = require('./routes/group');
const insert = require('./routes/insert');
const delete_route = require('./routes/delete');
//

// add routes
app.use('/login', login);

app.get('/logout', function (req, res) {
    req.session.destroy();
    //res.redirect('/login');
    res.status(200).send("Logged out")
});


app.use('/group', group);

app.use('/add', verifyToken, insert);

app.use('/delete', verifyToken, delete_route);
//

app.get('/', (req, res) => {
    res.status(200).send('API Status: ✅')
})

app.listen(port, () => {
    console.log(`Server live at ${port}`)
});