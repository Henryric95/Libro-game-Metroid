import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function MotherBrain2() {
  return (
    <div>
        <p className='text'>Grazie al tuo nuovo equipaggiamento<br/>
        Riesci a sconfiggere il Cervello Madre e <br/>
        a compiere la tua missione</p>
        <img src={require('./../../img/Tourian_cartoon.webp')} alt='mother brain'/>
        <Link to='/conclusione' className='text'>Continua</Link>
    </div>
  )
}

export default MotherBrain2