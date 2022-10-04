const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: [true, "Enter the name!"],
  },
  price: {
    type: String,
    required: [true, "Enter the price!"],
  },
  recipe: {
    type: String,
    required: [true, "Enter the recipe!"],
  },
  img: {
    type: String,
    required: [true, "Enter the image!"],
  },
});
module.exports = mongoose.model("Products", productSchema);
