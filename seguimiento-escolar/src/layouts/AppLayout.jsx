import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './appLayoutStyles.css'

function AppLayout() {
  return (
    <div className='layout-container'>
      <Header />
      {/* Pages */}
      <div className='pages-container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout