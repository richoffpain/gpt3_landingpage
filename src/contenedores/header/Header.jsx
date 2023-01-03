import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const  Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home" >
      <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Lets build something interesting with GPT-3 OpenAI</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam illum officia sequi ratione. Dolor nam, deleniti vitae minima cum eligendi at consectetur, itaque laborum maxime modi voluptates commodi placeat? Sequi!</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Tu correo electronico' />
            <button type='button' >Get started</button>
          </div>
          <div className='gpt3__header-content__people '>
            <img src={people} alt='people'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          </div>
          </div>
          <div className='gpt3__header-image'>
           <img src={ai} alt='ai' />
          </div>

    </div>
  )
}

export default Header