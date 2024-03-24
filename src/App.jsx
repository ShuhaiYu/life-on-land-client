import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import PageNotFound from './pages/404'
import GrasswrenPage from './pages/Grasswren'
import EducationPage from './pages/Education';
import InvolvedPage from './pages/Involved';
import RiskPage from './pages/Risk';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<HomePage />} />

        <Route path="/grasswren" element={<GrasswrenPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/involved" element={<InvolvedPage />} />
        <Route path="/risk" element={<RiskPage />} />

        
        <Route path="*" element={<PageNotFound />} />
      </Route>

    </Routes>
    </Router>
    
  )
}

export default App
