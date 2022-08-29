import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Ridley2() {
  return (
    <div>
        <p className='text'>Grazie al raggio gamma sei riuscito a sconfiggere Ridley<br/>
        Ora puoi accedere a Tourian e distruggere il Cervello Madre</p>
        <img src={require('./../../img/NES_Metroid_HQ_Ridley_artwork.webp')} alt='ridley'/>
        <Link to='/atterraggio3' className='text'>Procedi</Link>
    </div>
  )
  }

export default Ridley2