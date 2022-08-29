import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Kraid2() {
  return (
    <div>
        <p className='text'>Affronti Kraid con l'equipaggiamento ottenuto <br/>
        e riesci a vincere</p>
        <img src={require('./../../img/NES_Metroid_HQ_Kraid_artwork.webp')} alt='kraid'/>
        <Link to='/atterraggio2' className='text'>Torna indietro</Link>
        
    </div>
  )
}

export default Kraid2