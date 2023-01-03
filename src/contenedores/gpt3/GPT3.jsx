import React from 'react';
import { Feature } from '../../componentes';
import './gpt3.css';

const  GPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="gpt">
      <div className='gpt3__whatgpt3-feature'>
        <Feature titulo='Whats GPT3' texto='Lorem ipsum negotum aba laivn fagulavn jaha vtenb chrtddva cdjjndibddcjb '/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
         <Feature titulo='ChatBots' texto='Lorem ipsum negotum aba laivn fagulavn jaha vtenb chrtddva cdjjndibddcjb.Lorem ipsum negotum aba laivn fagulavn jaha vtenb chrtddva cdjjndibddcjb '/>
         <Feature titulo='Education' texto='Lorem ipsum negotum aba laivn fagulavn jaha vtenb chrtddva .Lorem ipsum negotum aba laivn fagulavn jaha vtenb chrtddva cdjjndibddcjb  '/>
         <Feature titulo='Knowledgebase' texto='Lorem ipsum negotum aba laivn fagulavn jaha vtenb chrtddva cdjjndibddcjb .Lorem ipsum negotum aba laivn fagulavn jaha vtenb chrtddva cdjjndibddcjb '/>
      </div>
    </div>
  )
}

export default GPT3