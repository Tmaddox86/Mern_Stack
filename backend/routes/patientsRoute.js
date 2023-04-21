const express = require('express')
const Patient = require('../models/patientsModel')
const router = express.Router()

//GET all patients
router.get('/', (req,res) => {
    res.json({message: 'GET all patients'})
})

//GET single patient
router.get('/:id', (req,res) => {
    res.json({message: 'GET single patient'})
})

//POST a new patient
router.post('/', (req,res) => {
    res.json({messg: 'POST NEW'})
   /* const {title, age, mobile} = req.body

    try{
        const patient = patient.create(title, age, mobile)
        res.status(200).json(patient)
    }catch(error) {
        res.status(400).json({error:error.message})
    }*/
})

//DELETE a patient
router.delete('/:id', (req,res) => {
    res.json({message: 'DELETE a patient'})
})

//UPDATE a patient
router.patch('/:id', (req,res) => {
    res.json({message: 'UPDATE a patient'})
})

module.exports = router