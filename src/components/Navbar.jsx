import React from 'react';
import NavContent from './NavContent';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({openMenu, setOpenMenu}) => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
      <button className='menuBtn' onClick={() => setOpenMenu(!openMenu)}>
        <AiOutlineMenu />
      </button>
    </>
  )
}

export default Navbar
