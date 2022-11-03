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
    <a className="navbar-brand mx-3 navtitle">Appointment Scheduling System</a>
    <form className="form-inline">
      
      <a onClick={()=>logout()}><i className="fas fa-sign-out-alt mx-3 navico"></i></a>
      
    </form>
  </nav>
    </>
  )
}

export default Adminnav