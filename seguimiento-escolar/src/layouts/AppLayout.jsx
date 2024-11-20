import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './appLayoutStyles.css'

function AppLayout() {
  return (
    <>
      <Header />
      {/* Pages */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default AppLayout