import React, { useState } from 'react'
import adminStyles from "./adminStyles.module.css"
import axios from 'axios';
const AddServiceProvider = () => {
    const [data, setData] = useState({
            sname: '',
            subsname: '',
            spname: '',
            spbname: '',
            phone: '',
            email: '',
            address:''
    });
    
     const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const addServiceProviderData =(e) => {
        e.preventDefault();
        axios.post(`https://sample8amback.onrender.com/serviceprovider`, data)
            .then(res => {
                alert(res.data.message);
                setData({
                    sname: '',
                    subsname: '',
                    spname: '',
                    spbname: '',
                    phone: '',
                    email: '',
                    address:''
                });
            })
            .catch(err => {
                console.log(err);
            });
         };

  return (
    <section>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">            
                      <form className={adminStyles.bx_shadow}>
                          <div className='row'>
                              <div className='col-md-6'>
                                    <div className="mb-4">
                                    <input type="text" className="form-control" name="sname" placeholder="Service Name" value={data.sname} onChange={changeHandler} />
                                    </div>
                              </div>
                              <div className='col-md-6'>
                                  <div className="mb-4">
                                    <input type="text" className="form-control" name="subsname" placeholder="Sub Service Name" value={data.subsname} onChange={changeHandler} />
                                    </div>
                              </div>
                            </div>
                             <div className='row'>
                              <div className='col-md-6'>
                                    <div className="mb-4">
                                    <input type="text" className="form-control" name="spname" placeholder="Service Provider Name" value={data.spname} onChange={changeHandler} />
                                    </div>
                              </div>
                              <div className='col-md-6'>
                                  <div className="mb-4">
                                    <input type="text" className="form-control" name="spbname" placeholder="Service.P Name" value={data.spbname} onChange={changeHandler} />
                                    </div>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                    <div className="mb-4">
                                    <input type="text" className="form-control" name="phone" placeholder="Phone" value={data.phone} onChange={changeHandler} />
                                    </div>
                              </div>
                              <div className='col-md-6'>
                                  <div className="mb-4">
                                    <input type="text" className="form-control" name="email" placeholder="Email" value={data.email} onChange={changeHandler} />
                                    </div>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-12'>
                                    <div className="mb-4">
                                    <textarea className="form-control" name="address" placeholder="Address" value={data.address} onChange={changeHandler} />
                                    </div>
                              </div>
                          </div>
                          
                                <div>
                                    <button type="submit" className="btn btn-primary" onClick={addServiceProviderData}>Add Sub Service</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>         
  )
}

export default AddServiceProvider