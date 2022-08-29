import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function EquipBrinstar3() {
  return (
    <div>
        <p className='text'>Continuando l'esplorazione hai anche trovato<br/>
        dei Super Missili</p>
        <img src={require('./../../img/chris-sulzbach-itm-supermissile-render.jpg')} alt='super missile'/>
        <Link to='/tourian3' className='text'>Vai a Tourian</Link>
    </div>
  )
}

export default EquipBrinstar3