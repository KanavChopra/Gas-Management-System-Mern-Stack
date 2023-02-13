const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Gas = require("../models/gas");

router.post("/bookgas", async (req, res) => {
  const { gases, userid, address, bookedDate, quantity, totalAmount } =
    req.body;

  try {
    const newbooking = new Booking({
      gases: gases.name,
      gasid: gases._id,
      userid,
      address,
      bookedDate,
      quantity,
      totalAmount,
    });

    const booking = await newbooking.save();
    const gasTemp = await Gas.findOne({ _id: gases._id });
    gasTemp.currentBooking.push({
      bookingid: booking._id,
      bookedDate: bookedDate,
      userid: userid,
      status: booking.status,
    });
    await gasTemp.save();
    res.send("Gas booked Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getBookingsByUserId", async (req, res) => {
  const userid = req.body.userid;

  try {
    const bookings = await Booking.find({ userid: userid });
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/cancelBooking", async (req, res) => {
  const { bookingid, gasid } = req.body;
  try {
    const bookingItem = await Booking.findOne({ _id: bookingid });
    bookingItem.status = "cancelled";
    await bookingItem.save();
    const gas = await Gas.findOne({ _id: gasid });
    const bookings = gas.currentBooking;
    const temp = bookings.filter(
      (booking) => booking.bookingid.toString() !== bookingid
    );
    gas.currentBooking = temp;
    await gas.save();

    res.send("Your Booking is Cancelled");
  } catch (error) {}
});
router.get("/getAllBooking", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
