import React from 'react'
import './App.css';

import IntegranteA from './components/IntegranteA';
import IntegranteB from './components/IntegranteB';
import IntegranteC from './components/IntegranteC';
import IntegranteD from './components/IntegranteD';

const App = () => {
  return (
    <div className='main-box'>
      <IntegranteA className='div1'/>
      <IntegranteB className='div2'/>
      <IntegranteC className='div3'/>
      <IntegranteD className='div4'/>
    </div>
  )
}

export default App