module.exports = app => {
  
  var router = require("express").Router();
  const Images = require("../controllers/images.controller.js");
  const homeController = require("../controllers/view");
  const upload = require("../middleware/upload");

  // Create a new Images
  router.post("/", Images.create);

  router.post("/upload", upload.single("file"), Images.create);

  // Retrieve all Images
  router.get("/", Images.findAll);

  router.get("/view", homeController.getview);

  router.get("/user", Images.findUser);

  // Retrieve a single user with id
  router.get("/:id", Images.findOne);

  // Update a Users with id
  router.put("/:id", Images.update);

  // Delete a Users with id
  router.delete("/:id", Images.delete);

  // Delete all Users
  router.delete("/", Images.deleteAll);

  app.use('/images', router);
};
