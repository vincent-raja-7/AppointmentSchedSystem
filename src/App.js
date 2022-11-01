import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Update from './Component/Update';
import Bookappointment from './Component/Bookappointment';
import Updateavailability from './Component/Updateavailability';
import Addavailability from './Component/Addavailability';
import ReschedualAppointment from './Component/ReschedualAppointment';
import ProfilePage from './Component/ProfilePage';
import CancelAppointment from './Component/CancelAppointment';
import AppointmentStatus from './Component/AppointmentStatus';
import AppointmentBooking from './Component/AppointmentBooking';
import AllBooking from './Component/AllBooking';
import Register from './Component/Register';
import Login from './Component/Login';
import React, { useState } from 'react';
import UserPanel from './Component/User/UserPanel';
import AdminPanel from './Component/Admin/AdminPanel';
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
        <Route path="/BookAppointment" element={<Bookappointment/>}></Route>
        <Route path="/AdminPanel" element={<AdminPanel/>}></Route>
        <Route path="Admin/AddAvailability" element={<Addavailability/>}></Route>
     </Routes>
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;