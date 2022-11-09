import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Usernav from '../User Navigation/Usernav';
import './UserProfile.css';
function UserProfile() {

  const [details, setDetails] = useState("")
  const nav=useNavigate()
  async function getDetails() {
    const result = await axios.get(`http://localhost:59316/api/User/GetUserDetails?username=${sessionStorage.getItem("user")}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    setDetails(result.data)
  }
  useEffect(() => {
    getDetails()
  })
  return (
    <>
      <Usernav />
      <div className="vh-100" >
        <div className="text-center" >
          <div className="card-body" id="car" >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-md-9 col-lg-7 col-xl-5">
                  <div className="card" >
                    <div className="p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0 p-3">
                          <i className="fas fa-address-card"></i>
                          <div><b>{sessionStorage.getItem("user")}</b></div>
                        </div>
                        <div className="flex-grow-1 ms-3">

                          <div className="p-2 mb-2 mt-4"
                          >
                            <div>
                              <p className="small text-muted mb-1">Name: {details.name}</p>

                            </div>

                            <div className="px-3">
                              <p className="small text-muted mb-1">Email: {details.email}</p>

                            </div>
                            <div>
                              <p className="small text-muted mb-1">Phone No : {details.phone}</p>

                            </div>
                          </div>
                          <div className="d-flex pt-1">

                            <button type="button" className="btn btn-outline-primary me-1 flex-grow-1" onClick={()=>nav("MyBookings")}>My Booking</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile