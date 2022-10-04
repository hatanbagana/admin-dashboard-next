const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mail: {
    type: String,
    unique: true,
    required: [true, 'Enter the email!'],
    },
  password: {
    type: String,
    required: [true, 'Enter the password!'],
  },
  name: {
    type: String,
    required: [true, 'Enter the name!'],
    },
});
module.exports = mongoose.model("Admin", adminSchema);
