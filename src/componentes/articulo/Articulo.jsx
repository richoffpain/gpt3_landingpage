import React from 'react';
import './articulo.css'

const Articulo = ({imagen, fecha, titulo}) => {
  return (
    <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imagen} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{fecha}</p>
        <h3>{titulo}</h3>
      </div>
      <p>Leer mas sobre el articulo</p>
    </div>
  </div>
  )
}

export default Articulo
