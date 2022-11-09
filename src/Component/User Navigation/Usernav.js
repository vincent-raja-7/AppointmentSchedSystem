import React, { } from 'react'
import "./Usernav.css"
import { useNavigate } from 'react-router-dom';
const Usernav = () => {
  var nav=useNavigate()
  function navigateProfile(){
    nav('/Profile')
  }
  
  function logout(){
    sessionStorage.clear()
    nav('/')
  }

  function navigateUserPanel(){
    nav("/UserPanel")
  }

  return (
    <>
    <nav className="navbar dark-dark bg-dark">
    <p className="m-2 mx-3 navtitle" onClick={()=>navigateUserPanel()}>Appointment Scheduling System</p>
    <form className="form-inline">
      
        <a onClick={()=>navigateProfile()}><i className="fas fa-user-circle mx-3 navico"></i></a>
      <a onClick={()=>logout()}><i className="fas fa-sign-out-alt mx-3 navico"></i></a>
      
    </form>
  </nav>
    </>
  )
}

export default Usernav