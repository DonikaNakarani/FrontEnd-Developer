import React, {useState} from 'react'
import swal from 'sweetalert';

function Login() {
  const [formvalue, setformvalue] = useState({
    username:"",
    password:""
  })

  function changehandle(e){
    const {name,value}= e.target;
    setformvalue({...formvalue,[name]:value})
    console.log(formvalue)
  }

  function submithandle(e){
    e.preventDefault();
    fetch(`https://reacttest-cbbbb-default-rtdb.firebaseio.com/login.json`,{
      method: 'POST',
      body: JSON.stringify(formvalue),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
        })
        .then ((resp)=> resp.json())
        .then((data)=>{
          if(data){
            swal({
              title: "Success",
              text: data.message,
              icon: "success",
              button: "Ok!",
            });
          setformvalue({...formvalue,username:"",password:""})
          }
        })
  }
  return (
    <div className="container mt-5">
      <div class="row justify-content-center ">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="card shadow">
          <div class="card-title text-center border-bottom">
            <h2 class="p-3">Login</h2>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-4">
                <label for="username" class="form-label">Email ID</label>
                <input type="email" class="form-control" id="username" name='username' value={formvalue.username} onChange={changehandle}  />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name='password' value={formvalue.password} onChange={changehandle} />
              </div>
              
              <div class="d-grid">
              <button type="button" class="btn btn-primary" onClick={submithandle}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Login;