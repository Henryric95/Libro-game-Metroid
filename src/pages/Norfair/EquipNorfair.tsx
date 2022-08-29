import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function EquipNorfair() {
  return (
    <div>
        <p className='text'>Provi a cercare ma non hai trovato nulla.</p>
        <img src={require('./../../img/Samus_artwork_26.webp')} alt='samus'/>
        <Link to='/norfair' className='text'>Torna indietro</Link>
        <Link to='/equipNorfair2' className='text'>Cerca meglio</Link>
    </div>
  )
}

export default EquipNorfair