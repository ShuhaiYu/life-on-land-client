import React from 'react';
import Navbar from './Navbar';
import BackToTopButton from './BackToTopButton'; 
import Footer from './Footer';

// Layout component that wraps around all pages
const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
