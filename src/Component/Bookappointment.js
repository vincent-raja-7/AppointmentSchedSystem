import React from 'react'
import './Bookappointment.css'
class Bookappointment extends React.Component{
    render(){
        return(
        <div> 
            <div class="vh-100" >
<div class="card text-center ">
    
    <div class="card-body "id='car'>

      <h5 class="card-title">Book Appointment</h5>
      <div>
        <div class="card ">
            <div class="card-body">
           
              
              <table class="table table-dark table-striped">
                <thead>
                    <tr>
                      <th scope="col">date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Book</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     
                      <td>  12/12/2022</td>
                      <td>12.30AM</td>
                      <td><button type="button" class="btn btn-danger">BookAppointment</button></td>
                    </tr>
                    <tr>
                    <td>  12/12/2022</td>
                      <td>12.30AM</td>
                      <td><button type="button" class="btn btn-danger">BookAppointment</button></td>
                    </tr>
                    <tr>
                    <td>  12/12/2022</td>
                      <td>12.30AM</td>
                      <td><button type="button" class="btn btn-danger">BookAppointment</button></td>
                    </tr>
                    
                   
                  </tbody>
              </table>
            </div>
          </div>
      </div>
    
  
    </div>
</div>
</div>
        </div>
        );
    }
}

export default Bookappointment;