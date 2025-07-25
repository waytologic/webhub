module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
     password: {
        type: Sequelize.STRING
      },
      phoneno: {
        type: Sequelize.NUMBER
      },
      role: {
        type: Sequelize.STRING
      },
    });
  
    return Users;
  };
  