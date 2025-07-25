const fs = require('fs').promises;

const db = require("../models");
const Picture = db.images;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  console.log(req.file);
  
  if (req.file == undefined) {
    return res.send(`You must select a file.`);
  }

  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
    
    // Create a User
    const picture = {   
      email: req.body.email,
      name:req.body.name,
      type:req.file.mimetype,
      imgsrcdata:fs.readFileSync("/"+__basedir + "/assets/uploads/" + req.file.filename),
    };

  // Save User in the database
  Picture.create(picture)
    .then(data => {
      fs.writeFileSync(
        __basedir + "/assets/tmp/" + image.name,image.imgsrcdata,
      res.send(data) + `File has been uploaded.`);      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the image when trying upload images: ${err}."
      });
    });
};

// Retrieve all Users from the database.
exports.findUser = (req, res) => {
  const email = req.query.email;  
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  Picture.findUser({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Picture.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    });
    
};

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Picture.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a Users by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Picture.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Picture.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Picture.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Pictures were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Pictures."
      });
    });
};
