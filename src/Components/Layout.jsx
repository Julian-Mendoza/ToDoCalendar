import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Signup from './SignUp';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;