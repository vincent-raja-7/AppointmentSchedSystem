import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Bookappointment from './Component/Bookappointment';
import CancelAppointment from './Component/CancelAppointment';
import Register from './Component/Register';
import Login from './Component/Login';
import React, { useState } from 'react';
import UserPanel from './Component/User/UserPanel';
import AdminPanel from './Component/Admin/AdminPanel';
import RescheduleAppointment from './Component/RescheduleAppointment';
import UserProfile from './Component/User/UserProfile';
import Addavailability from './Component/Admin/Addavailability';
export const UserContext = React.createContext()
function App() {
  const [user, setUser]=useState('')
  const [role, setRole]=useState('')
  const [token, setToken]=useState('')
  return (
    <>
    <UserContext.Provider value={{user, setUser, role, setRole, token, setToken}}>
     <Router>
     <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/UserPanel" element={<UserPanel/>}></Route>
        <Route path="/Profile" element={<UserProfile/>}></Route> 
        <Route path="/BookAppointment" element={<Bookappointment/>}></Route>
        <Route path="/CancelAppointment" element={<CancelAppointment/>}></Route>
        <Route path="/RescheduleAppointment" element={<RescheduleAppointment/>}></Route>
        <Route path="/AdminPanel" element={<AdminPanel/>}></Route>
        <Route path="Admin/AddAvailability" element={<Addavailability/>}></Route>
     </Routes>
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;