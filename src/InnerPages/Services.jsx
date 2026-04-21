import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       axios.get('https://sample8amback.onrender.com/service')
      .then(res => {
        setData(res.data.servicedata);      
      })
      .catch(err => console.log(err));
    },[])
  return (
      <>
        <section className={innerStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                    <h1>Services</h1>              
                    </div>
                </div>
            </div>
          </section>
          <section className='py-5'>
              <div className="container">
                  <div className="row">
                      {
                          data.map((ser) => {
                              return (
                                  <div className='col-md-3 mb-4' key={ser._id}>
                                      <NavLink to={`/subservices/${ser.sname}`}>
                                        <div className={innerStyles.customcard}>
                                          <h5>{ser.sname}</h5>
                                          </div>
                                        </NavLink>
                                    </div>
                                )
                          })
                      }
                  </div>
              </div>
        </section>
      </>
  )
}

export default Services