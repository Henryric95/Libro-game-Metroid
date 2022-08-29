import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Tourian2() {
  return (
    <div>
        <p className='text'>Entri a Tourian e grazie al raggio congelante<br/>
        riesci a difenderti dai Metroid</p>
        <img src={require('./../../img/Metroidcard.webp')} alt='metroid'/>
        <Link to='/motherBrain' className='text'>Affronta il Cervello Madre</Link>
        <Link to='/equipBrinstar2' className='text'>Torna indietro</Link>
    </div>
  )
}

export default Tourian2