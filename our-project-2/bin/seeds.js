// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/our-project-2', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    email: "Alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    email: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  }
]

let coworks = [
  {
    name: 'Cowork Central Cais do Sodré',
    adress: {
      street:"Praça Duque da Terceira, Lisbon, Portugal",
      number:'24',
      coordinates: [-9.421558, 39.007024]
    },
    email:'@gmail.com',
    website:'www.caisdosodre.com',
    images:['url:'],
    description:[''],
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['10€','20€','15€'],
    opening_hours:['9h-19h', '8h-23h', '7h-22h']
  },

  {},//COWORK

]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})