import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import Usernav from '../User Navigation/Usernav'
import './UserPanel.css'
function UserPanel() {
    const nav = useNavigate();
    function navigateBookAppointment() {
        nav("/BookAppointment")
    }

    function navigateCancelAppointment() {
        nav("/CancelAppointment")
    }

    function navigateRescheduleAppointment() {
        nav("/RescheduleAppointment")
    }

    async function notification() {
        var nowDate = new Date();
        var date = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();
        const r = await axios.get(`http://localhost:59316/api/Booking/GetByDate?date=${date}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
        .catch(function (error) {
            if (error.response) {
              alert("You Need to Login !!")
            }
            nav("/")
          })
        const result = await axios.get(`http://localhost:59316/api/User/GetUserId?username=${sessionStorage.getItem("user")}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
        var time;
        if (r.data.slot_1 === result.data || r.data.slot_2 === result.data || r.data.slot_2 === result.data) {
            if (r.data.slot_1 === result.data)
                time = "9.00 A.M to 12.00 P.M"
            if (r.data.slot_2 === result.data)
                time = "1.00 P.M to 4.00 P.M"
            if (r.data.slot_3 === result.data)
                time = "5.00 P.M to 8.00 P.M" 
         
        if((sessionStorage.getItem("n") === "0")){
            toast.info("You have an Appointment today at  " + time, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            sessionStorage.setItem("n","1")
        }
        }
    }
    useEffect(()=>{
            notification()
    })
    return (
        <div>
                        <Usernav />
                        <div className="vh-100" >
                            <div className="container py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-40">
                                    <div className="col-20 col-md-11 col-lg-25 col-xl-15">
                                        <div className="card shadow-2-strong" >
                                            <div className="card-body p-15 text-center">
                                                <h3 className="mb-5">Welcome {sessionStorage.getItem("user")} !!!</h3>

                                                <button
                                                    className="btn btn-outline-primary me-1 flex-grow-1"
                                                    type="submit" onClick={() => navigateBookAppointment()}>
                                                    Book Appointment
                                                </button>

                                                <button
                                                    className="btn btn-outline-primary me-1 flex-grow-1 mx-3"
                                                    type="submit" onClick={() => navigateRescheduleAppointment()}>
                                                    Reschedule Appointment
                                                </button>

                                                <button
                                                    className="btn btn-outline-primary me-1 flex-grow-1 mx-3"
                                                    type="submit"
                                                    color="white" onClick={() => navigateCancelAppointment()}>
                                                    Cancel Appointment
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default UserPanel