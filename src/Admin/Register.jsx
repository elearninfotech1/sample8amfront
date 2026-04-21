import React, { useState } from 'react'
import adminStyles from './adminStyles.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
        const navigate = useNavigate();
        const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: ""
        })

        const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        }

        const registerData = (e) => {
            e.preventDefault();
            axios.post(`https://sample8amback.onrender.com/register`, data)
                .then(res => {
                alert(res.data.message);
                setData({
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: ""
                })
                  navigate('/admin');
                })
                .catch(err => { console.log(err) })
        }
        return (    
        <>
        <section className={adminStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                    <h1>Admin Register</h1>              
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
                            <input type="text" className="form-control" name="name" placeholder="Enter Name" value={data.name} onChange={changeHandler} />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control" name="email" placeholder="Enter Email" value={data.email} onChange={changeHandler} />
                            </div>
                            <div className="mb-4">
                            <input type="password" className="form-control" name="password" placeholder="Password" value={data.password} onChange={changeHandler} />
                        </div> 
                        <div className="mb-4">
                            <input type="text" className="form-control" name="phone" placeholder="Enter Phone" value={data.phone} onChange={changeHandler} />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="address" placeholder="Enter Address" value={data.address} onChange={changeHandler} />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary" onClick={registerData}>Admin Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>            
</>
)
}

export default Register