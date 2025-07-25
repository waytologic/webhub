module.exports = app => {
  const users = require("../controllers/usersprofile.controller.js");

  var router = require("express").Router();

  // Create a new users
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);

  router.get("/user", users.findUser);
  // Retrieve a single user with id
  router.get("/:id", users.findOne);

  // Update a Users with id
  router.put("/:id", users.update);

  // Delete a Users with id
  router.delete("/:id", users.delete);

  // Delete all Users
  router.delete("/", users.deleteAll);

  app.use('/userprofile', router);
};
