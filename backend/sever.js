require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const patientRoutes = require('./routes/patientsRoute')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/patients', patientRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on PORT', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

/*app.get('/', (req,res) => {
    res.json({message: 'Welcome To the App'})
})*/



//listen for request
/*app.listen(process.env.PORT, () => {
    console.log('listening on PORT 4000')
})*/

process.env