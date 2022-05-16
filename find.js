const { Sneaker } = require("./models");

Sneaker.findAll().then((sneaker) => {
  console.log(sneaker);
});

Sneaker.findOne({
  where: {
    id: 1,
  },
}).then((sneaker) => {
  console.log(sneaker);
});
