import axios from "axios";
import { UserContext } from '../App';
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import './Register.css'
import { toast, ToastContainer } from "react-toastify";
function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [passValid, setPassValid] = useState(false)
  const nav = useNavigate();
  const { setUser, setRole, setToken } = useContext(UserContext)
  async function register() {
    let user = {
      username: username,
      password: password,
      name: Name,
      email: email,
      phone: phonenumber,
      dob: dob
    };
    const result = await axios.get(`http://localhost:59316/api/User/GetUserId?username=${username}`)
    if (result.status === 200) {
      toast.error("Username already exists", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUsername("")
    }
    else {
      const res = await axios.post('http://localhost:59316/api/User/Register', user)
      setUser(username)
      setToken(res.data.token)
      if (username === 'admin')
        setRole("Admin")
      else
        setRole("User")
      nav("/UserPanel")
    }
  }
  function login() {
    nav("/")
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  function isPassword(pass) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(pass)
  }

  function validateForm() {
    let email = document.getElementById('Email').value;
    let name1 = document.getElementById('Name').value;
    let password = document.getElementById('Password').value;
    let name = document.getElementById('userName').value;
    let phone = document.getElementById('phoneNumber').value;
    let noErr = true;
    if (email.length === 0) {
      printError("emailError", "*Please enter your Email");
      noErr = false
    }
    else {
      if (email.length === 0) {
        printError("emailError", "*Please enter your Email");
        noErr = false
      } else if (isEmail(email)) {
        printError("emailError", "");
        noErr = true
      }
      else {
        printError("emailError", "*Invalid Email ");
        noErr = false
      }
    }


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
    if (phone.length === 0) {
      printError("phoneNumberError", "*Please enter your phone no.");
      noErr = false
    }
    else {
      if (phone.length > 10) {
        printError("phoneNumberError", "*Phone number should be 10 numbers");
        noErr = false
      } else {
        printError("phoneNumberError", "");
        noErr = true
      }
    }
    if (name1.length === 0) {
      printError("nameError", "*Please enter your name");
      noErr = false
    }
    else {
      if (name1.length === 0) {
        printError("nameError", "*Please enter your name");
        noErr = false
      } else {
        printError("nameError", "");
        noErr = true
      }
    }
    if (password.length < 1) {
      printError("passwordError", "*Please enter your password");
      noErr = false
      setPassValid(false)
    }
    else {
      if (isPassword(password)) {
        printError("passwordError", "");
        noErr = true
        setPassValid(true)
      }
      else {
        printError("passwordError", "*Password Requirements are not satisfied");
        noErr = false
        setPassValid(false)
      }
    }
    if (dob.length === 0) {
      printError("dobError", "*Please enter your dob");
      noErr = false
    }
    else {
      if (name.length === 0) {
        printError("dobError", "*Please enter your dob");
        noErr = false
      } else {
        printError("dobError", "");
        noErr = true
      }
    }

    if (noErr === true) {

      register()
    }
  }


  function passValidOn() {
    if (passValid === false) {
      document.getElementById("passRegX").style.display = "block"

      var lowerCaseLetters = /[a-z]/g;
      if (password.match(lowerCaseLetters))
        document.getElementById("passLC").style.color = "green"
      else
        document.getElementById("passLC").style.color = "red"

      var upperCaseLetters = /[A-Z]/g;
      if (password.match(upperCaseLetters))
        document.getElementById("passUC").style.color = "green"
      else
        document.getElementById("passUC").style.color = "red"

      var numbers = /[!@#$%^&*]/g;
      if (password.match(numbers))
        document.getElementById("passSC").style.color = "green"
      else
        document.getElementById("passSC").style.color = "red"

      if (password.length >= 8)
        document.getElementById("passMC").style.color = "green"
      else
        document.getElementById("passMC").style.color = "red"

      var num = /[0-9]/g
      if (password.match(num))
        document.getElementById("passNum").style.color = "green"
      else
        document.getElementById("passNum").style.color = "red"
      }

  }
  function passValidOff() {
    document.getElementById("passRegX").style.display = "none"
  }

  function printError(id, message) {
    document.getElementById(id).innerHTML = message;
  }

  return (
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
                      id="Name"
                      className="form-control form-control-lg"
                      placeholder="Name *" value={Name} onChange={(e) => setName(e.target.value)}
                    />
                    <p id="nameError" className="Err">

                    </p>

                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="Email"
                      className="form-control form-control-lg"
                      placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)}

                    />
                    <p id="emailError" className="Err">

                    </p>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="DOB"
                      className="form-control form-control-lg"
                      placeholder="DOB *"
                      onFocus={(e) => e.currentTarget.type = "date"}
                      onBlur={(e) => e.currentTarget.type = "text"}

                      value={dob} onChange={(e) => setDOB(e.target.value)}
                    />
                    <p id="dobError" className="Err">

                    </p>

                  </div>



                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="phoneNumber"
                      className="form-control form-control-lg"
                      placeholder="Phone *" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}
                    />
                    <p id="phoneNumberError" className="Err">

                    </p>

                  </div>

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
                    <input
                      type="password"
                      id="Password"
                      className="form-control form-control-lg"
                      placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => passValidOn()}
                      onBlur={() => passValidOff()}
                    />
                    <p id="passwordError" className="Err">

                    </p>
                    <div id="passRegX">
                      <p><b>Password should contain the following:</b></p>
                      <p className="Err" id="passLC">A Lowercase Letter</p>
                      <p className="Err" id="passUC">An Uppercase Letter</p>
                      <p className="Err" id="passSC">A Special Character</p>
                      <p className="Err" id="passNum">A Number</p>
                      <p className="Err" id="passMC">Minimum 8 Characters</p>
                    </div>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block reg-btn" type="submit" onClick={() => (validateForm())}>
                    Register
                  </button>
                  <p className="signin mt-2" onClick={() => (login())}>Already a user? Login</p>

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

export default Register;