import React, { useState } from 'react';
import './styles/app.scss'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavbarResponsive from './components/NavbarResponsive';
import Skills from './components/Skills';

const App = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NavbarResponsive openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App;

