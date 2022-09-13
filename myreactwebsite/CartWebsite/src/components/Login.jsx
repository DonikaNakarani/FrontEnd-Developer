import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


function Login() {
   
    const [formvalue,setFormvalue]=useState({
        "username":"",
        "password":""
    });

    function changehandle(e){
        const {name,value}=e.target;
        setFormvalue({...formvalue,[name]:value});
        
    }
    const navigate=useNavigate();
    function submithandle(e){
        e.preventDefault();
        fetch(`https://reacttest-cbbbb-default-rtdb.firebaseio.com/login.json`,{
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
      },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            if(data)
            {
                setFormvalue({username:"",password:""})
                swal("Login Successfully Done!", "clicked the ok button!", "success");
                navigate('/home');
            }
            
        })
    }

    
  return (
    <div>
    <div className="login-page">
  <div className="form" method="post">
    <form className="form-group" >
      <h2>SIGN IN TO YOUR ACCOUNT</h2>
      <input type="email" name="username" onChange={changehandle} value={formvalue.username} required placeholder="Username" id="user" autoComplete="off" />
      <input type="password" name="password" onChange={changehandle} value={formvalue.password} required placeholder="Password" id="pass" autoComplete="off" />
      <button type="submit" onClick={submithandle}>SIGN IN</button>
      <p className="message"><a href="#">Forgot your password?</a></p>
    </form>
  </div>
</div>

    </div>
  )
}

export default Login