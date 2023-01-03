import React from 'react';
import { Feature } from '../../componentes';
import './features.css';

/*

El componente feature que creamos en la carpeta componentes podria ser importada directamente aca y llamarlo para renderizar Los Features  del contenedor pero aca vamos a usar el metodo map para ir variando un poquito con la implementacion de componentes repetitivos 
Seria algo asi :
 <div className='gpt3-features-container'>
          <Feature titulo='title' texto='ahcdbchydv' />
          <Feature titulo='title' texto='ahcdbchydv' />
          <Feature titulo='title' texto='ahcdbchydv' />
          <Feature titulo='title' texto='ahcdbchydv' />
        </div>

       
*/
const Data = [
  {
    titulo: 'Titulo1',
    contenido: 'Contenido del titulo 1 bien detallado en un parafo de 2 a 3 lineas para que tengan una idea mas explicita sobre el tema'
  },
  {
    titulo: 'Titulo 2',
    contenido: 'Contenido del titulo 2 bien detallado en un parafo de 2 a 3 lineas para que tengan una idea mas explicita sobre el tema'
  },
  {
    titulo: 'Titulo 3',
    contenido: 'Contenido del titulo 3 bien detallado en un parafo de 2 a 3 lineas para que tengan una idea mas explicita sobre el tema'
  },
  {
    titulo: 'Titulo 4',
    contenido: 'Contenido del titulo 4 bien detallado en un parafo de 2 a 3 lineas para que tengan una idea mas explicita sobre el tema'
  }

];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
        <h1 className='gradient__text'>
           The Future is Now and You just Need To Realize It. Step Into It Today And Make It Happen.
        </h1>
        <p>
          Request Early Access To Get Started
        </p>
        </div>
        <div className="gpt3__features-container">
        {Data.map((elemento) => (
            <Feature titulo={elemento.titulo} texto={elemento.contenido} />
          )) }
        </div>
    </div>
  )
}

export default Features