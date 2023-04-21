const Patient = require('../models/patientsModel')


//get all patients
const getPatients = async (req,res) =>{
    const patients = await Patient.find()
}


//get single patient



//create new patient
const createPatient = async(req,res) => {

    const {firstName, age, mobile} = req.body

    try{
        const patient = await Patient.create({firstName, age, mobile})
        res.status(200).json(patient)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a patient



//update a patient

module.exports = {
    createPatient,
}