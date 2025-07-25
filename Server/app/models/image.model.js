module.exports = (sequelize, Sequelize) => {
    const Images = sequelize.define("images", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      imgsrcdata: {
        type: Sequelize.BLOB('long')
      },
    });
  
    return Images;
  };
  