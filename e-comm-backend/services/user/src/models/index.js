const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: true
})

sequelize.authenticate()
.then(()=>{
    console.log("database is connected=======================")
})
.catch(err=>{
    console.log("error conecting to database,", err)
})

const db = {

}

db.sequelize = sequelize;
db.Sequelize = Sequelize;




////Add entries for table



db.sequelize.sync({ alter: true })
.then(()=> console.log("database synced"))
.catch(err => console.log("error synscing to db", err))





db.Users  = require('./Users')(sequelize, DataTypes);
db.Sessions = require('./Sessions')(sequelize, DataTypes);


module.exports = db;



