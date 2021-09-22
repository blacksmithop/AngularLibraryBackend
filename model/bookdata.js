const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testuser:1mfNIeRpAyP4njru@cluster0.2yxb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const BookSchema = new Schema({

  name: String,
  author: String,
  genre: String,
  about: String,
  imgUrl: String,
});

var BookData = mongoose.model('book', BookSchema);

module.exports = BookData;