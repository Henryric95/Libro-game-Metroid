import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Norfair() {
  return (
    <div>
        <p className='text'>Sei arrivato a Norfair, cosa vuoi fare?</p>
        <img src={require('./../../img/Cattura.PNG')} alt='norfair'/>
        <Link to='/ridley' className='text'>Esplora la tana di Ridley</Link>
        <Link to='/equipNorfair' className='text'>Cerca nuovi potenziamenti</Link>
    </div>
  )
}

export default Norfair