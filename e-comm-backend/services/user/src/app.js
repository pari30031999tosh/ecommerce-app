const express = require('express');
const app = express();
require("dotenv").config();

const routes = require('./routers/users.js')

const bodyParser = require('body-parser')
const multer  = require('multer')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//dhhdhdh
app.use("/", routes );

app.listen(8081, () => {
    console.log("users service is listening at port 8081")
})