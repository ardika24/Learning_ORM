const { Sneaker } = require("./models");

Sneaker.destroy({
  where: {
    id: 3,
  },
}).then(() => {
  console.log("Artikel sudah dihapus");
});
