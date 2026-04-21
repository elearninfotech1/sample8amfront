import axios from 'axios';
import React, { useState } from 'react'
import adminStyles from './adminStyles.module.css';
const AddOffer = () => {
    const [data, setData] = useState({
        oname: '',
        odescription: ''
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const addServiceData = (e) => {
        e.preventDefault();
        axios.post(`https://sample8amback.onrender.com/offer`, data)
            .then(res => {
                alert(res.data.message);
                setData({
                    oname: '',
                    odescription: ''
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
                    <div className="col-md-8">            
                        <form className={adminStyles.bx_shadow}>
                            <div className="mb-4">
                                <input type="text" className="form-control" name="oname" placeholder="Offer Name" value={data.oname} onChange={changeHandler} />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" name="odescription" placeholder="Offer Description" value={data.odescription} onChange={changeHandler} />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" onClick={addServiceData}>Add Offer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>         
  )
}

export default AddOffer