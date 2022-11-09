import React from 'react'
import { useNavigate } from 'react-router-dom'
import Usernav from '../User Navigation/Usernav'

function MyBooking() {

    const nav=useNavigate()

    function navigateSucess(){
        nav("/BookedAppointments")
    }

    function navigateRescheduled(){
        nav("/RecheduledAppointments")
    }

    function navigateCancelled(){
        nav("/CancelledAppointments")
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
                                    <h3 className="mb-5">Your Bookings</h3>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                        type="submit" onClick={()=>navigateSucess()}>
                                        Booked Appointments
                                    </button>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1 mx-3"
                                        type="submit" onClick={()=>navigateRescheduled()}>
                                        Rescheduled Appointments
                                    </button>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1 mx-3"
                                        type="submit"
                                        color="white" onClick={()=>navigateCancelled()}>
                                        Cancelled Appointments
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

export default MyBooking