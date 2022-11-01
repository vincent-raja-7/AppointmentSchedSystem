import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminPanel.css'
function AdminPanel() {
    
   const nav=useNavigate();

    function navigateAddAvailability(){
       nav("/Admin/AddAvailability")
    }

    return (
        <div>
            <div className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-40">
                        <div className="col-20 col-md-11 col-lg-25 col-xl-15">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-15 text-center">
                                    <h3 className="mb-5">Welcome Admin</h3>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                        type="submit" onClick={()=>(navigateAddAvailability())}
                                    >
                                        Add Availability
                                    </button>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                        type="submit"
                                    >
                                        Show All Appointment
                                    </button>

                                    <button
                                        className="btn btn-outline-primary me-1 flex-grow-1"
                                        type="submit"
                                        color="white"
                                    >
                                        Update Availability
                                    </button>

                                    <hr className="my-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AdminPanel