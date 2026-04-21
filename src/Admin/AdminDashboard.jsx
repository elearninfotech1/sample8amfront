import React from 'react'
import adminStyles from './adminStyles.module.css';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';
const AdminDashboard = () => { 
  return (    
      <>
        <section className={adminStyles.bread}>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                    <h1>Admin Dashboard</h1>              
                    </div>
                </div>
            </div>
          </section>
          <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                          <Outlet />
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default AdminDashboard