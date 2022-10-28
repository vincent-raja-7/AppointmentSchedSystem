import React from 'react'
import './Welcomeadmin.css'
class Welcomeadmin extends React.Component{
    render(){
        return(
        <div> 
            <div class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-40">
          <div class="col-20 col-md-11 col-lg-25 col-xl-15">
            <div class="card shadow-2-strong">
              <div class="card-body p-15 text-center">
                <h3 class="mb-5">Welcome Admin</h3>

                <button
                  class="btn btn-outline-primary me-1 flex-grow-1"
                  type="submit"
                >
                  Add Availability
                </button>

                <button
                  class="btn btn-outline-primary me-1 flex-grow-1"
                  type="submit"
                >
                  Show All Appointment
                </button>

                <button
                  class="btn btn-outline-primary me-1 flex-grow-1"
                  type="submit"
                  color="white"
                >
                  Update Availability
                </button>

                <hr class="my-4" />
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

export default Welcomeadmin;