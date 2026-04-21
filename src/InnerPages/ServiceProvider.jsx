import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import innerStyles from './innerStyles.module.css'
import axios from 'axios';
const ServiceProvider = () => {
    const [subServicename, setSubServicename] = useState('');
    const [spdata, setSpdata] = useState([]);
    const { sername,subsername } = useParams();
    useEffect(() => {
        axios.get(`https://sample8amback.onrender.com/subser/${subsername}`)
        .then(res => {
           setSubServicename(res.data.message.subdescription);
                      
        })
            .catch(err => console.log(err));     
        
         axios.get(`https://sample8amback.onrender.com/serviceprovider/${ sername}/${subsername}`)
        .then(res => {
           setSpdata(res.data);         
                      
        })
        .catch(err => console.log(err));  
        
        
    }, [sername])
  return (
      <>
      <section className={innerStyles.bread}>
                  <div className="container">
                      <div className="row">
                          <div className='col-md-12'>
                          <h1>{sername}/{subsername}</h1>              
                          </div>
                      </div>
                  </div>
          </section>
          <section className='py-5'>
              <div className="container">
                  <div className="row">
                      <div className='col-md-12'>
                          <p className={innerStyles.justified}>{subServicename}</p>
                      </div>
                      <div className='col-md-8'>
                          {
                              spdata.map((spdetails) => {
                                  return (
                                      <div className='border-bottom border-2 pb-3 d-flex justify-content-between'>
                                          <div className='mt-3'>
                                          <h6>{spdetails.spbname}</h6>
                                          <p>{spdetails.spname}</p>
                                          <p><strong>Phone:</strong> {spdetails.phone}</p>
                                          <p><strong>Email:</strong> {spdetails.email}</p>
                                          <p><strong>Address:</strong> {spdetails.address}</p>
                                          </div>
                                          <div className='mt-4'>
                                              <NavLink to={`/bookservice/${spdetails.sname}/${spdetails.subsname}/${spdetails.spname}`}>
                                                  <button className='btn btn-success'>Book Service</button>
                                              </NavLink>
                                              </div>
                                          </div>
                                  )
                              })
                          }
                      </div>
                  </div>
                    
              </div>
          </section>
    </>
  )
}

export default ServiceProvider