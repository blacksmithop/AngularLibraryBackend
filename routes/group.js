const express = require('express');
const BookData = require('../model/bookdata');
const AuthorData = require('../model/authordata');
let app = express.Router();

app.get('/books', function (req, res) { //done
    BookData.find()
        .then(function (book) {
            res.status(200).send(book);
        })
});

app.get('/authors', function (req, res) { //done
    AuthorData.find()
        .then(function (author) {
            res.status(200).send(author);
        })
});

app.get('/books/:_id', function (req, res) { //done
    let _id = req.params._id;
    BookData.findById(_id)
        .then(function (book) {
            res.status(200).send(book);
        });
});

app.get('/authors/:_id', function (req, res) { //done
    let _id = req.params._id;
    AuthorData.findById(_id)
        .then(function (author) {
            res.status(200).send(author);
        });
});

module.exports = app;