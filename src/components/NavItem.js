import React from 'react'

const NavItem = ({ destination, name, goTo }) => {
  return ( 
    <span style={{
        textDecoration: 'none',
        padding: '15px',
        fontFamily: 'sans-serif'
      }}
      onClick={() => goTo(destination)}
      className="nav-item">
      {name}
    </span>
   )
}
 
export default NavItem