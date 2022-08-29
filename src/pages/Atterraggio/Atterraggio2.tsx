import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Atterraggio2() {
  return (
    <div>
        <p className='text'>Dove vuoi andare?</p>
        <img src={require('./../../img/Zomcard.PNG.webp')} alt='Zebes'/>
        <Link to='/tourianNoEntry2' className='text'>Vai a Tourian</Link>
        <Link to='/norfair' className='text'>Vai a Norfair</Link>
    </div>
  )
}

export default Atterraggio2