import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Usernav from '../User Navigation/Usernav'
import { UserContext } from '../../App';
import './UserPanel.css'
function UserPanel() {
    const nav=useNavigate();
    function navigateBookAppointment(){
        nav("/BookAppointment")
    }

    function navigateCancelAppointment(){
        nav("/CancelAppointment")
    }

    function navigateRescheduleAppointment(){
        nav("/RescheduleAppointment")
    }

    return (
        <div>
            <Usernav/>
            <div className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-40">
                        <div className="col-20 col-md-11 col-lg-25 col-xl-15">
                            <div className="card shadow-2-strong" >
                                <div className="card-body p-15 text-center">
                                    <h3 className="mb-5">Welcome</h3>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                        type="submit" onClick={()=>navigateBookAppointment()}>
                                        Book Appointment
                                    </button>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                        type="submit" onClick={()=>navigateRescheduleAppointment()}>
                                        Reschedule Appointment
                                    </button>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                        type="submit"
                                        color="white" onClick={()=>navigateCancelAppointment()}>
                                        Cancel Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPanel