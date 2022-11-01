import axios from 'axios';
import React, { useContext, useState } from 'react'
import { UserContext } from '../App';
import './Addavailability.css'
function Addavailability(props) {
  const { user, token } = useContext(UserContext)
     const [date,setDate] =useState()
      function addAvailabilty(){
        axios.post('http://localhost:59316/api/Booking/Add',{date:date}, { headers: { "Authorization": "Bearer " + token } })
        alert("Availability Added Successfully !!")
      }
   
        return(
        <div> 
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

                      value={date} onChange={(e) => setDate(e.target.value)}
                    />

                  </div>
                  <button className="btn btn-primary btn-lg btn-block mt-3" type="submit" onClick={() => addAvailabilty()}>Add Availability</button>

                
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