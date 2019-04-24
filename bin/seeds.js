// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Cowork = require("../models/Cowork")

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
    name: 'Cowork Cais do Sodré',
    address: "Praça Duque da Terceira, 24, Lisbon, Portugal",
    email:'caisdosodre@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'http://blog.coworkies.com/wp-content/uploads/2017/11/Coworklisboa_coworking.jpg',
    description: 'Cowork Central is a hub for creative, independent minds situated bang in the heart of Lisbon. As well as desk and office space for freelancers, startups and small companies we provide a range of services with the goal of enabling you to focus on what’s most important: the success of your business.',
    amenities:{
      basics:['Wifi ','Air-conditioning'],
      equipment:['Projector ','Printer'],
      facilities:['Kitchen ','Personal lockers ','Event Space For Rent'],
      transportation:['5 Minute Walk From Public Transit'],
      relax_zones:['Lounge ', 'Rooftop'],
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
    address: "Praça Duque da Terceira, 24 Lisbon, Portugal",
    email:'theseaoffice@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'https://static1.squarespace.com/static/56c77f73f699bb77fbd8e303/t/59de610e90badef7f4cfe669/1507746077917/houspace-lisbon-coworking',
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
    address: "Rua 1º de Maio, 213, Museu Carris, Lisbon, Portugal",
    email:'impacthublisbon@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'https://s3-us-west-2.amazonaws.com/wf-fileserver-sync/files/2018/08/213850-jRMjSUuQtqJZW3yHxWtX-IMG_20180827_222419-720x440.jpg',
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
    address: "Rua João Saraiva, 34, Lisbon, Portugal",
    email:'sitioalvalade@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'https://www.coworker.com/lab/wp-content/uploads/2016/12/makers-of-barcelona-900x598.jpg',
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
    address: "Avenida da Liberdade, 10, Lisboa, Portugal",
    email:'unicorn@gmail.com',
    website:'https://www.caisdosodre.com',
    images:'https://www.travelinglifestyle.net/wp-content/uploads/2016/11/best-coworking-spaces-around-the-world-759x500.jpg',
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
    name: 'Cowork Príncipe Real',
    address: "Rua da Alegria, 122B, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://www.lifegate.com/app/uploads/Second-Home-Lisboa-edited.png',
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
    address: "Av. República, 6, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://www.officelovin.com/wp-content/uploads/2017/07/avila.jpg',
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
    address: "Av. D. João II, 35, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7JOIYGOOuByNvc5ggq9O2Hi9Y7MmIfk23cY3Xw_--QhLqopm',
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
    address: "Rua Braamcamp, 84, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbnoN0wFPn8OFxu4moJmyD0z43L770HIS0aIhbdWF2Oge7mXf4w',
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
    name: 'Palácio Sottomayor',
    address: "Avenida Fontes Pereira de Melo, 16, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://portugalstartups.com/wp-content/uploads/2016/02/impactHub_Amsterdam-1068x587.jpg',
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
    address: "Rua Rodrigues Faria, 103, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://www.coworkbooking.com/images/742!504/kapacita/4009/auditorium.jpg',
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
    address: "Rua Tomás da Fonseca, 40A, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://d2lgtvdb6hylu5.cloudfront.net/439bc45e66f52eb860b9a12bf7768cf9716af9d0/12379.560x398x0.jpg',
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
    address: "Rua Padre Luís Aparício, 9, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://assets-global.website-files.com/5a8dab23b7a50a0001e1ecc6/5b294df574d0a24be1b25e17_Remote%20Year%20Coworking%20Spaces.jpg',
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
    address: "Rua Latino Coelho, 13A, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://cdn-images-1.medium.com/max/1496/0*PrpD0ee9XQWW0jFC.jpg',
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
    address: "Rua Damasceno Monteiro, 110D, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://static1.squarespace.com/static/53dc4794e4b0397c480f3887/t/56ef29de86db433c87c872ab/1458514502791/',
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
    address: "Rua São Bento, 31, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://barbaracameronpix.com/wp-content/uploads/2018/10/bcp_181012_4820_LR.jpg',
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
    address: "Rua Latino Coelho, 63, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://i.pinimg.com/originals/38/5e/d9/385ed99bb2512ef4ad584aec414e420f.jpg',
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
    address: "Rua dos lirios, 271, Amora, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://s3-ap-southeast-1.amazonaws.com/esquire-sg/2019/03/18203218/the-cocoon-space-design-orchard-local-fashion-singapore-sustainability-eco-friendly-co-working-space-esquire-singapore-esquiresg-cover-740x370.jpg',
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
    address: "Rua da Madalena, Lisbon, 214, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'https://museumplanner.org/wp-content/uploads/2018/10/46dd41f1ab67c4313184c0f78447d323_XL.jpg',
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
    address: "Rua 1º de Maio, 103, Lisbon, Portugal",
    email:'@gmail.com',
    website:'https://www.coworkcentral.pt',
    images:'http://blog.websummit.net/wp-content/uploads/2016/03/lisbonblog8.jpg',
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
.then(() => Cowork.deleteMany())
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
  return Cowork.create(coworks)
})
.then(coworksCreated => {
  console.log(`${coworksCreated.length} coworks created`);
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
