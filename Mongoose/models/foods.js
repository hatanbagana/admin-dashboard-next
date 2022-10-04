const mongoose = require("mongoose");
const pollSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orderdate:String,
  orderNumber: Number,
  user: String,
  order: String,
  total: String,
  card: String,
  phoneNumber: {
    type: String,
    required: [true, 'Enter the phone number!'],
  },
});
module.exports = mongoose.model("Poll", pollSchema);