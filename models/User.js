const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String, required:true, unique:true},
  password: {
    type: String, required:true},
    idAdmin: {
    type: Boolean,
    defaultValue: false
    },
  role: {
    type: String,
    default: "user"
    },
  confirmationCode: {
    type:String,
  },
  active: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
