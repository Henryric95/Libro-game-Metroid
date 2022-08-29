import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function EquipNorfair2() {
  return (
    <div>
        <p className='text'>Hai trovato il raggio gamma</p>
        <img src={require('./../../img/Cattura2.PNG')} alt='raggio gamma'/>
        <Link to='/ridley2' className='text'>Affronta Ridley</Link>
    </div>
  )
}

export default EquipNorfair2