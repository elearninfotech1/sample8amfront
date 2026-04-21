import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const StudentEdit = () => {
    const { sid } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
            name: "",
            email: "",
            phone: "",
            address: ""
    })
    
    useEffect(() => {
        axios.get(`https://sample8amback.onrender.com/students/${sid}`)
            .then(res => { 
                setData(res.data);          
            })
            .catch(err => { console.log(err) })
    },[sid])

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const updateStudentData = (e) => {
        e.preventDefault();
        axios.put(`https://sample8amback.onrender.com/students/${sid}`, data)
            .then(res => {
                alert(res.data.message);
                navigate('/editstudent');
            })
            .catch(err => {
                console.log(err);
            })
    }
  return (
    <>
            <section className={innerStyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className='col-md-12'>
                          <h1>Update Student</h1>              
                        </div>
                    </div>
                </div>
              </section>
              <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className='col-md-4 mx-auto'>
                              <form className={innerStyles.bx_shadow}>
                                <div className="mb-4">
                                      <input type="text" className="form-control" name="name" placeholder="Enter Name" value={data.name} onChange={changeHandler} />
                                  </div>
                                  <div className="mb-4">
                                      <input type="email" className="form-control" name="email" placeholder="Enter Email" value={data.email} onChange={changeHandler} />
                                  </div>
                                  <div className="mb-4">
                                      <input type="text" className="form-control" name="phone" placeholder="Enter Phone" value={data.phone} onChange={changeHandler} />
                                  </div>
                                  <div className="mb-4">
                                      <input type="text" className="form-control" name="address" placeholder="Enter Address" value={data.address} onChange={changeHandler} />
                                  </div>
                                  <div>
                                    <button type="submit" className="btn btn-primary" onClick={updateStudentData}>Update Student</button>
                                  </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
          </>
  )
}

export default StudentEdit