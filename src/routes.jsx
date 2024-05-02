import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Signup from './Pages/SignUp'; 
import Login from './Pages/Login'; 
import Home from './Pages/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}> 
           <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;