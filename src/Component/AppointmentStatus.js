import React from "react";

class AppointmentStatus extends React.Component {
  render() {
    return (
      <div class="vh-100">
        <div class="card text-center " >
          
          <div class="card-body "id="car">
            <h5 class="card-title" >
              Appointment Status
            </h5>
            <div>
              <div class="card " >
                <div class="card-body">
                  <p class="card-text">
                    All the Notification will be displayed in table{" "}
                  </p>
                  <table class="table table-dark table-striped">
                    <thead>
                      <tr>
                        <th scope="col">date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Appointment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 12/12/2022</td>
                        <td>12.30AM</td>
                        <td>
                          <button type="button" class="btn btn-danger">
                            Appointment Status
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td> 12/12/2022</td>
                        <td>12.30AM</td>
                        <td>
                          <button type="button" class="btn btn-danger">
                            Appointment Status
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td> 12/12/2022</td>
                        <td>12.30AM</td>
                        <td>
                          <button type="button" class="btn btn-danger">
                            Appointment Status
                          </button>
                        </td>
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
export default AppointmentStatus;
