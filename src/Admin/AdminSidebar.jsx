import React from 'react'
import adminStyles from './adminStyles.module.css';
import { NavLink } from 'react-router-dom';
const AdminSidebar = () => {
  return (
    <ul className={adminStyles.adminsidebar}>
        <li>
            <NavLink to="">Add Service</NavLink>
        </li>
        <li>
            <NavLink to="viewservice">View Service</NavLink>
        </li>
        <li>
            <NavLink to="addsubservice">Add Sub Service</NavLink>
        </li>
        <li>
            <NavLink to="viewsubservice">View Sub Service</NavLink>
          </li>
          <li>
            <NavLink to="addserviceprovider">Add Service Provider</NavLink>
        </li>
        <li>
            <NavLink to="viewserviceprovider">View Service Provider</NavLink>
          </li>
          <li>
              <NavLink to="addoffer">Add Offer</NavLink>
          </li>
          <li>
              <NavLink to="viewoffer">View Offer</NavLink>
          </li>
    </ul>
  )
}

export default AdminSidebar