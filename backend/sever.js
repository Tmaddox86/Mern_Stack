require('dotenv').config()

const express = require('express')

//ex[ress app
const app = express()

//routes
app.get('/', (req,res) => {
    res.json({message: 'Welcome To the App'})
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on PORT 4000')
})

process.env