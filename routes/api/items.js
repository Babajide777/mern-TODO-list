const express = require("express");
const Router = require("express").Router();
const Item = require("../../models/itemModel");

Router.get("/", (req, res) => {
  Item.find()
    .sort({ Date: -1 })
    .then((items) => res.json(items))
    .catch((e) => console.log(e));
});

Router.post("/", (req, res) => {
  const { name } = req.body;

  const newItem = new Item({
    name: name,
  });

  newItem
    .save()
    .then((item) => {
      res.json(item);
      console.log("name saved");
    })
    .catch((e) => console.log(e));
});

Router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Item.findByIdAndDelete(id)
    .then((item) => console.log("Item successfully deleted"))
    .catch((e) => {
      res.status(404).json({ sucess: false });
    });
});
module.exports = Router;
