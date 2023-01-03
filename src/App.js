import React from 'react';
import './App.css';
import { NavBar, Cta, Marca } from './componentes';
import { Footer, Features, GPT3, Header, Posibilidad, Blog } from './contenedores';

const App = () => {

    return (
        <div className='App'>
           <div className='gradient__bg'>
            <NavBar />
            <Header />
           </div>
           <Marca />
           <GPT3 />
           <Features />
           <Posibilidad />
           <Cta />
           <Blog />
           <Footer />
            
        </div>
    )
}


export default App