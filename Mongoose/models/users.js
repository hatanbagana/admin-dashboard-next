const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mail: {
    type: String,
    unique: true,
    required: [true, "Enter the email!"],
  },
  password: {
    type: String,
    required: [true, "Enter the password!"],
  },
  name: {
    type: String,
    required: [true, "Enter the name!"],
  },
  img: {
    type: String,
    required: [true, "Enter the image!"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Enter the phone number!"],
  },
});
module.exports = mongoose.model("Users", userSchema);
