import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    
    <div className='box'>
      <img src={require('./../../img/Metroid_01_big.webp')} alt='cover Metroid'/>
        <p className='text'>BENVENUTO SU ZEBES!</p>
        <p className='text'>La tua missione sarà quella di esplorare 
        il pianeta e distruggere il Cervello Madre, sei pronto? </p>
        <Link to='/atterraggio' className='text'>Inizia</Link>
    </div>
  )
}

export default HomePage