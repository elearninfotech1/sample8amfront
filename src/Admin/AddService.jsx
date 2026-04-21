import axios from 'axios';
import React, { useState } from 'react'
import adminStyles from './adminStyles.module.css';
const AddService = () => {
    const [data, setData] = useState({
        sname: '',
        description: ''
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const addServiceData = (e) => {
        e.preventDefault();
        axios.post(`https://sample8amback.onrender.com/service`, data)
            .then(res => {
                alert(res.data.message);
                setData({
                    sname: '',
                    description: ''
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
                                <input type="text" className="form-control" name="sname" placeholder="Service Name" value={data.sname} onChange={changeHandler} />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" name="description" placeholder="Service Description" value={data.description} onChange={changeHandler} />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" onClick={addServiceData}>Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>         
  )
}

export default AddService