import React from 'react'
import './Update.css'
class Update extends React.Component{
    render(){
        return(
        <div> 
             <div class="vh-200" >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-50">
          <div class="col-12 col-md-5 col-lg-8 col-xl-5">
            <div class="card shadow-2-strong" >
              <div class="card-body p-5 text-left">
                <h3 class="mb-5">Update Profile</h3>


                <div class="form-outline mb-4">
                  Email
                  <input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                  />
                  
                </div>

                <div class="form-outline mb-4">Password
                  <input
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                  />
                  
                </div>

                <div class="form-outline mb-4">
                Name
                  <input
                    type="Name"
                    id="typeNameX-2"
                    class="form-control form-control-lg"
                  />
                  
                </div>

                <div class="form-outline mb-4">DOB
                  <input
                    type="dob"
                    id="typedobX-2"
                    class="form-control form-control-lg"
                  />
                 
                </div>

                <div class="form-outline mb-4">Username
                  <input
                    type="username"
                    id="typeusernameX-2"
                    class="form-control form-control-lg"
                  />
                  
                  
                </div>

                <div class="form-outline mb-4">Phone No
                  <input
                    type="phone number"
                    id="typephoneX-2"
                    class="form-control form-control-lg"
                  />
                  
                </div>

                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Update
                </button>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        )
    }
}

export default Update;