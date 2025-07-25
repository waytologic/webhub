module.exports = (sequelize, Sequelize) => {
  const Userprofile = sequelize.define("userprofile", {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    professional: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    currentcompany: {
      type: Sequelize.STRING
    },
    techskils: {
      type: Sequelize.STRING
    },
    languages: {
      type: Sequelize.STRING
    },
    resume: {
      type: Sequelize.STRING
    },
    fullorpart: {
      type: Sequelize.STRING
    },
    aboutprofile: {
      type: Sequelize.STRING
    },
    Nickname: {
      type: Sequelize.STRING
    },
    workexprience: {
      type: Sequelize.STRING
    },   
    expriencetitle: {
      type: Sequelize.STRING
    },
    expriencedesc: {
      type: Sequelize.STRING
    },
    phoneno: {
      type: Sequelize.NUMBER
    },
    localitity: {
      type: Sequelize.STRING
    },
    zipcode: {
      type: Sequelize.NUMBER
    },
    Degree_start_year: {
      type: Sequelize.DATE
    },
    Degree_end_year: {
      type: Sequelize.DATE
    },  
    socialfb: {
      type: Sequelize.STRING
    },
    socialtwitter: {
      type: Sequelize.STRING
    },
    socialgithub: {
      type: Sequelize.STRING
    },
    sociallinkedin: {
      type: Sequelize.STRING
    }
  });

  return Userprofile;
};
