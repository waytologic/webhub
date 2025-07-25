module.exports = app => {
    const Jobs = require("../controllers/jobs.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Jobs
    router.post("/", Jobs.create);
  
    // Retrieve all Jobs
    router.get("/", Jobs.findAll);
  
    router.get("/user", Jobs.findUser);
    // Retrieve a single user with id
    router.get("/:id", Jobs.findOne);
  
    // Update a Users with id
    router.put("/:id", Jobs.update);
  
    // Delete a Users with id
    router.delete("/:id", Jobs.delete);
  
    // Delete all Users
    router.delete("/", Jobs.deleteAll);
  
    app.use('/Jobs', router);
  };
  