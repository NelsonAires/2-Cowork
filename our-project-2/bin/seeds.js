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
      coordinates: [-9.1452867, 38.7066134,]
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:['url: '],
    description: 'Cowork Central is a hub for creative, independent minds situated bang in the heart of Lisbon. As well as desk and office space for freelancers, startups and small companies we provide a range of services with the goal of enabling you to focus on what’s most important: the success of your business.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR 12.50/per day'],
    opening_hours: {
      week_day: '9:00 am - 9:00 pm',
      weekend: 'closed' 
    }
  },
  { 
    name: 'Cowork Central Príncipe Real',
    adress: {
      street:"Rua da Alegria, 3rd floor, Lisbon, Portugal",
      number:'122B',
      coordinates: [-9.1497635,17, 38.7172234]
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:['url: '],
    description: 'Cowork Central is a hub for creative, independent minds situated bang in the heart of Lisbon. As well as desk and office space for freelancers, startups and small companies we provide a range of services with the goal of enabling you to focus on what’s most important: the success of your business.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR 12.50/per day'],
    opening_hours: {
      week_day: '9:00 am - 8:00 pm',
      weekend: 'closed' 
    },
  },
  { 
    name: 'Avila Spaces',
    adress: {
      street:"Av. República, Lisbon, Portugal",
      number:'6',
      coordinates: [-9.1470209, 38.7348591]
    },
    email:'@gmail.com',
    website:'',
    images:['url: '],
    description: 'Located at Av. da República, close to Saldanha, it is a wide and quiet space, where several companies and professionals work, occupying one or more work stations, using the support of a professional secretariat, meeting and work rooms.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR EUR 40.00/per day'],
    opening_hours: {
      week_day: '9:00 am - 7:00 pm',
      weekend: 'closed' 
    },
  },
  { 
    name: 'IDEIA Parque das Nações',
    adress: {
      street:"Av. D. João II, Lisbon, Portugal",
      number:'nº35 , 11º',
      coordinates: []
    },
    email:'@gmail.com',
    website:'',
    images:['url: '],
    description: 'Located at Av. da República, close to Saldanha, it is a wide and quiet space, where several companies and professionals work, occupying one or more work stations, using the support of a professional secretariat, meeting and work rooms.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR EUR 40.00/per day'],
    opening_hours: {
      week_day: '9:00 am - 7:00 pm',
      weekend: 'closed' 
    },
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