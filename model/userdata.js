const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testuser:1mfNIeRpAyP4njru@cluster0.2yxb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  username: String,
  password: String,
  email: String,
  admin: Boolean
});

var UserData = mongoose.model('user', UserSchema);

module.exports = UserData;