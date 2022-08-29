import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function KraidDefeat() {
  return (
    <div>
        <p className='text'>Affronti Kraid, ma il tuo equipaggiamento non è sufficiente, <br/>
        concludi lo scontro perendo malissimo</p>
        <p className='text'>GAME OVER</p>
        <img src={require('./../../img/Samus_game_over.webp')} alt='samus muore'/>
        <Link to='/' className='text'>Nuova Partita</Link>
    </div>
  )
}

export default KraidDefeat