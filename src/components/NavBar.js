import React from 'react'
import NavItem from './NavItem'

const NavBar = (props) => (
  <div className='nav-bar'>
    <NavItem destination="/" name="Home" goTo={props.goTo}/>
    <NavItem destination="/about" name="About Me" goTo={props.goTo}/>
    <NavItem destination="/portfolio" name="Portfolio" goTo={props.goTo}/>
    <NavItem destination="/contact" name="Contact" goTo={props.goTo}/>
  </div>
)

export default NavBar
