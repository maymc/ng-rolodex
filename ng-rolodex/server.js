const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 7000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})