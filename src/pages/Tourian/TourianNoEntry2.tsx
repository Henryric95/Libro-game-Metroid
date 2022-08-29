import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function TourianNoEntry2() {
  return (
    <div>
        <p className='text'>Per entrare a Tourian devi prima sconfiggere i pirati spaziali</p>
        <img src={require('./../../img/istockphoto-1031642272-612x612.jpg')} alt='No entry'/>
        <Link to='/atterraggio2' className='text'>Torna indietro</Link>
    </div>
  )
}

export default TourianNoEntry2