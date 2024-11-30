import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import AppLayout from './layouts/AppLayout';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import Materias from './pages/Materias';
import SubjectDetails from './pages/SubjectDetails';
import './App.css'


function App() {

  return (
    <AuthProvider>
      <Routes>
        {/* Free routes with layout*/}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<AboutUs />} />
        </Route>

        {/* Free routes without layout */}
        <Route path='/login'>
          <Route index element={<Login />} />
        </Route>
       

        {/* Protected routes with layout*/}
        <Route path='/estudiante' element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>}>
          <Route path='home' element={<Home />} />
          <Route path='materias' >
            <Route index element={<Materias />} />
            <Route path=':idSubject' element={<SubjectDetails />} />
          </Route>
        </Route>

      </Routes>
    </AuthProvider>
  )
}

export default App
