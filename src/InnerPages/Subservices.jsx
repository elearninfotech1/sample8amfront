import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import innerStyles from './innerStyles.module.css'
import axios from 'axios';
const Subservices = () => {
    const [servicename, setServicename] = useState('');
    const [subservices, setSubservices] = useState([]);
    const { sername } = useParams();
    useEffect(() => {
        axios.get(`https://sample8amback.onrender.com/service/${sername}`)
        .then(res => {
           setServicename(res.data.description);
        })
        .catch(err => console.log(err));
        
        axios.get(`https://sample8amback.onrender.com/subservice/${sername}`)
            .then(res => {
                if (res.data.message == "No sub services found")
                {
                    setSubservices([])
                }
                else
                {
                    setSubservices(res.data.message)
                }
        })
        .catch(err => console.log(err));
        
    }, [sername])
  return (
      <>
      <section className={innerStyles.bread}>
                  <div className="container">
                      <div className="row">
                          <div className='col-md-12'>
                          <h1>{sername}</h1>              
                          </div>
                      </div>
                  </div>
          </section>
          <section className='py-5'>
              <div className="container">
                  <div className="row">
                      <div className='col-md-12'>
                          <p className={innerStyles.justified}>{servicename}</p>
                      </div>
                  </div>
                    <div className="row pt-4">
                          {
                              subservices.map((sub) => { 
                                  return (
                                      <div className='col-md-3 mb-4' key={sub._id}>
                                      <NavLink to={`/serviceprovider/${sername}/${sub.subsname}`}>
                                        <div className={innerStyles.customcard}>
                                          <h5>{sub.subsname}</h5>
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

export default Subservices