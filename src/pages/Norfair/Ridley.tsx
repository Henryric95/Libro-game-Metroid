import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Ridley() {
  return (
    <div>
        <p className='text'>Ti trovi al cospetto di Ridley, <br/>
        il secondo dei pirati spaziali, cosa fai?</p>
        <img src={require('./../../img/NES_Metroid_HQ_Ridley_artwork.webp')} alt='ridley'/>
        <Link to='/ridleyDefeat' className='text'>Affrontalo</Link>
        <Link to='/norfair' className='text'>Torna indietro</Link>
    </div>
  )
}

export default Ridley