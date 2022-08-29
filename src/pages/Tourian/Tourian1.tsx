import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom'

function Tourian1() {
  return (
    <div>
        <p className='text'>Entri a Tourian e ti imbatti in uno sciame di Metroid<br/>
        cerchi di difenderti ma non hai l'equipaggiamento giusto<br/>
        per affrontarli. La tua energia viene completamente prosciugata</p>
        <p className='text'>GAME OVER</p>
        <img src={require('./../../img/MetroidTent.PNG.webp')} alt='metroid'/>
        <Link to='/' className='text'>Nuova Partita</Link>
    </div>
  )
}

export default Tourian1