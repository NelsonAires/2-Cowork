// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Coworks = require("../models/Coworks")

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
    role: "user",
  },
  {
    email: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    role: "user",
  }
]

let coworks = [
  //1
  { 
    name: 'Cowork Central Cais do Sodré',
    adress: {
      street:"Praça Duque da Terceira, Lisbon, Portugal",
      number:'24',
    },
    email:'caisdosodre@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjU0JbcoeThAhVTBWMBHTqlC2MQjRx6BAgBEAU&url=https%3A%2F%2Fwww.timeout.pt%2Flisboa%2Fpt%2Fcoisas-para-fazer%2Fespacos-de-cowork-em-lisboa-para-trabalhar-em-comunidade&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444',
    description: 'Cowork Central is a hub for creative, independent minds situated bang in the heart of Lisbon. As well as desk and office space for freelancers, startups and small companies we provide a range of services with the goal of enabling you to focus on what’s most important: the success of your business.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:'EUR 12.50/per day',
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
    },
    email:'theseaoffice@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwikrtryoeThAhWO1uAKHeaJD10QjRx6BAgBEAU&url=http%3A%2F%2Fgoocoworking.com.br%2Fhome-sobre%2F&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444',
    description:'The Sea Office is located in Costa de Caparica, Portugal and it’s a combination of three: sleep, work and fun in the same place. You can work in a shared working space, take a nap in a restored 60’s villa and have fun by enjoying the possibilities that Costa de Caparica offers.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:'EUR 20/per day',
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
      number:'213'
    },
    email:'impacthublisbon@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwikrtryoeThAhWO1uAKHeaJD10QjRx6BAgBEAU&url=http%3A%2F%2Fgoocoworking.com.br%2Fhome-sobre%2F&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444',
    description:'It’s a community, it’s a shared space, it’s an incubator and accelerator it’s all this focused in sustainability and social innovation. We are a global network of like minded people that uses our more than 100 spaces in the world to create social innovation.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:'EUR 30/per day',
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
      number:'34'
    },
    email:'sitioalvalade@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijo82jpOThAhUJWxoKHXuyAPQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.lifegate.com%2Fpeople%2Flifestyle%2Flisbon-second-home-coworking-space&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444',
    description:'With an excellent location in the Alvalade district, close to Lisbon Airport and the public transportation and access to the city, surrounded by all the necessary infrastructures, commerce and services',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:'EUR 20/per day',
    opening_hours: {
      week_day: '9:00 am - 9:00 pm',
      weekend: 'closed' 
    }
  },
  //5////////////
  { 
    name: 'Unicorn Liberdade',
    adress: {
      street:"Avenida da Liberdade, Lisboa, Portugal",
      number:'10'
    },
    email:'unicorn@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'url:https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwikrtryoeThAhWO1uAKHeaJD10QjRx6BAgBEAU&url=http%3A%2F%2Fgoocoworking.com.br%2Fhome-sobre%2F&psig=AOvVaw3PgpbFjOyuWX4jjOfE4HYD&ust=1556041831146444',
    description:'Fully serviced workspaces in the heart of Lisbon.From a receptionist, coffee, filtered water, fruits, cleaning, janitor service and more are all included in the rent. Let us take care of running your office.Private offices, flex or fixed desks. Whether you are in need of a single team office, a desk for a day, month or year. We can accommodate all your needs.',
    amenities:{
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:'EUR 20/per day',
    opening_hours: {
      week_day: '9:00 am - 9:00 pm',
      weekend: 'closed' 
    }
  },
//6 
  { 
    name: 'Cowork Central Príncipe Real',
    adress: {
      street:"Rua da Alegria, 3rd floor, Lisbon, Portugal",
      number:'122B'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'Cowork Central is a hub for creative, independent minds situated bang in the heart of Lisbon. As well as desk and office space for freelancers, startups and small companies we provide a range of services with the goal of enabling you to focus on what’s most important: the success of your business.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:'EUR 12.50/per day',
    opening_hours: {
      week_day: '9:00 am - 8:00 pm',
      weekend: 'closed' 
    },
  },
  //7
  { 
    name: 'Avila Spaces',
    adress: {
      street:"Av. República, Lisbon, Portugal",
      number:'6'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'Located at Av. da República, close to Saldanha, it is a wide and quiet space, where several companies and professionals work, occupying one or more work stations, using the support of a professional secretariat, meeting and work rooms.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Projector','Printer'],
      facilities:['Kitchen','Personal lockers','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Rooftop'],
    },
    prices:'EUR 40.00/per day',
    opening_hours: {
      week_day: '9:00 am - 7:00 pm',
      weekend: 'closed' 
    },
  },
  //8
  { 
    name: 'IDEIA Parque das Nações',
    adress: {
      street:"Av. D. João II, Lisbon, Portugal",
      number:'nº35 , 11th floor'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'N/A',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen','Personal lockers','Skype Room'],
      transportation:['10 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Chill-out Area'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '9:00 am - 6:00 pm',
      weekend: 'closed' 
    },
  }, 
  //9 
  { 
    name: 'Espaço 3D',
    adress: {
      street:"Rua Braamcamp, Lisbon, Portugal",
      number:'nº84 , 3rd floor'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'Come and meet the most interesting co-work community in Lisbon.We believe in balance and sustainability, that life is more than just work, that creative processes arise when least expected. We work passionately and are bind to something much bigger than us: helping entrepreneurs creating their dreams. We provide not just workspace, but also community and services that support forward-thinking people and companies.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen','Personal lockers','Skype Room'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Chill-out Area'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '8:30 am - 7:00 pm',
      weekend: 'closed' 
    },
  }, 
  //10 
  { 
    name: 'IDEIA Palácio Sottomayor',
    adress: {
      street:"Avenida Fontes Pereira de Melo, Lisbon, Portugal",
      number:'16'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'N/A',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Scanner','Printer'],
      facilities:['Skype Room'],
      transportation:['2 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Chill-out Area'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '9:00 am - 6:00 pm',
      weekend: 'closed' 
    },
  }, 
  //11
  { 
    name: 'Coworklisboa',
    adress: {
      street:" Rua Rodrigues Faria, Lisbon, Portugal",
      number:'103 LxFactory - Edifício I - 4º Andar '
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'A shared workspace with an eclectic mix of independent professionals sounds like an intriguing venture to get into doesn’t it? If you answered yes, you’re up for some great times ahead at Coworklisboa. Diverse professionals from designers, entrepreneurs, techies to scientists make their way to share a workspace in Coworklisboa. You’re probably the only one left who’s missing out on all the fun.',
    amenities:{ 
      basics:['Wifi'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Chill-out Area'],
    },
    prices:'EUR 12.00/per day',
    opening_hours: {
      week_day: '24 hours',
      weekend: '24 hours' 
    },
  }, 
  //12
  { 
    name: 'Workup',
    adress: {
      street:"Rua Tomás da Fonseca, Lisbon, Portugal",
      number:'40A'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'Workup is an innovative Cowork concept that provides a workspace in the center of Lisbon, 5 minutes from the airport in a privileged location beside the university stadium, next to the golf Academy, very close to the Classical University and the Catholic University, on the same street where is one of the largest business area of ​​Lisbon, Torres de Lisboa, with an excellent location both for those who want to develop their academic work, professional or business activity.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Video Recording Equipment','Printer'],
      facilities:['Kitchen','Personal lockers','Co-living Accommodation'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Outdoor Terrace', 'Swimming Pool'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '7:00 am - 11:00 pm',
      weekend: '9:00 am - 7:00 pm' 
    },
  }, 
  //13
  { 
    name: 'House of Maria Amalia',
    adress: {
      street:"Rua Padre Luís Aparício, Lisbon, Portugal",
      number:'9, 6th floor'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'PET FRIENDLY COWORKING SPACE | LISBOA ',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['N/A'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '24 hours',
      weekend: '24 hours' 
    },
  }, 
  //14
  { 
    name: 'BWORKING SPACE',
    adress: {
      street:"Rua Latino Coelho, store, Lisbon, Portugal",
      number:'13A'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'The ideal solution for creative and professional businessmen looking for a space in Lisbon. The tables are surrounded by giant windows that create an incredible atmosphere of comfort that only natural light can provide and if you still want to catch the beautiful Lisbon sun.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen','Skype Room', 'Podcasting Room'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Outdoor Terrace'],
    },
    prices:'EUR 18.45/per day',
    opening_hours: {
      week_day: '8:30 am - 6:00 pm',
      weekend: 'closed' 
    },
  }, 
  //15
  { 
    name: 'Garagem Infinita',
    adress: {
      street:"Rua Damasceno Monteiro, Lisbon, Portugal",
      number:'110D'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'We host creatives, designers, developers, entrepreneurs, and digital nomads in a remodeled garage-turned-office. If you need temporary office space, a meeting room to pitch your startup or want to organize an event or workshop in Portugal, Garagem Infinita is ready to help you.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen','Skype Room'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Chill-out Area'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '9:00 am - 6:00 pm',
      weekend: 'closed' 
    },
  }, 
  //16
  { 
    name: 'WIP Lisboa',
    adress: {
      street:"Rua São Bento, Lisbon, Portugal",
      number:'31'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'WIP is a community driven work space designed to inspire and support your individual and collaborative projects.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen','Skype Room', 'Personal Lockers'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Outdoor Terrace', 'Chill-out Area'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '9:00 am - 6:00 pm',
      weekend: 'closed' 
    },
  }, 
  //17
  { 
    name: 'The Block Cafe',
    adress: {
      street:"Rua Latino Coelho, 1, Lisbon, Portugal",
      number:'63'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: "Our space feels much more like a massive living room than a traditional coworking-space, with different ambiances: sofas, standing desks, individual and group tables.We also have an amazing terrace with it's own micro climate, it's used even in the winter.",
    amenities:{ 
      basics:['Wifi','Heating'],
      equipment:['Scanner','Printer', 'Projector'],
      facilities:['Kitchen','Skype Room', 'Phone Booth'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Outdoor Terrace'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '10:00 am - 6:30 pm',
      weekend: 'closed' 
    },
  }, 
  //18
  { 
    name: 'Entrepreneur Houses',
    adress: {
      street:"Rua dos lirios, Amora, Lisbon, Portugal",
      number:'271'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'Entrepreneur Houses has a spacious 250m2 Co-Working space. It is located on the south shore of the Rio Tejo, close to Aroeira, Costa da Caparica and the different beaches, where you can do Yoga, Surf, Kite Surf...',
    amenities:{ 
      basics:['Wifi','Heating'],
      equipment:['Scanner','Printer', 'Projector'],
      facilities:['Kitchen','Skype Room', 'Showers'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Swimming Pool', 'Outdoor Terrace', 'Yoga Studio'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '8:30 am - 8:30 pm',
      weekend: '11:00 am - 7:00 pm' 
    },
  }, 
  //19
  { 
    name: 'BECO',
    adress: {
      street:"Rua da Madalena, Lisbon, Portugal",
      number:'214'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'BECO is a co-working space focused in the creative industries, that aims to result has a micro and tailored creative hub that inspires everyone who is involved. The synergistic effect will be enhanced by the fact that this space only accommodates 25 creative minds. Besides this, BECO intent to activate several talks & exhibitions to empower talented creatives and share new thoughts.',
    amenities:{ 
      basics:['Wifi','Heating'],
      equipment:['Scanner','Printer'],
      facilities:['Kitchen','Personal Lockers', 'Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Outdoor Terrace', 'Chill-out Area'],
    },
    prices:'EUR 14.00/per day',
    opening_hours: {
      week_day: '8:00 am - 10:00 pm',
      weekend: 'closed' 
    },
  }, 
  //20
  { 
    name: 'Village Underground',
    adress: {
      street:"Rua 1º de Maio, Lisbon, Portugal",
      number:'103'
    },
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'url: ',
    description: 'An international platform for culture and creativity, Village Underground sits in the coworking hub of Lisbon, Portugal. A quirky space, the venue has a unique architecture in that the structure is made from shipping containers and double decker buses recycled into office spaces, a recording studio plus a restaurant and a conference room. It is now a landmark on the Lisbon landscape and home to the creative community in the city.',
    amenities:{ 
      basics:['Wifi','Air-conditioning'],
      equipment:['Recording Studio'],
      facilities:['Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge', 'Outdoor Terrace'],
    },
    prices:'EUR 15.00/per day',
    opening_hours: {
      week_day: '24 hours',
      weekend: '24 hours' 
    },
  }, 

//COWORK

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
console.log('loli1')
Coworks.deleteMany()
.then(() => {
  console.log('loli2')
  Coworks.create(coworks)
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  console.log('loli3')
})
.catch(err => {
  mongoose.disconnect()
  throw err
})