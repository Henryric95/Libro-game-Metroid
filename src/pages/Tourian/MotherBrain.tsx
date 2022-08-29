import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function MotherBrain() {
  return (
    <div>
        <p className='text'>Raggiungi il Cervello Madre ma non hai<br/>
        l'equipaggiamento giusto per distruggerla.<br/>
        Vieni eliminato dai sistemi di sicurezza.</p>
        <p className='text'>GAME OVER</p>
        <img src={require('./../../img/Samus_game_over.webp')} alt='samus muore'/>
        <Link to='/' className='text'>Nuova Partita</Link>
    </div>
  )
}

export default MotherBrain