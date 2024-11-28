import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppLayout from './layouts/AppLayout';
import Materias from './pages/Materias';
import Home from './pages/Home';
import SubjectDetails from './pages/SubjectDetails';
import './App.css'
import Login from './pages/Login';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './routes/ProtectedRoute';
import PasswordRecovery from './pages/PasswordRecovery'
import AboutUs from './pages/AboutUs';


function App() {
  const [count, setCount] = useState(0)

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
        <Route path='/restablecercontraseña'>
          <Route index element={<PasswordRecovery />} />
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
