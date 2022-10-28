import React from "react";
import './AllBooking.css';

class AllBooking extends React.Component {
  render() {
    return (
      <div class="vh-100">
        <div class="card text-center ">
         
          <div class="card-body " id="car">
            <h5 class="card-title">All Booking</h5>
            <div>
              <div class="card ">
                <div class="card-body">
                  <p class="card-text">
                    All the Booking will be displayed in table
                  </p>
                  <table class="table table-dark table-striped">
                    <thead>
                      <tr>
                        <th scope="col">date</th>
                        <th scope="col">Slot 1</th>
                        <th scope="col">Slot 2</th>
                        <th scope="col">Slot 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 12/12/2022</td>
                        <td> Yes </td>
                        <td> No </td>
                        <td> No</td>
                      </tr>
                      <tr>
                        <td> 12/12/2022</td>
                        <td> No </td>
                        <td> Yes </td>
                        <td> No</td>
                      </tr>
                      <tr>
                        <td> 12/12/2022</td>
                        <td> Yes </td>
                        <td> No </td>
                        <td> No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllBooking;
