import React,{useState} from 'react'
import {Link} from 'react-router-dom'
function Signup() {
    const [formvalue,setFormvalue]=useState({
        "name":"",
        "username":"",
        "password":"",
        "mobile":""
    })
    function changehandle(e){
        const {name,value}=e.target;
        setFormvalue({...formvalue,[name]:value});
    }
    function submithandle(e){
        e.preventDefault();
        fetch(`https://reacttest-cbbbb-default-rtdb.firebaseio.com/users.json`, {
        method: 'POST',
        body: JSON.stringify(formvalue),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
      if(data)
      {
          setFormvalue({name:"",username:"",password:"",mobile:""});
      }
  });
    }
  return (
    <div>
    {/* Contact Start */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-end mb-4">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Sign Up</h6>
                    <h1 className="section-title mb-3">Contact Us For Cleaning Services</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 mb-5 mb-lg-0">
                    <div className="contact-form">
                        <div id="success" />
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="form-row">
                                <div className="col-sm-12 control-group">
                                    <input type="text" name='name' value={formvalue.name} onChange={changehandle} className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="col-sm-12 control-group">
                                    <input type="username" name='username' value={formvalue.username} onChange={changehandle} className="form-control p-4" id="name" placeholder="Your Email" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="col-sm-12 control-group">
                                    <input type="password" name='password' value={formvalue.password} onChange={changehandle} className="form-control p-4" id="email" placeholder="Your password" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger" />
                                </div>
                            
                            <div className="col-sm-12 control-group">
                                <input type="number" name='mobile' value={formvalue.mobile} onChange={changehandle} className="form-control p-4" id="number" placeholder="Mobile number" required="required" data-validation-required-message="Please enter a number" />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                                <button onClick={submithandle} type="submit " className="btn btn-primary btn-block py-3 px-5"  id="sendMessageButton">Sign Up</button>
                            </div>
                            <div className="col-sm-6 control-group">
                            <Link to="/login" className="nav-item nav-link text-danger">If you Register then click here for login</Link>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    {/* Contact End */}

</div>
    
  )
}

export default Signup