import React from 'react';
import Navbar from './Navbar';
import BackToTopButton from './BackToTopButton'; 

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
