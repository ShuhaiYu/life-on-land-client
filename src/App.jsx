import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'
import Layout from './components/Layout';
import HomePage from './pages/Home'
import PageNotFound from './pages/404'
import GrasswrenPage from './pages/Grasswren'
import EducationPage from './pages/Education';
import InvolvedPage from './pages/Involved';
import RiskPage from './pages/Risk';
import GrasswrenDetail from './pages/GrasswrenDetail';
import RiskFirePage from './pages/RiskFire';
import Footer from './components/Footer';
import RiskPredators from './pages/RiskPredators';
import RiskHuman from './pages/RiskHuman';
import LoginPage from './pages/Login';

function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();
  if (!isLoggedIn) {
    // if not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Layout /></ProtectedRoute>} >
          <Route index element={<HomePage />} />

          <Route path="/grasswren" element={<GrasswrenPage />} />
          <Route path="/grasswren/:id" element={<GrasswrenDetail />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/involved" element={<InvolvedPage />} />
          <Route path="/risk" element={<RiskPage />} />
          <Route path="/risk/fire" element={<RiskFirePage />} />
          <Route path="/risk/predators" element={<RiskPredators />} />
          <Route path="/risk/humans" element={<RiskHuman />} />


          <Route path="*" element={<PageNotFound />} />
        </Route>

      </Routes>
      {/* <Footer /> */}
    </Router>

  )
}

export default App
