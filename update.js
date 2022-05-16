const { Sneaker } = require("./models");

const query = {
  where: {
    id: 1,
  },
};

Sneaker.update(
  {
    approved: false,
  },
  query
)
  .then(() => {
    console.log("Sneaker berhasil di update");
    process.exit();
  })
  .catch((err) => {
    console.error("Sneaker gagal di update");
  });
