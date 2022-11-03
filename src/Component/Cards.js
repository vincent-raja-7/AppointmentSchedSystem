import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Cards.css'

function Cards(data) {
    const book = data
    var slot_1 = false, slot_2 = false, slot_3 = false
    if (book.data.slot_1 != null)
        slot_1 = true
    if (book.data.slot_2 != null)
        slot_2 = true
    if (book.data.slot_3 != null)
        slot_3 = true

    async function slot1() {
        document.getElementById('slot1').style.display = "none"
        if ((slot_2 === false && slot_3 === false)) {
            document.getElementById('slot2').style.display = "none"
            document.getElementById('slot3').style.display = "none"
        }
        else if (slot_2 === false && slot_3 === true)
            document.getElementById('slot2').style.display = "none"
        else if(slot_3 === false && slot_2 === true)
            document.getElementById('slot3').style.display = "none"
        document.getElementById('booksuccess1').style.display = "block"
        bookslot(1)
    }

    async function slot2() {

        if ((slot_1 === false && slot_3 === false)) {
            document.getElementById('slot1').style.display = "none"
            document.getElementById('slot3').style.display = "none"
        }
        else if (slot_1 === true && slot_3 === false)
            document.getElementById('slot3').style.display = "none"
        else if(slot_3 === true && slot_1 === false)
            document.getElementById('slot1').style.display = "none"
        document.getElementById('slot2').style.display = "none"
        document.getElementById('booksuccess2').style.display = "block"
        bookslot(2)
    }

    async function slot3() {
        if ((slot_1 === false && slot_2 === false)) {
            document.getElementById('slot1').style.display = "none"
            document.getElementById('slot2').style.display = "none"
        }
        else if (slot_1 === false && slot_2===true)
            document.getElementById('slot1').style.display = "none"
        else if(slot_2===false && slot_1 === true)
            document.getElementById('slot2').style.display = "none"

        document.getElementById('slot3').style.display = "none"
        document.getElementById('booksuccess3').style.display = "block"
        bookslot(3)
    }
    
    async function bookslot(slot){
        const r = await axios.get(`http://localhost:59316/api/Booking/GetByDate?date=${data.data.date}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
        const result = await axios.get(`http://localhost:59316/api/User/GetUserId?username=${sessionStorage.getItem("user")}`, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
        if(slot===1){
            r.data.slot_1 = result.data
            addEnty(result.data,slot,data.data.date)  
        }
          

        if(slot===2)
        {
            r.data.slot_2 = result.data
            addEnty(result.data,slot,data.data.date)
        }
        
        if(slot===3)
        {
            r.data.slot_3 = result.data
            addEnty(result.data,slot,data.data.date)
        }
        
        axios.put('http://localhost:59316/api/Booking/Update', r.data, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
        
    }
    
    function addEnty(id,slot,date){
        let entry = {
             date: date,
             slot : slot,
             status: "Sucess",
             note : "You have booked an Appointment",
             notification : "false",
             userId : id
        }
        axios.post('http://localhost:59316/api/AppEntry/Add', entry,{ headers: { "Authorization": "Bearer " + sessionStorage.getItem("t") } })
    }

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <h5 className="card-title text-center mb-3">Slot 1</h5>
                    <div className="card shadow-2-strong slot" >
                        <div className="card-body p-3 text-center">
                            <p>9.00 A.M to 12.00 P.M</p>
                            {book.data.slot_1 === null ?
                                <><button type="button" className="btn btn-primary" id='slot1' onClick={() => slot1()}>Book</button>
                                    <p className='booksucess1' id='booksuccess1'><b>Appointment Booked Successfully !!!</b></p></>
                                :
                                <><p>Already Booked</p></>
                            }
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h5 className="card-title text-center mb-3">Slot 2</h5>
                    <div className="card shadow-2-strong slot" >
                        <div className="card-body p-3 text-center">
                            <p>1.00 P.M to 4.00 P.M</p>
                            {book.data.slot_2 === null ?
                                <><button type="button" className="btn btn-primary" id='slot2' onClick={() => slot2()}>Book</button>
                                    <p className='booksucess2' id='booksuccess2'><b>Appointment Booked Successfully !!!</b></p></>
                                :
                                <><p>Already Booked</p></>
                            }
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h5 className="card-title text-center mb-3">Slot 3</h5>
                    <div className="card shadow-2-strong slot" >
                        <div className="card-body p-3 text-center">
                            <p>5.00 P.M to 8.00 P.M</p>
                            {book.data.slot_3 === null ?
                                <><button type="button" className="btn btn-primary" id='slot3' onClick={() => slot3()}>Book</button>
                                    <p className='booksucess3' id='booksuccess3'><b>Appointment Booked Successfully !!!</b></p></>
                                :
                                <><p>Already Booked</p></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards