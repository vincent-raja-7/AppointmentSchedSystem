import React from 'react'
import './Updateavailability.css'
class Updateavailability extends React.Component{
    render(){
        return(
        <div> 
             <div class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-40">
          <div class="col-20 col-md-11 col-lg-25 col-xl-15">
            <div class="card shadow-2-strong">
              <div class="card-body p-15 text-center">
                <h3 class="mb-5">Update Availability</h3>

                <p>
                  Choose date :&nbsp;
                  <input type="date" id="myDate" value="2022-12-12" />
                </p>

                <br /><br />

                <button
                  class="btn btn-outline-primary me-1 flex-grow-1"
                  type="submit"
                  color="white"
                >
                  &nbsp;&nbsp;Not Available&nbsp;&nbsp;
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

export default Updateavailability;