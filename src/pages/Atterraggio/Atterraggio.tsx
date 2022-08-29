import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Atterraggio() {
  return (
    <div>
        <p className='text'>Sei atterrato sul pianeta Zebes, dove vuoi andare?</p>
        <img src={require('./../../img/Zomcard.PNG.webp')} alt='Zebes'/>
        <Link to='/tourianNoEntry' className='text'>Vai a Tourian</Link>
        <Link to='/brinstar' className='text'>Vai a Brinstar</Link>
    </div>
  )
}

export default Atterraggio