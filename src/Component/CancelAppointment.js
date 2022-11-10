import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './CancelAppointment.css';
import Usernav from "./User Navigation/Usernav";
function CancelAppointment() {
  const [appointments, setAppointments] = useState("")
  async function getAppointments() {
    var r = await axios.get(`http://localhost:59316/api/AppEntry/FindByUserAndStatus?user=${sessionStorage.getItem("user")}&status=Sucess`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    setAppointments(r.data)
    if (r.data.length === 0) {
      r = await axios.get(`http://localhost:59316/api/AppEntry/FindByUserAndStatus?user=${sessionStorage.getItem("user")}&status=Rescheduled`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
      setAppointments(r.data)
      if(r.data.length === 0){
      document.getElementById("nodata").style.display = "block"
      document.getElementById("cancetable").style.display = "none"
    }
  }
}

  async function cancel(date, slot, id, r_date, r_slot) {
    var r=""
    console.log(r_date)
    console.log(r_slot)
    if(r_date === null)
      r = await axios.get(`http://localhost:59316/api/Booking/GetByDate?date=${date}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    else
      r = await axios.get(`http://localhost:59316/api/Booking/GetByDate?date=${r_date}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    if (slot === 1)
      r.data.slot_1 = null
    if (slot === 2)
      r.data.slot_2 = null
    if (slot === 3)
      r.data.slot_3 = null
    if (r_slot === 1)
       r.data.slot_1 = null
    if (r_slot === 2)
      r.data.slot_2 = null
    if (r_slot === 3)
      r.data.slot_3 = null
    axios.put('http://localhost:59316/api/Booking/Update', r.data, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    document.getElementById(id + " cancel").style.display = "none"
    const result = await axios.get(`http://localhost:59316/api/User/GetUserId?username=${sessionStorage.getItem("user")}`)
    let entry = {
      id: id,
      date: date,
      slot: slot,
      status: "Cancel",
      note: "You have Cancelled the Appointment",
      notification: "false",
      userId: result.data
    }
    console.log(entry)
    var rs = axios.put('http://localhost:59316/api/AppEntry/Update', entry, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    console.log(rs.data)
    toast.error('Your Appointment on ' + date.slice(0, 10) + " is cancelled", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  useEffect(() => {
    getAppointments();
  }, [])

  return (
    <>
      <Usernav />
      <div className="vh-100">
        <div className="text-center ">


          <h3 className="card-title mb-3 mt-3 ">
            Cancel Appointment
          </h3>
          <div className="nodata" id="nodata"><h2>No Bookings !!!</h2></div>
          <div id="cancetable">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Date of Appointment</th>
                  <th scope="col">Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments ? appointments.map((data) => (
                  <tr key={data.id} id={data.id + " cancel"}>
                    <td key={data.id + 1}>{data.rescheduled_Date === null ? <>{data.date.slice(0, 10)}</>:<>{data.rescheduled_Date.slice(0, 10)}</>}</td>
                    <td id="slot" key={data.id + 2}>{data.rescheduled_Slot === null?
                     <>{data.slot === 1 ? <>9.00 A.M to 12.00 P.M</> : data.slot === 2 ? <>1.00 P.M to 4.00 P.M</> : <>5.00 P.M to 8.00 P.M</>}</>
                     :
                     <>{data.rescheduled_Slot === 1 ? <>9.00 A.M to 12.00 P.M</> : data.rescheduled_Slot === 2 ? <>1.00 P.M to 4.00 P.M</> : <>5.00 P.M to 8.00 P.M</>}</>
                      }</td>
                    <td key={data.id + 3}> <button key={data.id + 4} onClick={() => cancel(data.date, data.slot, data.id, data.rescheduled_Date, data.rescheduled_Slot)} type="button" className="btn btn-danger">
                      Cancel Appointment
                    </button></td>
                  </tr>
                )) : <></>
                }
              </tbody>
            </table>
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
    </>
  );
}

export default CancelAppointment;