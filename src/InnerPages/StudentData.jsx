import React from 'react'
import innerStyles from './innerStyles.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const StudentData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://sample8amback.onrender.com/students')
      .then(res => {
        setData(res.data);       
      })
      .catch(err => console.log(err));
  },[])
  return (
    <>
          <section className={innerStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                    <h1>Student Data</h1>              
                    </div>
                </div>
            </div>
          </section>
          <section className='py-5'>
            <div className="container">
                <div className="row">
                <div className='col-md-12'>
                  <div className='table-responsive'>
                    <table className='table table-bordered table-striped'>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map((student) => {
                            return (
                              <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.address}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                  </div>
                </div>
            </div>
          </section>
    </>
  )
}

export default StudentData