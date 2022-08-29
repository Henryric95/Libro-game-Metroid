import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function EquipBrinstar() {
  return (
    <div>
        <p className='text'>Hai trovato una scorta di missili</p>
        <img src={require('./../../img/Missile_M1.webp')} alt='missile'/>
        <Link to='/kraid2' className='text'>Vai ad affrontare Kraid</Link>
    </div>
  )
}

export default EquipBrinstar