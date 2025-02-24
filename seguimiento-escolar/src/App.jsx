import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import AppLayout from './layouts/AppLayout';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import SubjectDetails from './pages/SubjectDetails';
import AnualSyllabus from './pages/AnualSyllabus';
import AcademicPerformance from './pages/AcademicPerformance';
import Community from './pages/Community';
import Grades from './pages/Grades';
import './App.css'
import TeacherProfile from './pages/TeacherProfile';


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
          <Route path='comunidad' element={<Community />} />
          <Route path='materias/:year' >
            <Route index element={<Subjects />} />
            <Route path=':idSubject' element={<SubjectDetails />} />
            <Route path=':idSubject/programa-anual' element={<AnualSyllabus />} />
            <Route path=':idSubject/rendimiento-academico' element={<AcademicPerformance />} />
            <Route path=':idSubject/calificaciones' element={<Grades />} />
            <Route path=':idSubject/profesor/:idTeacher' element={<TeacherProfile />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
