const PatientDetails = ({patient}) => {
    return (
        <div className="patient-details">
            <h4>{patient.name}</h4>
            <p><strong> Age: </strong>{patient.age} </p>
            <p><strong> Mobile: </strong>{patient.mobile} </p>
            <p>{patient.createAt}</p>
        </div>
    )
}
export default PatientDetails;