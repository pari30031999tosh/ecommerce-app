const express = require('express');
const routes = express.Router();

const productcontroller = require('../controllers/productController.js')



routes.post("/createproduct", productcontroller.createProduct)
routes.post("/addproducttocart", productcontroller.addProductToCart)

module.exports = routes;