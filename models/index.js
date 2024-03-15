const mongoose = require("mongoose");
const uri = "mongodb+srv://intern_admin_roni:zr69uxvPARmBgzGJ@cluster0.v4fkr.mongodb.net/inventory-manage?retryWrites=true&w=majority";
function main() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Succesfull");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
