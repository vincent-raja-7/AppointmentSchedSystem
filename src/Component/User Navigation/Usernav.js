import React, { } from 'react'
import "./Usernav.css"
import { useNavigate } from 'react-router-dom';
const Usernav = () => {
  var nav=useNavigate()
  function navigateProfile(){
    if(!((sessionStorage.getItem("c")==='User')||(sessionStorage.getItem("c")==='Seller')||sessionStorage.getItem("c")==='Admin'))
    {
         alert("You need to login first")
         nav('/Login')
    }
    else
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
    nav('/')
  }

  return (
    <>
    <nav class="navbar dark-dark bg-dark">
    <a class="navbar-brand mx-3 navtitle">Appointment Scheduling System</a>
    <form class="form-inline">
      
        <a onClick={()=>navigateProfile()}><i class="fas fa-user-circle mx-3 navico"></i></a>
      <a onClick={()=>navigateNotification()}><i class="fas fa-bell mx-3 navico"></i></a>
      <a onClick={()=>logout()}><i class="fas fa-sign-out-alt mx-3 navico"></i></a>
      
    </form>
  </nav>
    </>
  )
}

export default Usernav