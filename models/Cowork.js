const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const coworkSchema = new Schema({
  name: {
    type: String, required:true, unique:true},
  address: String,
  email: String,
  website: String,
  images: String,
  description: String,
  amenities: [{
    basics: [String],
    equipment:[String],
    facilities: [String], 
    transportation: [String],
    relax_zones: [String], 
  }],
  prices: String,
  opening_hours: [{
    week_day: String,
    weekend: String, 
  }],
});

const Cowork = mongoose.model('Cowork', coworkSchema);
module.exports = Cowork;
