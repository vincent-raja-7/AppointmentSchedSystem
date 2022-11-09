import axios from "axios";
import React, { useEffect, useState } from "react";
import Usernav from "./User Navigation/Usernav";
import './RescheduleAppointment.css';
import Cards from "./Cards";
function RescheduleAppointment() {
    const [appointments,setAppointments] =useState("")
    const [date, setDate] = useState("");
    const [oldDate, setOldDate] = useState("")
    const [oldId, setOldId] = useState("")
    const [oldSlot, setOldSlot] = useState("")
    async function getAppointments(){
      const r= await axios.get(`http://localhost:59316/api/AppEntry/FindByUserAndStatus?user=${sessionStorage.getItem("user")}&status=Sucess`,{ headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
      setAppointments(r.data)
      if(r.data.length === 0){
        document.getElementById("nodata").style.display="block"
        document.getElementById("restable").style.display="none"
      }
    }
      
    
    function reschedule(date,slot,id){
          setOldDate(date)
          setOldId(id)
          setOldSlot(slot)
         document.getElementById("rescheduledate").style.display="block"
         document.getElementById("rescheduletable").style.display="none"
    }
      
      var [book, setBook] = useState({
        date : "",
        id : 0,
        slot_1 : null,
        slot_2 : null,
        slot_3 : null,
        oldDate: null,
        oldSlot: null,
        oldId: null
       } )
    
       const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    
      async function getSlots() {
        const r = await axios.get(`http://localhost:59316/api/Booking/GetByDate?date=${date}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
        var details={
          date : r.data.date,
          id : r.data.id,
          slot_1 : r.data.slot_1,
          slot_2 : r.data.slot_2,
          slot_3 : r.data.slot_3,
          oldDate: oldDate,
          oldSlot: oldSlot,
          oldId: oldId
        }
        
        setBook(details)
        if(r.status === 204)
        {
        
          document.getElementById("slots").style.display = "none"
          document.getElementById("noslot").style.display = "block"
        }
        else
        {
          document.getElementById("slots").style.display = "block"
          document.getElementById("noslot").style.display = "none"
        }
      }
    useEffect(()=>{
      getAppointments();
    },[])
    
      return (
        <>
        <Usernav/>
        <div className="vh-100" id="rescheduletable">
            <div className="text-center ">
                <h3 className="card-title mb-3 mt-3 ">
                  Reschedule Appointment
                </h3>
                <div className="nodata" id="nodata"><h2>No Bookings !!!</h2></div>
                <div className="table" id="restable">
                      <table className="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Date of Appointment</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointments ? appointments.map((data)=>(
                          <tr key={data.id} id={data.id+" cancel"}>
                          <td key={data.id+1}>{data.date.slice(0,10)}</td>
                          <td id="slot" key={data.id+2}>{
                              data.slot===1?<>9.00 A.M to 12.00 P.M</>:data.slot===2?<>1.00 P.M to 4.00 P.M</>:<>5.00 P.M to 8.00 P.M</>}</td>
                          <td key={data.id+3}> <button key={data.id+4} onClick={()=>reschedule(data.date,data.slot,data.id)} type="button" className="btn btn-danger">
                                Reschedule Appointment
                              </button></td>
                          </tr>
                          )):<></>
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </div>
                  <div id="rescheduledate">
                  <div className="vh-200">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-12 col-md-5 col-lg-15 col-xl-5">
              <h3 className="card-title text-center mb-3">Book Appointment</h3>
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
                      value={date} onChange={(e) => setDate(e.target.value)}
                    />

                  </div>
                  <button className="btn btn-primary btn-lg btn-block mt-3 mb-3" type="submit" onClick={() => getSlots()}>Get Slots</button>
                  <div id='noslot'>
              <b>This date is not Available !!! Please select another date.</b>
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
                  </div>
    
        </>
      );
    }

export default RescheduleAppointment