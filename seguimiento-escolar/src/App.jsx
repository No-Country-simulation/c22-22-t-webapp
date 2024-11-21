import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppLayout from './layouts/AppLayout';
import './App.css'
import Materias from './pages/Materias';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='materias' element={<Materias />} />
      </Route>
    </Routes>
  )
}

export default App
