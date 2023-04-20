const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



module.exports = (sequelize, DataTypes) =>{

    const Users = sequelize.define('users', {
  
      firstname: {
        type: DataTypes.STRING,
        
      },
      lastname: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    }, {
      // Other model options go here
      
    });

    return Users;
} 





