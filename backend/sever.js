require('dotenv').config()

const express = require('express')
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

/*app.get('/', (req,res) => {
    res.json({message: 'Welcome To the App'})
})*/



//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on PORT 4000')
})

process.env