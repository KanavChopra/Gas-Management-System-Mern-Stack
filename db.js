const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

var mongoURL = process.env.MONGOURL;

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // useFindAndModify: false,
});

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB connection Successfull");
});

module.exports = mongoose;
