import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Tourian3() {
  return (
    <div>
        <p className='text'>Entri a Tourian e grazie al raggio congelante<br/>
        riesci a difenderti dai Metroid</p>
        <img src={require('./../../img/Metroidcard.webp')} alt='metroid'/>
        <Link to='/motherBrain2' className='text'>Affronta il Cervello Madre</Link>
    </div>
  )
}

export default Tourian3