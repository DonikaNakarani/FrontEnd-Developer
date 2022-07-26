import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Login() {
  return (
    <div>
        {/* Contact Start */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-end mb-4">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Login here!</h6>
                                    </div>
            </div>
            <div className="row">
                <div className="col-lg-12 mb-5 mb-lg-0">
                    <div className="contact-form">
                        <div id="success" />
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="form-row">
                                <div className="col-sm-12 control-group">
                                    <input type="email" className="form-control p-4" id="name" placeholder="UserName" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="col-sm-12 control-group">
                                    <input type="password" className="form-control p-4" id="email" placeholder="Password" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Login</button>
                            </div>
                            <div className="col-sm-6 control-group">
                                <Link to="/signup" className="nav-item nav-link text-danger">If you Not Register then click here for SignUp</Link>
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

export default Login