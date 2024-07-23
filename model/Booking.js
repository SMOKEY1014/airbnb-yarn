const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  price: { type: Number },
  numberOfGuests: { type: Number },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  isConfirmed: { type: Boolean, default: false },
  isCanceled: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
  isRefunded: { type: Boolean, default: false },
  isCanceledByUser: { type: Boolean, default: false },
  isCanceledByHost: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
});

const BookingModel = mongoose.model("Booking", bookingSchema);
module.exports = BookingModel;
