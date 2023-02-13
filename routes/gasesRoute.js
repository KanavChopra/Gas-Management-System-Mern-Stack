const express = require("express");
const router = express.Router();
const Gas = require("../models/gas");
const Gasadmin = require("../models/GasAdmin");

router.get("/getAllGases", async (req, res) => {
  try {
    const gases = await Gas.find({});
    // return res.json({ data: gases });
    console.log(gases);
    res.send(gases);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});
router.get("/getAllGasAdmin", async (req, res) => {
  try {
    const gasesAdmin = await Gasadmin.find({});
    res.send(gasesAdmin);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
router.post("/getgasbyid", async (req, res) => {
  const gasid = req.body.gasid;
  try {
    const gas = await Gas.findOne({ _id: gasid });
    // console.log(gasid);
    // console.log(gas);
    res.send(gas);

    // res.send(gas);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
