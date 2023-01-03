import React from 'react';
import './posibilidad.css';
import posibilidad from '../../assets/possibility.png';

const  Posibilidad = () => {
  return (
    <div className='gpt3__possibility section__padding ' id='posibilidad'>
     <div className='gpt3__possibility-image'>
      <img src={posibilidad} alt='posibiliad' />
     </div>
     <div className='gpt3__possibility-content'>
      <h4>Request early access to get started</h4>
      <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo vel quibusdam eveniet. Possimus minus sapiente soluta. Explicabo accusantium recusandae nam libero. Modi sed consequatur nobis ipsam blanditiis voluptatum quidem?</p>
      <h4>Lorem ipsum kasumi vatara ovni</h4>

     </div>
    </div>
  )
}

export default Posibilidad