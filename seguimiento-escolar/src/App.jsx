import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppLayout from './layouts/AppLayout';
import Materias from './pages/Materias';
import Home from './pages/Home';
import SubjectDetails from './pages/SubjectDetails';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='materias' >
          <Route index element={<Materias />} />
          <Route path=':idSubject' element={<SubjectDetails />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
