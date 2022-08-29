import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function RidleyDefeat() {
  return (
    <div>
        <p className='text'>Provi ad affrontare Ridley ma perdi miseramente</p>
        <p className='text'>GAME OVER</p>
        <img src={require('./../../img/Samus_game_over.webp')} alt='samus muore'/>
        <Link to='/' className='text'>Nuova Partita</Link>
    </div>
  )
}

export default RidleyDefeat