const express = require('express');
const routes = express.Router();

const usercontroller = require('../controllers/userController.js')



routes.post("/loginuser", usercontroller.loginUser)
routes.post("/signupuser", usercontroller.signupUser)
routes.post("/logoutUser",usercontroller.logoutUser)

module.exports = routes;