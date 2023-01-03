import React from 'react';
import './marca.css';
import { google, slack, atlassian, shopify, dropbox } from './import.js';

/*
Otra forma de implementar estas imagenes en el codigo

const Imagen = () => (
  <>
  <img src={google} alt='google' />
  <img src={slack} alt='slack' />
  <img src={atlassian} alt='atlassian' />
  <img src={shopify} alt='shopify' />
  <img src={dropbox} alt='dropbox' />
  </>
)
     <Imagen />

*/

const Marca = () => {
  return (
    <div className='gpt3__marca section__padding'>
      <div>
      <img src={google} alt='google' />
      </div>
      <div>
      <img src={slack} alt='slack' />
      </div>
      <div>
      <img src={atlassian} alt='atlassian' />
      </div>
      <div>
      <img src={shopify} alt='shopify' />
      </div>
      <div>
      <img src={dropbox} alt='dropbox' />
      </div>
    </div>
  )
}

export default Marca