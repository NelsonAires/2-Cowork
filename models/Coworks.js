const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const coworksSchema = new Schema({
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

const Coworks = mongoose.model('Coworks', coworksSchema);
module.exports = Coworks;
