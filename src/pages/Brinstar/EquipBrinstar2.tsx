import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function EquipBrinstar2() {
  return (
    <div>
        <p className='text'>Esplorando Brinstar hai trovato il raggio congelante</p>
        <img src={require('./../../img/Ice_Beam_M1.webp')} alt='raggio congelante'/>
        <Link to='/tourian2' className='text'>Vai a Tourian</Link>
        <Link to='/equipBrinstar3' className='text'>Continua ad esplorare</Link>
    </div>
  )
}

export default EquipBrinstar2