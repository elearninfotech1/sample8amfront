import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-dt";
import $ from 'jquery';
const ViewService = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('https://sample8amback.onrender.com/service')
        .then(res => {
          setData(res.data.servicedata);              
        })
        .catch(err => console.log(err));     
      $(function () {      
      setTimeout(function () {
        $('#mytable').DataTable();  
      },1000);
     });
    }, [data]);
  
  const deleteServiceData = (sid) => { 
    if (window.confirm('Are you sure you want to delete this service?')) {
      axios.delete(`https://sample8amback.onrender.com/service/${sid}`)
        .then(res => {
          alert(res.data.message);
        })
        .catch(err => console.log(err));
    }
  }
  
  return (
    <section>
            <div className="container">
                <div className="row">
                <div className='col-md-12'>
                  <div className='table-responsive'>
                    <table className='table table-bordered table-striped' id='mytable'>
                      <thead>
                  <tr>
                          <th>Action</th>
                          <th>S.Name</th>
                          <th>S.Description</th>                         
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map((ser) => {
                            return (
                              <tr key={ser._id}>
                                <td className='d-flex'>
                                  <button className='btn btn-danger' onClick={()=>deleteServiceData(ser._id)}>
                                    <i className='fa fa-trash'></i>
                                  </button>
                                  <button className='btn btn-primary ms-2'>
                                    <i className='fa fa-edit'></i>
                                  </button>
                                </td>
                                <td>{ser.sname}</td>
                                <td>{ser.description}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                  </div>
                </div>                        
            </div>
          </section>
  )
}

export default ViewService