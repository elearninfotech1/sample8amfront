import axios from 'axios';
import React, { useState } from 'react'
import adminStyles from './adminStyles.module.css';
const AddSubService = () => {
    const [data, setData] = useState({
      sname: '',
      subsname: '',
      subdescription: ''
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const addSubServiceData = (e) => {
        e.preventDefault();
        axios.post(`https://sample8amback.onrender.com/subservice`, data)
            .then(res => {
                alert(res.data.message);
                setData({
                    sname: '',
                    subsname: '',
                    subdescription: ''
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
                                <input type="text" className="form-control" name="subsname" placeholder="Sub Service Name" value={data.subsname} onChange={changeHandler} />
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" name="subdescription" placeholder="Sub Service Description" value={data.subdescription} onChange={changeHandler} />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" onClick={addSubServiceData}>Add Sub Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>         
  )
}

export default AddSubService