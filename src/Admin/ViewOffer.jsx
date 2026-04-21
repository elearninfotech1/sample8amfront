import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-dt";
import $ from 'jquery';
const ViewOffer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('https://sample8amback.onrender.com/offer')
        .then(res => {
          setData(res.data.offerdata);              
        })
        .catch(err => console.log(err));     
      $(function () {      
      setTimeout(function () {
        $('#mytable').DataTable();  
      },1000);
     });
    }, [data]);
  
  const deleteOfferData = (oid) => { 
    if (window.confirm('Are you sure you want to delete this Offer?')) {
      axios.delete(`https://sample8amback.onrender.com/offer/${oid}`)
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
                          <th>O.Name</th>
                          <th>O.Description</th>                         
                        </tr>
                      </thead>
                      <tbody>
                        {
                          data.map((off) => {
                            return (
                              <tr key={off._id}>
                                <td className='d-flex'>
                                  <button className='btn btn-danger' onClick={()=>deleteOfferData(off._id)}>
                                    <i className='fa fa-trash'></i>
                                  </button>
                                  <button className='btn btn-primary ms-2'>
                                    <i className='fa fa-edit'></i>
                                  </button>
                                </td>
                                <td>{off.oname}</td>
                                <td>{off.odescription}</td>
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

export default ViewOffer