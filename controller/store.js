const Store = require("../models/store");

// Add Store
const addStore = async (req, res) => {
  const addStore = {
    userID: req.body.userId,
    name: req.body.name,
    category: req.body.category,
    address: req.body.address,
    city: req.body.city,
    image: req.body.image,
  };
  const result = await Store.create(addStore);
  // addStore
  //   .save()
  //   .then((result) => {
  //     console.log("res ", result);
  //     res.status(200).send(result);
  //   })
  //   .catch((err) => {
  //     res.status(402).send(err);
  //   });
  res.status(200).send(result);
};

// Get All Stores
const getAllStores = async (req, res) => {
  const findAllStores = await Store.find({ userID: req.params.userID }).sort({
    _id: -1,
  }); // -1 for descending;
  res.json(findAllStores);
};

module.exports = { addStore, getAllStores };
