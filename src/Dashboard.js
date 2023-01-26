import React from 'react';
import DashNav from './DashNav';
function Dashboard(){
    return(
        <>
        <DashNav/>
        <div class="container d-flex flex-column">
        <div class="py-5">
            <section class="d-flex border border-dark border-3 p-3 align-items-center justify-content-between mb-4">
                <i class="fa-regular fa-circle fa-6x"></i>
                <strong><h3>Company Name <pre>Job Name</pre></h3></strong>
                <button type="button"class="btn btn-success py-3 px-2" data-bs-toggle="modal" data-bs-target="#popup">Show More</button>
            </section>
            <section class="d-flex border border-dark border-3 p-3 align-items-center justify-content-between mb-4">
                <i class="fa-regular fa-circle fa-6x"></i>
                <strong><h3>Company Name<pre>Job Name</pre></h3></strong>
                <button type="button"class="btn btn-success py-3 px-2" data-bs-toggle="modal" data-bs-target="#popup">Show More</button>
            </section>
            <section class="d-flex border border-dark border-3 p-3 align-items-center justify-content-between mb-4">
                <i class="fa-regular fa-circle fa-6x"></i>
                <strong><h3>Company Name<pre>Job Name</pre></h3></strong>
                <button type="button"class="btn btn-success py-3 px-2" data-bs-toggle="modal" data-bs-target="#popup">Show More</button>
            </section>
        </div>
        </div>
        <div class="modal" id="popup">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">JOB DETAILS</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <h5 class="py-3">Job Name : Manager</h5>
              <p>Salary : 1 lakh/month</p>
              <p>Location : Hyderabad/Delhi/Mumbai </p>
              <a href="https://www.Companyname.com">Visit site</a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}
export default Dashboard;