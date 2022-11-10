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

                          <div className="p-2 mt-5"
                          >
                            <div>
                              <p>Name: {details.name}</p>

                            </div>

                            <div>
                              <p>Email: {details.email}</p>

                            </div>
                            <div>
                              <p>Phone No : {details.phone}</p>

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
      </div>
    </>
  )
}

export default UserProfile