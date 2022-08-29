import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Brinstar() {
  return (
    <div>
        <p className='text'>Ti trovi a Brinstar, cosa fai?</p>
        <img src={require('./../../img/Zomcard3.PNG.webp')} alt='brinstar'/>
        <Link to='/kraid' className='text'>Esplora la tana di Kraid</Link>
        <Link to='/equipBrinstar' className='text'>Cerca nuovi potenziamenti</Link>
    </div>
  )
}

export default Brinstar