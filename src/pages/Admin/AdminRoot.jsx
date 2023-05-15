import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/Admin/Footer';

const AdminRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminRoot