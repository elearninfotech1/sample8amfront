import React, { useState } from 'react'
import innerStyles from "./innerStyles.module.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ContactUs = () => {
    const [data, setData] = useState({               
                name:'',
                phone: '',
                email: '',
                subject: '',
                message:''
        });
        
         const changeHandler = (e) => {
            setData({ ...data, [e.target.name]: e.target.value });
    };
    

    const contactDataSave = (e) => {
         e.preventDefault();
        axios.post(`https://sample8amback.onrender.com/contactus`, data)
            .then(res => {
                alert(res.data.message);
                setData({
                    name:'',
                    phone: '',
                    email: '',
                    subject: '',
                    message:''
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
                        <h1>Contact Us</h1>              
                        </div>
                    </div>
                </div>
          </section>
         <section className='py-5'>
            <div className="container">
            <div className="row">
                <div className="col-md-8">            
            <form className={innerStyles.bx_shadow}>                
                    <div className='row'> 
                    <div className='col-md-6'>
                        <div className="mb-4">
                        <input type="text" className="form-control" name="name" placeholder="Name" value={data.name} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                            <div className="mb-4">
                            <input type="text" className="form-control" name="phone" placeholder="Phone" value={data.phone} onChange={changeHandler} />
                            </div>
                    </div>
                </div>
                <div className='row'>                    
                    <div className='col-md-6'>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="email" placeholder="Email" value={data.email} onChange={changeHandler} />
                            </div>
                                  </div>
                    <div className='col-md-6'>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="subject" placeholder="Subject" value={data.subject} onChange={changeHandler} />
                            </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                            <div className="mb-4">
                            <textarea className="form-control" name="message" placeholder="Message" value={data.message} onChange={changeHandler} />
                            </div>
                    </div>
                </div>
                
                        <div>
                            <button type="submit" className="btn btn-primary" onClick={contactDataSave}>Send Message</button>
                        </div>
                    </form>
                      </div>
                      <div className="col-md-4">  
                          <h5>Elearn Infotech</h5>
                            <p>Plot Number 40, Second Floor</p>
                            <p>Vittal Rao Nagar,</p>
                            <p>Madhapur, Hyderabad,</p>
                            <p>Telangana 500081</p>
                            <p>+91 8464025086</p>
                            <p>info[@]elearninfotech[.]com</p>
                          </div>
            </div>
        </div>
    </section>  
          </>
  )
}

export default ContactUs