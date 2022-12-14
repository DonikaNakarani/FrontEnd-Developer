import React, { useContext} from 'react'
import {link,Navigate, NavLink,useNavigate} from 'react-router-dom'
import { Logincontext} from '../App'

function Header() {

  const {SetisLogin}=useContext(Logincontext);
  const navigate=useNavigate();
  function logout()
  {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_name')
      alert('Logout Success');
      navigate('/');
  }
  return (
    <div>
<div>
  <div className="navbar navbar-inverse set-radius-zero">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="index.html">
          <img src="assets/img/logo.png" />
        </a>
      </div>
      <div className="right-div">
        <button onClick={logout} className="btn btn-danger pull-right">LOG ME OUT</button>
      </div>
    </div>
  </div>
  {/* LOGO HEADER END*/}
  <section className="menu-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="navbar-collapse collapse ">
            <ul id="menu-top" className="nav navbar-nav navbar-right">
              <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
              <li><NavLink to="/addProduct">Add_Product</NavLink></li>
             <li><NavLink to="/view_product">View_Product</NavLink></li>
              <li><NavLink to="/view_contact">View_Contact</NavLink></li>
              <li><NavLink to="/Viewusers">View_Users</NavLink></li>
              <li><NavLink to="/pnf">BLANK PAGE</NavLink></li>
              <li>
                  <a href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Product <i className="fa fa-angle-down" /></a>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                    <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="addProduct">UI ELEMENTS</NavLink></li>
                    <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="viewProduct">EXAMPLE LINK</NavLink></li>
                  </ul>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* MENU SECTION END*/}
</div>

    </div>
  )
}

export default Header