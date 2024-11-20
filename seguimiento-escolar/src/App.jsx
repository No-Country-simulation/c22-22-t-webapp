import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './pages/Landing';
import Home from './pages/Home';
import AppLayout from './layouts/AppLayout';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Landing />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
