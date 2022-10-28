import axios from "axios";
import React, { useState } from "react"
import './Login.css';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    async function login(){
        let user = {
            username: username,
            password: password
        };
        const res=await axios.post('http://localhost:59316/api/User/Login', user)
        console.log(res.data)
        alert("Login Successful")
    }
        return(

    <div>
             
             <div className ="show"> 
        <div className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" >
                <div className="card-body p-5 text-center">
      
                  <h3 className="mb-5">Sign in</h3>
    
                  <div className="form-outline mb-4">
                  <input
                    type="username"
                    id="typeusernameX-2"
                     className="form-control form-control-lg"
                     placeholder="Username *" value={username} onChange={(e) => setUsername(e.target.value)}
                  />
                 
                  
                </div>
      
                  <div className="form-outline mb-4">
                      <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                  </div>
      
                 
                  
      
                     <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={()=>login()}>Login</button>
      
                  
    
                 
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

           </div>

        );
} 
export default Login;