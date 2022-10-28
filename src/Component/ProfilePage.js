import React from "react";




class ProfilePage extends React.Component{
    render(){
        return(

            <div class="vh-100" >
        <div class="card text-center " >
            
            <div class="card-body " id="car" >
                
                    <div class="container py-5 h-100">
                      <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-md-9 col-lg-7 col-xl-5">
                          <div class="card" >
                            <div class="card-body p-4">
                              <div class="d-flex text-black">
                                <div class="flex-shrink-0">
                                  
                                    <div>Username </div>
                                    <div>Password</div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                 
                                  <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                                    >
                                    <div>
                                      <p class="small text-muted mb-1">Name</p>
                                    
                                    </div>
                                    <div class="px-3">
                                      <p class="small text-muted mb-1">Email</p>
                                      
                                    </div>
                                    <div>
                                      <p class="small text-muted mb-1">Phone No</p>
                                      
                                    </div>
                                  </div>
                                  <div class="d-flex pt-1">
                                    <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Edit Profile</button>
                                    <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">My Booking</button>
                                  </div>
                                </div>
                              </div>
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

}

export default ProfilePage;