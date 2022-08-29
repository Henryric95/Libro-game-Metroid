import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Atterraggio3() {
  return (
    <div>
        <p className='text'>Cosa vuoi fare?</p>
        <img src={require('./../../img/Zomcard.PNG.webp')} alt='Zebes'/>
        <Link to='/tourian1' className='text'>Vai a Tourian</Link>
        <Link to='/equipBrinstar2' className='text'>Esplora Brinstar</Link>
    </div>
  )
}

export default Atterraggio3