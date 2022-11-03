import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import './Addavailability.css'
import Adminnav from './Admin Navigation/Adminnav';
function Addavailability(props) {
  const { user, token } = useContext(UserContext)
  const nav=useNavigate()
     const [date,setDate] =useState("")
      function addAvailabilty(){
        axios.post('http://localhost:59316/api/Booking/Add',{date:date}, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
       
        document.getElementById('availbtn').style.display="none"
        document.getElementById('addsuccess').style.display="block"
        document.getElementById('plusbtn').style.display="block"
      }

      function plus(){
        document.getElementById('availbtn').style.display="block"
        document.getElementById('addsuccess').style.display="none"
        document.getElementById('plusbtn').style.display="none"
        nav(0)
      }

      const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
   
        return(
        <div> 
          <Adminnav/>
            <div className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-40">
          <div className="col-20 col-md-11 col-lg-25 col-xl-15">
            <div className="card shadow-2-strong addavailability">
              <div className="card-body p-15 text-center">
                <h3 className="mb-5">Add Availability</h3>

                <div className="form-outline mb-1">
                    <input
                      type="text"
                      id="typedobX-2"
                      className="form-control form-control-lg"
                      placeholder="Select the date *"
                      onFocus={(e) => e.currentTarget.type = "date"}
                      onBlur={(e) => e.currentTarget.type = "text"}
                      min={disablePastDate()}
                      value={date} onChange={(e) => setDate(e.target.value)}
                    />

                  </div>
                  <button className="btn btn-primary btn-lg btn-block mt-3" id='availbtn' type="submit" onClick={() => addAvailabilty()}>Add</button>
                  <p className='addsuccess mt-3' id='addsuccess'><b>Availability added Successfully !!!</b></p>
                  <p className='plusbtn mt-3' id='plusbtn' onClick={()=>plus()}><i className="fas fa-calendar-plus"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        )
    }

export default Addavailability;