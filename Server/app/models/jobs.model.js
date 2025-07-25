module.exports = (sequelize, Sequelize) => {
    const Jobs = sequelize.define("jobs", {
      name: {
        type: Sequelize.STRING
      },      
      email: {
        type: Sequelize.STRING
      },
      clientemail: {
        type: Sequelize.STRING
      },      
     jobtitle: {
        type: Sequelize.STRING
      },
      jobdescription: {
        type: Sequelize.TEXT
      },
      minidesc: {
        type: Sequelize.TEXT
      },
      professional: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      companyname: {
        type: Sequelize.STRING
      },
      Permanentorconract: {
        type: Sequelize.STRING
      },
      postdate: {
        type: Sequelize.DATE
      },      
      skills: {
        type: Sequelize.STRING
      },
      Jobid: {
        type: Sequelize.STRING
      },
      companylogo: {
        type: Sequelize.STRING
      },
      fromsalary: {
        type: Sequelize.STRING
      },
      tosalary: {
        type: Sequelize.STRING
      },
      jcatagory: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      recentornew: {
        type: Sequelize.STRING
      },
      Contactperson: {
        type: Sequelize.STRING
      }      
    });
  
    return Jobs;
  };
  