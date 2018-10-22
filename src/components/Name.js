import React from 'react';
import { Slide } from '@material-ui/core'

const Name = ({ direction, name, color, inOut, leavePage }) => {

  const alignment = direction === 'right' ? 'flex-start' : 'flex-end'

  return ( 
    <Slide 
      in={inOut} 
      direction={direction} 
      timeout={{ enter: 800, exit: 800 }}>
      <div style={{
          width: '100%',
          display: 'flex',
          alignItems: alignment,
          flexDirection: 'column',
          fontFamily: 'sans-serif'
        }} onClick={leavePage}>
        {direction === 'right' && (
          <span>HELLO, I'M</span>
        )}
        <h1 style={{
            margin: '0px',
            backgroundColor: color,
            padding: '0px 30px',
            boxSizing: 'border-box',
            color: 'white',
            textAlign: 'center'
          }}>
          {name}
        </h1>
        {direction === 'left' && (
          <span>[WEB DEVELOPER]</span>
        )}
      </div>
    </Slide>
   );
}
 
export default Name;