import React, { useState } from 'react'
import innerStyles from './innerStyles.module.css';
import axios from 'axios';
const AddStudent = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const addStudentData = (e) => { 
        e.preventDefault();
        axios.post(`https://sample8amback.onrender.com/students`, data)
            .then(res => {
              alert(res.data.message);
              setData({
                name: "",
                email: "",
                phone: "",
                address: ""
              })
            })
            .catch(err => { console.log(err) })        
    }
  return (    
      <>
        <section className={innerStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                    <h1>Add Student</h1>              
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
                                <button type="submit" className="btn btn-primary" onClick={addStudentData}>Add Student</button>
                              </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default AddStudent