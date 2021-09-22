const express = require('express');
const BookData = require('../model/bookdata');
const AuthorData = require('../model/authordata');

let app = express.Router();


app.post('/add_book', function (req, res) { //done
    let item = {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        about: req.body.about,
        imgUrl: req.body.imgUrl,
    }
    let book = BookData(item);
    book.save().then(function (data) {
        res.send({ status: true });
    }).catch(function (error) {
        res.send({ status: false });
    })
});

app.post('/add_author', function (req, res) { //done
    let item = {
        name: req.body.author.name,
        country: req.body.author.country,
        language: req.body.author.language,
        work: req.body.author.work,
        imgUrl: req.body.author.imgUrl
    }
    let author = AuthorData(item);
    author.save().then(function (data) {
        res.send({ status: true });
    }).catch(function (error) {
        res.send({ status: false });
    })
});

app.post('/update_book/:_id', function (req, res) { //done
    let _id = req.params._id;

    BookData.findByIdAndUpdate({ "_id": _id },
        {
            $set: {
                "name": req.body.book.name,
                "author": req.body.book.author,
                "genre": req.body.book.genre,
                "about": req.body.book.about,
                "imgUrl": req.body.book.imgUrl,
            }
        })
        .then(function () {
            res.send({ status: true });
        })
});


app.post('/update_author/:_id', function (req, res) { //done
    let _id = req.params._id;
    AuthorData.findByIdAndUpdate({ "_id": _id },
        {
            $set: {
                "name": req.body.author.name,
                "country": req.body.author.country,
                "language": req.body.author.language,
                "work": req.body.author.work,
                "imgUrl": req.body.author.imgUrl,
            }
        })
        .then(function () {
            res.send({ status: true });
        })
});

module.exports = app;