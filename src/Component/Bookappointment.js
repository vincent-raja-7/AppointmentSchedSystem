import React, { useContext, useEffect, useState } from 'react'
import './Bookappointment.css'
import { UserContext } from '../App';
import axios from 'axios';
import { Button } from 'bootstrap';
import Usernav from './User Navigation/Usernav';
import Cards from './Cards';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
function Bookappointment() {
  const location = useLocation();
  const nav = useNavigate()
  const path = window.location.pathname
  const [date, setDate] = useState("");
  const { user, token } = useContext(UserContext)
  const [book, setBook] = useState({
    date: "",
    id: 0,
    slot_1: null,
    slot_2: null,
    slot_3: null
  })

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const oneMonth = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 2).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  async function getSlots() {
    const r = await axios.get(`http://localhost:59316/api/Booking/GetByDate?date=${date}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    .catch(function (error) {
      if (error.response) {
        alert("You Need to Login !!")
      }
      nav("/")
    })
    setBook(r.data)
    if (r.status === 204) {
      console.log(r.status)
      document.getElementById("slots").style.display = "none"
      document.getElementById("noslot").style.display = "block"
    }
    else {
      document.getElementById("slots").style.display = "block"
      document.getElementById("noslot").style.display = "none"
    }
  }
  return (
    <div>
      <Usernav />
      <div className="vh-200">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-12 col-md-5 col-lg-15 col-xl-5">
              <h3 className="card-title text-center mb-3">Book Appointment</h3>
              <p className='card-title text-center mb-3'>Working Days (Mon - Fri)</p>
              <div className="card shadow-2-strong mb-5" >
                <div className="card-body p-4 text-center">
                  <div className="form-outline mb-1">
                    <input
                      type="text"
                      id="typedobX-2"
                      className="form-control form-control-lg"
                      placeholder="Select the date *"
                      onFocus={(e) => e.currentTarget.type = "date"}
                      onBlur={(e) => e.currentTarget.type = "text"}
                      min={disablePastDate()}
                      max={oneMonth()}
                      value={date} onChange={(e) => setDate(e.target.value)}
                    />

                  </div>
                  <button className="btn btn-primary btn-lg btn-block mt-3 mb-3" type="submit" onClick={() => getSlots()}>Get Slots</button>
                  <div id='noslot'>
                    <b>This date is not Available !!! </b>
                    <br/>
                    <b>Please select a date in the next 30 days.</b>
                  </div>
                </div>
              </div>
            </div>
            <div className='slots' id='slots'>
              <Cards data={book} />
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
  );
}

export default Bookappointment;