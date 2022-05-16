const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { Sneaker } = require("./models");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/sneakers", (req, res) => {
  Sneaker.findAll().then((sneaker) => {
    res.status(200).json(sneaker);
  });
});

app.get("/sneakers/:id", (req, res) => {
  Sneaker.findOne({
    where: {
      id: req.params.id,
    },
  }).then((sneaker) => {
    res.status(200).json(sneaker);
  });
});

app.post("/sneakers", (req, res) => {
  Sneaker.create({
    name: req.body.name,
    description: req.body.description,
    variant: req.body.variant,
    price: req.body.price,
    approved: req.body.approved,
  }).then((sneaker) => {
    res.status(201).json(sneaker);
  });
});

app.put("/sneakers/:id", (req, res) => {
  Sneaker.update(
    {
      name: req.body.name,
      description: req.body.description,
      variant: req.body.variant,
      price: req.body.price,
      approved: req.body.approved,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((sneaker) => {
      res.status(201).json(sneaker);
    })
    .catch((err) => {
      res.status(422).json("Can't Create Sneakers Article");
    });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
