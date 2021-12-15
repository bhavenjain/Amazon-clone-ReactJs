import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'

function App () {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
