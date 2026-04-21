import React, { useState } from 'react'
import innerStyles from "./innerStyles.module.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
const BookService = () => {
    const { sername, subsername, serpbname } = useParams();
    const [data, setData] = useState({
                sname: sername || '',
                subsname: subsername || '',                
                spbname: serpbname || '',
                cname:'',
                phone: '',
                email: '',
                address:''
        });
        
         const changeHandler = (e) => {
            setData({ ...data, [e.target.name]: e.target.value });
    };
    

    const serviceDataSava = (e) => {
         e.preventDefault();
        axios.post(`https://sample8amback.onrender.com/bookservice`, data)
            .then(res => {
                alert(res.data.message);
                setData({
                    sname: '',
                    subsname: '',
                    spbname: '',
                    cname:'',
                    phone: '',
                    email: '',
                    address:''
                });
            })
            .catch(err => {
                console.log(err);
            });
         }

  return (
      <>
          <section className={innerStyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className='col-md-12'>
                        <h1>Book Services</h1>              
                        </div>
                    </div>
                </div>
          </section>
         <section className='py-5'>
            <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">            
            <form className={innerStyles.bx_shadow}>
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
                            <input type="text" className="form-control" name="spbname" placeholder="Service.P Name" value={data.spbname} onChange={changeHandler} />
                            </div>
                                  </div>
                    <div className='col-md-6'>
                        <div className="mb-4">
                        <input type="text" className="form-control" name="cname" placeholder="Customer Name" value={data.cname} onChange={changeHandler} />
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
                            <button type="submit" className="btn btn-primary" onClick={serviceDataSava}>Book Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>  
          </>
  )
}

export default BookService