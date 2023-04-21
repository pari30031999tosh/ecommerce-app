const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



module.exports = (sequelize, DataTypes) =>{

    const Sessions = sequelize.define('Sessions', {
  
      sessionId: {
        type: DataTypes.STRING,
        
      },
      email: {
        type: DataTypes.STRING,
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
        freezeTableName: true
      });

    return Sessions;
} 





