import React from 'react'
import NavItem from './NavItem'

const NavBar = (props) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        // backgroundColor: '#f9be02'
      }}>
      <NavItem destination="/" name="Home" goTo={props.goTo}/>
      <NavItem destination="/about" name="About Me" goTo={props.goTo}/>
      <NavItem destination="/portfolio" name="Portfolio" goTo={props.goTo}/>
      <NavItem destination="/contact" name="Contact" goTo={props.goTo}/>
    </div>
  </div>
)

export default NavBar
