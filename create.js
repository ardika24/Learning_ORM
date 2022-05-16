const { Sneaker } = require("./models");

Sneaker.create({
  name: "Converse One Star",
  description: "Tersedia Ukuran : 37-44",
  variant: "Black-White, Army-White",
  price: 600000,
  approved: true,
}).then((sneaker) => {
  console.log(sneaker);
});
