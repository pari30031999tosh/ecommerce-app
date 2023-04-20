const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('products', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: true
})

sequelize.authenticate()
.then(()=>{
    console.log("atabase is connected=======================")
})
.catch(err=>{
    console.log("error conecting to database,", err)
})

const db = {

}

db.sequelize = sequelize;
db.Sequelize = Sequelize;




////Add entries for table



db.sequelize.sync({force: true})
.then(()=> console.log("database synced"))
.catch(err => console.log("error synscing to db", err))






db.products = require('./products')(sequelize, DataTypes);

module.exports = db;



