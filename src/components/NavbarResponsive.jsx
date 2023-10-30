import React from 'react';
import NavContent from './NavContent';

const NavbarResponsive = ({openMenu, setOpenMenu}) => {
  return (
    <div className={`resNav ${openMenu ? 'displayResNav' : ''}`}>
      <NavContent setOpenMenu={setOpenMenu} />
    </div>
  )
}

export default NavbarResponsive;
