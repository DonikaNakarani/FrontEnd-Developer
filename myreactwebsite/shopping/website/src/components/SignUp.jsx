import React from 'react'

function SignUp() {
  return (
    <div className="container mt-3">
      <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="card shadow">
          <div class="card-title text-center border-bottom">
            <h2 class="p-3">SignUp</h2>
          </div>
          <div class="card-body">
            <form>
            <div class="mb-4">
                <label for="username" class="form-label">Name</label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="mb-4">
                <label for="username" class="form-label">Mobile No.</label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="mb-4">
                <label for="username" class="form-label">Username/Email</label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
                 <div class="d-grid">
                 <button type="button" class="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default SignUp