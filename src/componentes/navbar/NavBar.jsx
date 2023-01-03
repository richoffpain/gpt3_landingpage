import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import  logo  from '../../assets/logo.svg';

/*
El uso de useState es para alterar o no como se va a ver el menu en base a la resolucion de la pantalla
Inicializamos las variables dentro de un arreglo donde la primera nos permite saber si el menu se esta viendo o no y la segunda nos permitira cambiarlo ( osea mostrar o cerrar el despliegue de los items)

La barra de navegacion se podria hacer directamente con etiqueta nav ul li como lo solemos hacer en html, pero aca usamos un componente que podemos reutilizar solamente llamando a <Menu /> en vez de tener que reescribir todo una y otra vez

Usando el operador ternario para el icon de menu, decimos lo siguiente
1. Si togglemenu es true ( hubo este click para para el desplegue de los items) mostrame el iconito del cierre y tambien los items 
2. Si togglemenu es false ( lo que viene predeterminado ) mostrame el iconito de las 3 lineas y en caso de realizar el click por encima poneme el valor a true ( por ende mostrame el iconito del cierre y los items del menu)
*/
const Menu = () => (
  <>
          <p><a href='#home'>Home</a></p>
          <p><a href='#gpt'>Whats GPT-3</a></p>
          <p><a href='#posibilidad'>OpenAI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
  
  </>

)

const NavBar = () => {

   const [ toggleMenu, setToggleMenu ] = useState(0); 
 

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='Logo' />
        </div>
        <div  className='gpt3__navbar-links_container'>
       <Menu />
        </div>
      </div>

      <div className='gpt3__navbar-sign'>
        <p>Sign in </p>
        <button type='button'> Sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        { toggleMenu ? 
      <RiCloseLine  color='#fff' size={27} onClick={() => setToggleMenu(0)} />
      :
      <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(1)} />  
      }
      {toggleMenu && (
        <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu_container-links'>
         <Menu />
         <div className='gpt3__navbar-menu_container-links-sign'>
        <p>Sign in </p>
        <button type='button'> Sign up</button>
      </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default NavBar