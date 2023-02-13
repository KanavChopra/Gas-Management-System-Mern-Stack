const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");
const app = express();

dotenv.config({ path: "./config.env" });
app.use(cors());

const dbconfig = require("./db");
const gasesRoute = require("./routes/gasesRoute");
const usersRoute = require("./routes/usersRoute");
const bookingRoute = require("./routes/bookingRoute");
app.use(express.json());
app.use("/api/gases", gasesRoute);
app.use("/api/gas", gasesRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port 5000"));
