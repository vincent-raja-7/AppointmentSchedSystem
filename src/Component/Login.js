import axios from "axios";
import { UserContext } from '../App';
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css';
import { toast, ToastContainer } from "react-toastify";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const { setUser, setRole, setToken } = useContext(UserContext)
  async function login() {
    let user = {
      username: username,
      password: password
    };
    const res = await axios.post('http://localhost:59316/api/User/Login', user)
    .catch(function (error) {
      if (error.response) {
        toast.error("Invalid Credentials", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
         setPassword("")
         setUsername("")
      }
    })
    if(res.status === 200){
     
    setUser(username)
    sessionStorage.setItem("user", username)
    setToken(res.data.token)
    sessionStorage.setItem("t", res.data.token)
    sessionStorage.setItem("n","0")
    if (username === 'admin') {
      setRole("Admin")
      nav("/AdminPanel")
    }
    else {
      setRole("User")
      nav("/UserPanel")
    }
    }
  }

  function register() {
    nav("/Register")
  }
  function validateForm() {
    let name = document.getElementById('userName').value;
    let password = document.getElementById('Password').value;
    let noErr = true;
    if (name.length === 0) {
      printError("userNameError", "*Please enter your username");
      noErr = false
    }
    else {
      if (name.length === 0) {
        printError("userNameError", "Please enter your username");
        noErr = false
      } else {
        printError("userNameError", "");
        noErr = true
      }
    }
    if (password.length < 1) {
      printError("passwordError", "*Please enter your password");
      noErr = false
    }
    else {
      if (password.length < 1) {
        printError("passwordError", "*Please enter your password");
        noErr = false
      }
      else {
        printError("passwordError", "");
        noErr = true
      }
    }
    if (noErr === true){

      login()
    }
  }
  function printError(id, message) {
    document.getElementById(id).innerHTML = message;
  }
  return (

    <div>

      <div className="show">
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
                        id="userName"
                        className="form-control form-control-lg"
                        placeholder="Username *" value={username} onChange={(e) => setUsername(e.target.value)}
                      />
                      <p id="userNameError" className="Err">

                      </p>


                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="Password" className="form-control form-control-lg"
                        placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <p id="passwordError" className="Err">

                      </p>
                    </div>

                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={() => validateForm()}>Login</button>
                    <p className="signup mt-2" onClick={() => (register())}>Need an account? Register</p>




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>

  );
}
export default Login;