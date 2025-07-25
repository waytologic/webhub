const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

global.__basedir = __dirname;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bhuvan." });
});

require("./app/routes/user.routes")(app);
require("./app/routes/userprofile.routes")(app);
require("./app/routes/images.routes")(app);
require("./app/routes/jobs.routes")(app);
require("./app/routes/upload.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 1616;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
