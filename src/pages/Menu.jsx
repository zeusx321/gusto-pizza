import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MenuGrid from '../components/menu/MenuGrid';

const Menu = () => {
  return (
    <>
      <Header />
      <main className='main-menu'>
        <MenuGrid />
      </main>
      <Footer />
    </>
  );
};

export default Menu;
