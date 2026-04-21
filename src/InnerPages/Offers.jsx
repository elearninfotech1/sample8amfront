import React, { useEffect, useState } from 'react'
import innerStyles from './innerStyles.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Offers = () => {
     const [data, setData] = useState([]);
    useEffect(() => {
       axios.get('https://sample8amback.onrender.com/offer')
      .then(res => {
        setData(res.data.offerdata);      
      })
      .catch(err => console.log(err));
    },[])
    return (
      <>
      <section className={innerStyles.bread}>
                  <div className="container">
                      <div className="row">
                          <div className='col-md-12'>
                          <h1>Offers</h1>              
                          </div>
                      </div>
                  </div>
            </section>
        <section className={`py-5 ${innerStyles.offers}`}>
        <div className='container'>
          <div className='row'>
                  <div className='col-md-12'>
                            {
                                data.map((off) => {
                                    return (
                                        <div>
                                            <h6 className='text-success'>{off.oname}</h6>
                                            <p className='border-bottom border-2 pb-4'>
                                            {off.odescription}
                                            </p>
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

export default Offers