require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const SERVER_PORT = process.env.SERVER_PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const items = require("./routes/api/items");
const app = express();

app.use(express.json());

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (e) => {
    e
      ? console.log(`Error connecting to databse /n ${e}`)
      : console.log(`Successfully connected to database`);
  }
);

app.use("/api/items", items);

const PORT = process.env.PORT || SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
