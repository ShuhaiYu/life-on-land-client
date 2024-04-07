import React from 'react';
import Navbar from './Navbar';
import BackToTopButton from './BackToTopButton'; 

// Layout component that wraps around all pages
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <BackToTopButton />
    </>
  );
};

export default Layout;
