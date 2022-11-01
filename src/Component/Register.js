import axios from "axios";
import {UserContext} from '../App';
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import './Register.css'
function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [username, setUsername] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const nav=useNavigate();
    const{ setUser, setRole, setToken} = useContext(UserContext)
    async function register(){
        let user = {
            username: username,
            password: password,
            name: Name,
            email: email,
            phone: phonenumber,
            dob: dob
        };
        const res=await axios.post('http://localhost:59316/api/User/Register', user)
        console.log(res.data)
        setUser(username)
        setToken(res.data.token)
        if(username === 'admin')
          setRole("Admin")
        else
           setRole("User")
        nav("/UserPanel")
    }

    function login(){
      nav("/")
    }

        return(
        <div> 
            <div className="vh-200">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col-12 col-md-5 col-lg-15 col-xl-5">
            <div className="card shadow-2-strong" >
              <div className="card-body p-4 text-center">
                <h3 className="mb-5">Sign Up</h3>

                <div className="form-outline mb-4">
                  <input
                    type="Name"
                    id="typeNameX-2"
                    className="form-control form-control-lg"
                    placeholder="Name *" value={Name} onChange={(e) => setName(e.target.value)}
                  />
                 
                </div>

                <div className="form-outline mb-4">
                  <input
                       type="email"
                       id="typeEmailX-2"
                       className="form-control form-control-lg"
                       placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                  type="text"
                    id="typedobX-2"
                     className="form-control form-control-lg"
                     placeholder="DOB *" 
                     onFocus={(e)=>e.currentTarget.type = "date"}
                     onBlur={(e)=>e.currentTarget.type = "text"}
                    
                     value={dob} onChange={(e) => setDOB(e.target.value)}
                  />
                  
                </div>

                

                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="typephonenumberX-2"
                    className="form-control form-control-lg"
                    placeholder="Phone *" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}
                  />
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="username"
                    id="typeusernameX-2"
                     className="form-control form-control-lg"
                     placeholder="Username *" value={username} onChange={(e) => setUsername(e.target.value)}
                  />
                 
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                  
                </div>

                <button className="btn btn-primary btn-lg btn-block reg-btn" type="submit" onClick={()=>(register())}>
                  Register
                </button>
                <p className="signin mt-2" onClick={()=>(login())}>Already a user? Login</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    



        </div>
        );
    }

export default Register;