const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testuser:1mfNIeRpAyP4njru@cluster0.2yxb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

  name: String,
  country: String,
  language: String,
  work: String,
  imgUrl: String,
});

var AuthorData = mongoose.model('author', AuthorSchema);

module.exports = AuthorData;