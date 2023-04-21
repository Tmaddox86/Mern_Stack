const express = require('express')

//const Patient = require('../models/patientsModel')

const {
    createPatient,
} = require('../controllers/patientsController')

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
router.post('/', createPatient)

//DELETE a patient
router.delete('/:id', (req,res) => {
    res.json({message: 'DELETE a patient'})
})

//UPDATE a patient
router.patch('/:id', (req,res) => {
    res.json({message: 'UPDATE a patient'})
})

module.exports = router