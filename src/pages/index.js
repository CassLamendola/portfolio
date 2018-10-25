import React, { Component } from 'react'
import Link from 'gatsby-link'
import Name from '../components/Name'
import NavBar from '../components/NavBar'

class IndexPage extends Component {
  state = {
    home: true
  }

  goTo = (page) => {
    this.setState({ home: false })
    setTimeout(() => {
      this.props.history.push(`${page}`)
    }, 800);
  }

  render() { 
    return (
      <div className='page home'>
        <NavBar goTo={this.goTo}/>
        <div
          className='page-content'
          style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '75vw'
          }}>
          <Name direction='right' name='Cassandra' color='#ef77b0' inOut={this.state.home}/>
          <Name direction='left' name='Lamendola' color='#03a1da' inOut={this.state.home}/>
        </div>
      </div>
    );
  }
}
 
export default IndexPage
