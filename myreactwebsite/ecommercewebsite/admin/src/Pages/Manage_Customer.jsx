import axios from 'axios';
import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'


function Manage_Customer() {
  
    
    useEffect(()=>{ 
        const fetchdata = async () =>{
            const res = await axios.get(`http://localhost:8000/api/student`);
            console.log(res);
          }
          fetchdata();
    },[]);

  return (
    <div>
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">View Customer</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Advanced Tables */}
            <div className="panel panel-default">
              <div className="panel-heading">
                Customer Data
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                      <tr>
                      <th>User id</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>email</th>
                      <th>Status</th>
                      <th>Delete</th>
                      <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                          <tr className="odd gradeX">
                          <td>1</td>
                          <td>demo</td> 
                          <td>demo</td>
                          <td>demo</td>
                          <td className="center"><button className="btn btn-danger">Status</button></td>
                          <td className="center"><button className="btn btn-danger">Delete</button></td>
                          <td className="center"><NavLink to="/edit_customer"><button className='btn btn-primary' >Edit </button></NavLink></td>
                           
                          </tr>
                       
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*End Advanced Tables */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Manage_Customer