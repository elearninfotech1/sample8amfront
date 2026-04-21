import React, { useState } from 'react'
import adminStyles from './adminStyles.module.css';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    
    const adminDataCheck = (e) => {
        e.preventDefault();

        axios.post(`https://sample8amback.onrender.com/login`, data)
        .then(res => {
            alert(res.data.message);
            if(res.status === 400)
            {
                alert(res.data.message);
            }
            else
            {
                navigate('/admindashboard');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
  return (    
      <>
        <section className={adminStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                    <h1>Admin Login</h1>              
                    </div>
                </div>
            </div>
          </section>
          <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className={`col-md-4 mx-auto ${adminStyles.bx_shadow}`}>
                          <form>
                            <div className="mb-4">
                                  <input type="email" className="form-control" name="email" placeholder="Username" value={data.email} onChange={changeHandler} />
                              </div>
                              <div className="mb-4">
                                  <input type="password" className="form-control" name="password" placeholder="Password" value={data.password} onChange={changeHandler} />
                              </div>                             
                              <div>
                                <button type="submit" className="btn btn-primary" onClick={adminDataCheck}>Admin Login</button>
                              </div>
                          </form>
                          <div className='mt-4'>
                              <NavLink to="/forgotpassword">Forgot Password?</NavLink>
                              <NavLink to="/register" className="float-end">Create a New User</NavLink>
                          </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default Admin