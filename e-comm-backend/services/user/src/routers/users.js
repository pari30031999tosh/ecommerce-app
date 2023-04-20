const express = require('express');
const routes = express.Router();

const usercontroller = require('../controllers/userController.js')



routes.post("/loginuser", usercontroller.loginUser)
routes.post("/signupuser", usercontroller.signupUser)
routes.get("/fakeroutes",(req, res)=> res.send("response send"))

module.exports = routes;