const express = require('express')
const app = express()
const PORT = process.env.PORT || 4001
const mongoose = require("mongoose")
const bodypar = require('body-parser')
app.use(bodypar.json())
app.use(bodypar.urlencoded({extended: true}))

const cors = require("cors")
app.use(cors())

//---------------------------------------------- MongoDB ------------------------------------------------
// const MongoURI = "mongodb+srv://Boburbek:<password>@cluster0.c9plx.mongodb.net/?retryWrites=true&w=majority"
// mongoose
//     .connect(MongoURI, {
//         useNewUrlParser: true
//     })
//     .then((res) => {
//         console.log(`Database Connected`);
//     })

// Mowina 



app.use("/public",express.static('public'));
app.use('/', require('./router/car'))
app.use('/client', require('./router/xaridRoutes'))
app.use('/admin', require('./router/authRoutes'))



app.listen(PORT, console.log(`run server ${PORT} port`))
