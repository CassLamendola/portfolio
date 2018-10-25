import React, { Component } from 'react'
import Link from 'gatsby-link'
import NavBar from '../components/NavBar'
import { Slide } from '@material-ui/core'

class About extends Component {
  state = { in: true }

  goTo = (page) => {
    this.setState({ in: false })
    setTimeout(() => {
      this.props.history.push(`${page}`)
    }, 800);
  }

  render() { 
    return (
      <div className='page about'>
        <NavBar goTo={this.goTo}/>
        <Slide 
          in={this.state.in} 
          direction='up' 
          timeout={{ enter: 800, exit: 800 }}>
          <div className='page-content'>
            <h1 style={{ backgroundColor: '#03a1da', color: 'white', padding: '0px 30px' }}>About me</h1>
            <p>I like to make software that is beautiful, functional, and a joy to use.</p>
          </div>
        </Slide>
      </div>
    );
  }
}
 
export default About
