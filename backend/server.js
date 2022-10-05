require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('../backend/routes/workout')


const app  = express()

//middleware
app.use(express.json())

app.search((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//route
app.use('/api/workouts',  workoutRoutes)

// connection to db 
mongoose.connect(process.env.MONG_URI)
 .then(()=>{
    // listening request
        app.listen(process.env.PORT, ()=>{
        console.log('listening on port and my server', process.env.PORT)
})
 })
 .catch((error)=>{
    console.log(error)
 })


// // listening request
// app.listen(process.env.PORT, ()=>{
//     console.log('listening on port', process.env.PORT)
// })