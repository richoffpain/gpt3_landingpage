import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

/*
Una parte de los enlaces del footer esta renderizado a lo tipico solo con estilo html
y el otro a partir de un componente reutilizable para que implementar diferentes estilos 

*/

const Links = ({h4, p1, p2, p3}) => (
  <>
  <h4>{h4}</h4>
  <p>{p1}</p>
  <p>{p2}</p>
  <p>{p3}</p>
  
  </>
)

const Footer = () => {
  return (
  

      <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">Do you want to step into the future before others</h1>
        </div>
    
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
    
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={logo} alt="gpt3_logo" />
            <p>Buenos aires B1706  RM CABA, <br /> Todos los derechos reservados</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
           <Links h4='Get in touch'
           p1='paragrap 1'
           p2='paragrap 2'
           p3='paragrap 3' />
          </div>
        </div>
    
        <div className="gpt3__footer-copyright">
          <p>@2022 GPT-3. All rights reserved.</p>
        </div>
      </div>
    
  )
}

export default Footer