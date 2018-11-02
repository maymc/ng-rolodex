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

//GET - /api/profile?user=:id - respond w/current user's profile
app.get('/api/profile/user/:id', (req, res) => {
  console.log("\n--> Server GET /api/profile/user/:id");
  console.log("\nreq.body:", req.params);
  // res.json("--> Server GET /api/profile/user/:id");

  const { id } = req.params;
  console.log("\nid:", id);

  Users
    .where('id', id)
    .fetch()
    .then(userData => {
      console.log("\nGET userData:\n", userData);
      res.json(userData);
    })
    .catch(err => {
      console.log("\nBackend GET /api/profile/user/:id - ERROR");
      res.json("Unable to get user data");
    })
})

// //PUT - /api/users?user=:id - edit current user acct info
// app.put('/api/users?users=:id', (req, res) => {
//   console.log("--> Server PUT /api/users?users=:id");
//   res.json("--> Server PUT /api/users?users=:id");
// })

// //POST - /api/login - log in user
// app.post('/api/login', (req, res) => {
//   console.log("--> Server POST /api/login");
//   res.json("--> Server POST /api/login");
// })

// //POST - /api/logout - log out user
// app.post('/api/logout', (req, res) => {
//   console.log("--> Server POST /api/logout");
//   res.json("--> Server POST /api/logout");
// })

// //POST - /api/register - register a new user with application
// app.post('/api/register', (req, res) => {
//   console.log("--> Server POST /api/register");
//   res.json("--> Server POST /api/register");
// })

// //GET - /api/contacts?user=:id - respond w/ all contacts for the logged in user
// app.get('/api/contacts?user=:id', (req, res) => {
//   console.log("--> Server GET /api/contacts?user=:id");
//   res.json("--> Server GET /api/contacts?user=:id");
// })

// //GET - /api/contacts/search/:term?user=:id - respond w/all contacts that match the search term for this user
// app.get('/api/contacts/search/:term?user=:id', (req, res) => {
//   console.log("--> Server GET /api/contacts/search/:term?user=:id");
//   res.json("--> Server GET /api/contacts/search/:term?user=:id");
// })

// //POST - /api/contacts - create & respond with a new contact
// app.post('/api/contacts', (req, res) => {
//   console.log("\n--> Server POST /api/contacts");
//   res.json("--> Server POST /api/contacts");

//   console.log("\nPOST - req.body:\n", req.body);
//   const newContact = {
//     id: req.body.id,
//     name: req.body.name,
//     address: req.body.address,
//     mobile: req.body.mobile,
//     work: req.body.work,
//     home: req.body.home,
//     email: req.body.email,
//     twitter: req.body.twitter,
//     instagram: req.body.instagram,
//     github: req.body.github
//   }
//   console.log("\nnewContact:\n", newContact);
//   // Contacts
//   //   .forge(newContact
//   //     .save()
//   //     .then(() => {
//   //       res.redirect('/');
//   //     })
//   //     .catch(err => {
//   //       console.log('POST - adding new contact', err)
//   //     })
// })

// //GET - /api/contacts/:id - respond w/ the contact that matches this id
// app.get('/api/contacts/:id', (req, res) => {
//   console.log("--> Server GET /api/contacts/:id");
//   res.json("--> Server GET /api/contacts/:id");
// })

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