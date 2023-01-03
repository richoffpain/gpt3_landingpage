import React from 'react';
import './feature.css';

const Feature = ( {titulo, texto } ) => {
  return (
    <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{titulo}</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
          <p>{texto}</p>
        </div>
    </div>
  )
}

export default Feature