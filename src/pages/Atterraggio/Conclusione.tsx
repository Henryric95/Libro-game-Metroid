import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Conclusione() {
  return (
    <div>
        <p className='text'>CONGRATULAZIONI!</p>
        <img src={require('./../../img/Fair_SM_ending.webp')} alt='Finale'/>
        <Link to='/' className='text'>Nuova Partita</Link>
    </div>
  )
}

export default Conclusione