const mongoose = require('mongoose');
const validator = require('validator');

const shopSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  countryCode: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validator.isURL(link),
      message: (props) => `${props.value} введена не ссылка`,
    },
  },

});

module.exports = mongoose.model('shop', shopSchema);