import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './appLayoutStyles.css'

function AppLayout() {
  return (
    <div className="d-grid" style={{ gridTemplateRows: '60px 1fr auto', minHeight: '100vh', minWidth:'100%' }}>
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