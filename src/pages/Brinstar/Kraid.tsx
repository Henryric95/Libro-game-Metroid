import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Kraid() {
  return (
    <div>
        <p className='text'>Durante l'esplorazione ti imbatti in Kraid, <br/>
        uno dei pirati spaziali, cosa fai?</p>
        <img src={require('./../../img/NES_Metroid_HQ_Kraid_artwork.webp')} alt='kraid'/>
        <Link to='/brinstar' className='text'>Torna indietro</Link>
        <Link to='/kraidDefeat' className='text'>Affrontalo</Link>
    </div>
  )
}

export default Kraid