import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import banner from './homebanner.jpg'
const MainPage = () => {
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
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 p-0'>
                <img src={banner} alt='Banner' className='img-fluid' />
              </div>
            </div>
        </div>    
          </section>
          <section className='py-4'>
              <div className="container">
                  <h1 className={innerStyles.title}>Our <span>Services</span></h1>
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

export default MainPage