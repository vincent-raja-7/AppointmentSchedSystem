import React, { } from 'react'
import "./Usernav.css"
import { useNavigate } from 'react-router-dom';
const Usernav = () => {
  var nav=useNavigate()
  function navigateProfile(){
    nav('/Profile')
  }
  function navigateNotification(){
    if(!((sessionStorage.getItem("c")==='User')||(sessionStorage.getItem("c")==='Seller')||sessionStorage.getItem("c")==='Admin'))
    {
         alert("You need to login first")
         nav('/Login')
    }
    else
    nav('/Cart')
  }
  function logout(){
    sessionStorage.clear()
    nav('/')
  }

  return (
    <>
    <nav className="navbar dark-dark bg-dark">
    <a className="navbar-brand mx-3 navtitle">Appointment Scheduling System</a>
    <form className="form-inline">
      
        <a onClick={()=>navigateProfile()}><i className="fas fa-user-circle mx-3 navico"></i></a>
      <a onClick={()=>navigateNotification()}><i className="fas fa-bell mx-3 navico"></i></a>
      <a onClick={()=>logout()}><i className="fas fa-sign-out-alt mx-3 navico"></i></a>
      
    </form>
  </nav>
    </>
  )
}

export default Usernav