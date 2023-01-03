import React from 'react';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import Articulo  from '../../componentes/articulo/Articulo';

/*
Si no tuvieramos este articulo en la carpeta de componentes podriamos directamente crear este componente BoxBlog ahi que es basicamente lo mismo e implemantarlo en cada grupo del div en donde tenemos que renderzar un articulo escrito sobre un tema cualquiera

const BoxBlog = ( {img, tith6, tith3} ) => (
  <>
  <img src={img} alt = 'blog' />
  <h6>{tith6}</h6>
  <h3>{tith3}</h3>
  </>

   <BoxBlog img={blog02} tith6='ti tit' tith3='plus ou ons' />
      <BoxBlog img={blog03} tith6='ti tit' tith3='plus ou ons' />
      <BoxBlog img={blog04} tith6='ti tit' tith3='plus ou ons' />
      <BoxBlog img={blog05} tith6='ti tit' tith3='plus ou ons' />
)

*/

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br />
      We are blogging about it.
      </h1>
      </div>
      <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
            <Articulo imagen={blog01} 
            fecha='2/1/2023' 
            titulo='GPT-3 && Open AI is the future.Lets explore it together' />
        </div>
        <div className="gpt3__blog-container_groupB">
            <Articulo imagen={blog02} 
            fecha='2/1/2023' 
            titulo='GPT-3 && Open AI is the future.Lets explore it together' />
            <Articulo imagen={blog03} 
            fecha='2/1/2023' 
            titulo='GPT-3 && Open AI is the future.Lets explore it together' />
            <Articulo imagen={blog04} 
            fecha='2/1/2023' 
            titulo='GPT-3 && Open AI is the future.Lets explore it together' />
            <Articulo imagen={blog05} 
            fecha='2/1/2023' 
            titulo='GPT-3 && Open AI is the future.Lets explore it together' />
        </div>
      </div>
    </div>
  )
}

export default Blog
