import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Admin'
import Register from './Admin/Register'
import ForgotPassword from './Admin/ForgotPassword'
import AdminDashboard from './Admin/AdminDashboard'
import AddService from './Admin/AddService'
import ViewService from './Admin/ViewService'
import AddSubService from './Admin/AddSubService'
import ViewSubService from './Admin/ViewSubService'
import Services from './InnerPages/Services'
import Subservices from './InnerPages/Subservices'
import ServiceProvider from './InnerPages/ServiceProvider'
import AddServiceProvider from './Admin/AddServiceProvider'
import BookService from './InnerPages/BookService'
import ContactUs from './InnerPages/ContactUs'
import MainPage from './InnerPages/MainPage'
import Offers from './InnerPages/Offers'
import AddOffer from './Admin/AddOffer'
import ViewOffer from './Admin/ViewOffer'

const Routing = () => {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/subservices/:sername" element={<Subservices />} />
              <Route path="/serviceprovider/:sername/:subsername" element={<ServiceProvider />} />
              <Route path="/bookservice" element={<BookService />} />
              <Route path="/bookservice/:sername/:subsername/:serpbname" element={<BookService />} />
              <Route path='/offers' element={<Offers />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/admindashboard" element={<AdminDashboard />}>
                  <Route path="" element={<AddService />} />
                  <Route path="viewservice" element={<ViewService />} />
                  <Route path="addsubservice" element={<AddSubService />} />
                  <Route path="viewsubservice" element={<ViewSubService />} />
                  <Route path="addserviceprovider" element={<AddServiceProvider />} />
                  <Route path="addoffer" element={<AddOffer />} />
                  <Route path="viewoffer" element={<ViewOffer />} />
              </Route>
              <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
      </>
  )
}

export default Routing