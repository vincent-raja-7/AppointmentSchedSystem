import React from 'react'
import "./Adminnav.css"
import { useNavigate } from 'react-router-dom';
function Adminnav() {
   const nav = useNavigate();
  function logout(){
    sessionStorage.clear()
    nav("/")
  }
 
   return (
    <>
    <nav className="navbar dark-dark bg-dark">
    <p className="m-2 mx-3 navtitle" onClick={()=>nav("/AdminPanel")}>Appointment Scheduling System</p>
    <form className="form-inline">
      
      <a onClick={()=>logout()}><i className="fas fa-sign-out-alt mx-3 navico"></i></a>
      
    </form>
  </nav>
    </>
  )
}

export default Adminnav