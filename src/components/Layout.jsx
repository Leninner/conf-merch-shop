import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className='p-[10px] grid grid-cols-[minmax(auto,_768px)] justify-center font-["Open_Sans"]'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
