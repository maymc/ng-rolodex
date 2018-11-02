//SERVER SIDE

const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 7000;
const bodyParser = require("body-parser");
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

//Import in the Tasks model
const Users = require('./db/models/users_table.js');
const Contacts = require('./db/models/contacts_table.js');

//Returns already parsed info/object as "req.body"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//~~~~~~Routes~~~~~~~~~//

//GET - /api/profile/user/:id - respond w/current user's profile
app.get('/api/profile/user/:id', (req, res) => {
  console.log("\n--> Server GET /api/profile/user/:id");
  console.log("\nGET - req.params:", req.params);

  const { id } = req.params;
  console.log("\nCheck id:", id);

  Users
    .where('id', id)
    .fetch()
    .then(userData => {
      console.log("\nGET userData:\n", userData);
      res.json(userData);
    })
    .catch(err => {
      console.log("\nBackend GET /api/profile/user/:id - ERROR");
      res.json("Unable to get user data.");
    })
})

//PUT - /api/users/user/:id - edit current user acct info
app.put('/api/users/user/:id', (req, res) => {
  console.log("\n--> Server PUT /api/users/user/:id");
  console.log("PUT - req.params:", req.params);
  console.log("\nPUT - req.body:\n", req.body);

  const { id } = req.params;
  console.log("\nCheck id:", id);

  const updatedUser = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  }

  Users
    .where('id', id)
    .fetch()
    .then(userData => {
      console.log("\nPUT - userData:\n", userData);
      userData.save(updatedUser);
      res.json(userData);
    })
    .catch(err => {
      console.log("Backend - PUT /api/users/user/:id - ERROR");
      res.json("Unable to update user data");
    })
})

//POST - /api/login - log in user
app.post('/api/login', (req, res) => {
  console.log("\n--> Server POST /api/login");
  console.log("\nPOST - req.body:\n", req.body);

  const checkUser = {
    username: req.body.username,
    password: req.body.password
  }

  console.log("\n User to check for in DB:\n", checkUser);

  Users
    .where("username", checkUser.username)
    .fetch()
    .then(results => {
      console.log("\nCheck results:\n", results);
      if (results === null) {
        console.log("\nLOGIN ERROR - User does not exist. Cannot log in.");
        res.json(results);
      }
      else {
        console.log("\nUser exists. User can log in.");
        res.json(results);
      }
    })
    .catch(err => {
      console.log("Backend - POST /api/login - ERROR");
      res.json("Unable to log in user");
    })
})

// //POST - /api/logout - log out user
// app.post('/api/logout', (req, res) => {
//   console.log("\n--> Server POST /api/logout");


// })

//POST - /api/register - register a new user with application
app.post('/api/register', (req, res) => {
  console.log("\n--> Server POST /api/register");
  console.log("\nPOST - Register - req.body:\n", req.body);

  const newUser = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  }

  console.log("\nPOST - newUser check:\n", newUser);

  Users
    .forge(newUser)
    .save()
    .then((results) => {
      console.log("\nPOST - register - New User added!");
      res.json(results)
    })
    .catch(err => {
      console.log("POST /api/register - ERROR");
      res.json("Unable to register new user");
    })

})

//GET - /api/contacts/user/:id - respond w/ all contacts for the logged in user
app.get('/api/contacts/user/:id', (req, res) => {
  console.log("\n--> Server GET /api/contacts/user/:id");
  console.log("\nreq.params:", req.params);

  const { id } = req.params;

  console.log("\nCheck id:", id);

  Contacts
    .where("created_by", id)
    .fetchAll()
    .then(allContacts => {
      console.log("\nGET - Logged-In user contacts:\n", allContacts.models);
      res.json(allContacts.serialize());
    })
    .catch(err => {
      console.log("\nGET /api/contacts/user/:id - ERROR");
      res.json("Unable to get user's contacts");
    })
})

// //GET - /api/contacts/search/:term?user=:id - respond w/all contacts that match the search term for this user
// app.get('/api/contacts/search/:term?user=:id', (req, res) => {
//   console.log("--> Server GET /api/contacts/search/:term?user=:id");
//   res.json("--> Server GET /api/contacts/search/:term?user=:id");
// })

//POST - /api/contacts - create & respond with a new contact
app.post('/api/contacts', (req, res) => {
  console.log("\n--> Server POST /api/contacts");
  console.log("\nPOST - req.body:\n", req.body);

  const newContact = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: 1
  }
  console.log("\nnewContact:\n", newContact);

  Contacts
    .forge(newContact)
    .save()
    .then((results) => {
      console.log("\nPOST - New Contact added!");
      res.json(results);
    })
    .catch(err => {
      console.log("\nPOST /api/contacts - ERROR");
      res.json("Unable to add new contact");
    })
})

//GET - /api/contacts/:id - respond w/ the contact that matches this id
app.get('/api/contacts/:id', (req, res) => {
  console.log("\n--> Server GET /api/contacts/:id");
  console.log("\nGET - Requested contact id:", req.params);

  const { id } = req.params;
  console.log("\nCheck id:", id);

  Contacts
    .where("id", id)
    .fetch()
    .then(requestedContact => {
      console.log("\nGET - Requested contact:\n", requestedContact);
      res.json(requestedContact);
    })
    .catch(err => {
      console.log("\nGET /api/contacts/:id - ERROR");
      res.json("Unable to get requested contact");
    })
})

// //PUT - /api/contacts/:id - update & respond w/updated contact
// app.put('/api/contacts/:id', (req, res) => {
//   console.log("--> Server PUT /api/contacts/:id");
//   res.json("--> Server PUT /api/contacts/:id");
// })

// //DELETE - /api/contacts/:id - delete contact that matches given id, respond with Status 200 OK
// app.delete('/api/contacts/:id', (req, res) => {
//   console.log("--> Server DELETE /api/contacts/:id");
//   res.json("--> Server DELETE /api/contacts/:id");
// })



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})