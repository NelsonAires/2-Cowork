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
    email:'caisdosodre@gmail.com',
    website:'https://www.caisdosodre.com',
    images:['url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjU0JbcoeThAhVTBWMBHTqlC2MQjRx6BAgBEAU&url=https%3A%2F%2Fwww.timeout.pt%2Flisboa%2Fpt%2Fcoisas-para-fazer%2Fespacos-de-cowork-em-lisboa-para-trabalhar-em-comunidade&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444'],
    description:[''],
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
//2
  { 
    name: 'The Sea Office',
    adress: {
      street:"Praça Duque da Terceira, Lisbon, Portugal",
      number:'24',
      coordinates: [-9.23665819,38.6469761]
    },
    email:'theseaoffice@gmail.com',
    website:'https://www.theseaoffice.com',
    images:['url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwikrtryoeThAhWO1uAKHeaJD10QjRx6BAgBEAU&url=http%3A%2F%2Fgoocoworking.com.br%2Fhome-sobre%2F&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444'],
    description:'The Sea Office is located in Costa de Caparica, Portugal and it’s a combination of three: sleep, work and fun in the same place. You can work in a shared working space, take a nap in a restored 60’s villa and have fun by enjoying the possibilities that Costa de Caparica offers.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR 20/per day'],
    opening_hours: {
      week_day: '9:00 am - 9:00 pm',
      weekend: 'closed' 
    }
  },
    //3
  { 
    name: 'Impact Hub Lisbon',
    adress: {
      street:"Rua 1º de Maio, Museu Carris, Lisbon, Portugal",
      number:'213',
      coordinates: [-9.1791089,38.70138559999999]
    },
    email:'impacthublisbon@gmail.com',
    website:'https://www.impacthublisbon.com',
    images:['url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwikrtryoeThAhWO1uAKHeaJD10QjRx6BAgBEAU&url=http%3A%2F%2Fgoocoworking.com.br%2Fhome-sobre%2F&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444'],
    description:'It’s a community, it’s a shared space, it’s an incubator and accelerator it’s all this focused in sustainability and social innovation. We are a global network of like minded people that uses our more than 100 spaces in the world to create social innovation.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR 30/per day'],
    opening_hours: {
      week_day: '9:00 am - 9:00 pm',
      weekend: 'closed' 
    }
  },
  //4
  { 
    name: 'SITIO Alvalade',
    adress: {
      street:"Rua João Saraiva, Lisbon, Portugal",
      number:'34',
      coordinates: [-9.1432403,38.7565371]
    },
    email:'sitioalvalade@gmail.com',
    website:'https://www.sitioalvalade.com',
    images:['url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijo82jpOThAhUJWxoKHXuyAPQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.lifegate.com%2Fpeople%2Flifestyle%2Flisbon-second-home-coworking-space&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444'],
    description:'With an excellent location in the Alvalade district, close to Lisbon Airport and the public transportation and access to the city, surrounded by all the necessary infrastructures, commerce and services',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR 20/per day'],
    opening_hours: {
      week_day: '9:00 am - 9:00 pm',
      weekend: 'closed' 
    }
  },
  //5////////////
  { 
    name: 'The Sea Office',
    adress: {
      street:"Praça Duque da Terceira, Lisbon, Portugal",
      number:'24',
      coordinates: [-9.23665819,38.6469761]
    },
    email:'theseaoffice@gmail.com',
    website:'https://www.theseaoffice.com',
    images:['url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwikrtryoeThAhWO1uAKHeaJD10QjRx6BAgBEAU&url=http%3A%2F%2Fgoocoworking.com.br%2Fhome-sobre%2F&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444'],
    description:'The Sea Office is located in Costa de Caparica, Portugal and it’s a combination of three: sleep, work and fun in the same place. You can work in a shared working space, take a nap in a restored 60’s villa and have fun by enjoying the possibilities that Costa de Caparica offers.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:['EUR 20/per day'],
    opening_hours: {
      week_day: '9:00 am - 9:00 pm',
      weekend: 'closed' 
    }
  },
////////////////////////////////////////
 
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