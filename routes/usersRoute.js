const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
// router.get("/home", (req, res) => {
//   res.render("/home");
// });

router.post("/register", async (req, res) => {
  var bcrypt = require("bcryptjs");
  // Store hash in your password DB.
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);

  const newuser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashed,
    address: req.body.address,
    pincode: req.body.pincode,
    phoneNo: req.body.phoneNo,
  });
  console.log(newuser);
  try {
    newuser.save();
    res.send("User registeres Successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error Occured" });
  }

  // bcrypt.hash(req.body.password, saltRounds, function (err, has) {

  // });
});
router.post("/login", async (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  // try {
  //   const foundUser = await User.findOne({ email: email });
  //   if (!foundUser) console.log("Login Failed");
  //   else res.send(foundUser);
  //   const isPasswordCorrect = await bcrypt.compare(
  //     password,
  //     foundUser.password
  //   );
  //   if (!isPasswordCorrect) console.log("Login Failed");
  //   else console.log("Logged in Succesfully");
  // } catch (error) {
  //   console.log(error);
  //   return res.status(400).json({ message: "Login Error Occured" });
  // }
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("logged in failed");
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      console.log("Password Incorrect");
      return res.status(400).json({ message: "Password Incorrect" });
    } else {
      res.send(user);
      // res.redirect("/");
    }
    // Add your logic for a successful login
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Login error occured" });
  }
  // try {
  //   // console.log(req.body.email);
  //   const user = await User.findOne({ email: email, password: password });
  //   // console.log(user);
  //   if (user) {
  //     // res.send(user);
  //     console.log(user);
  //   } else {
  //     return res.status(400).json({ message: "Login Failed" });
  //   }
  // } catch (error) {
  //   console.log(error);
  //   // return res.status(400).json({ error });
  // }
});
router.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
