import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './style.css'


import './App.css';
import Atterraggio from './pages/Atterraggio/Atterraggio';
import TourianNoEntry from './pages/Tourian/TourianNoEntry';
import Brinstar from './pages/Brinstar/Brinstar';
import Kraid from './pages/Brinstar/Kraid';
import KraidDefeat from './pages/Brinstar/KraidDefeat';
import EquipBrinstar from './pages/Brinstar/EquipBrinstar';
import Kraid2 from './pages/Brinstar/Kraid2';
import Atterraggio2 from './pages/Atterraggio/Atterraggio2';
import Norfair from './pages/Norfair/Norfair';
import EquipNorfair from './pages/Norfair/EquipNorfair';
import EquipNorfair2 from './pages/Norfair/EquipNorfair2';
import Ridley from './pages/Norfair/Ridley';
import RidleyDefeat from './pages/Norfair/RidleyDefeat';
import Ridley2 from './pages/Norfair/Ridley2';
import Atterraggio3 from './pages/Atterraggio/Atterraggio3';
import Tourian1 from './pages/Tourian/Tourian1';
import EquipBrinstar2 from './pages/Brinstar/EquipBrinstar2';
import Tourian2 from './pages/Tourian/Tourian2';
import MotherBrain from './pages/Tourian/MotherBrain';
import EquipBrinstar3 from './pages/Brinstar/EquipBrinstar3';
import Tourian3 from './pages/Tourian/Tourian3';
import MotherBrain2 from './pages/Tourian/MotherBrain2';
import Conclusione from './pages/Atterraggio/Conclusione';
import TourianNoEntry2 from './pages/Tourian/TourianNoEntry2';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>         
        <Route path='/atterraggio' element={<Atterraggio/>}/>
        <Route path='/tourianNoEntry' element={<TourianNoEntry/>}/>
        <Route path='/brinstar' element={<Brinstar/>}/>
        <Route path='/kraid' element={<Kraid/>}/>
        <Route path='/kraidDefeat' element={<KraidDefeat/>}/>
        <Route path='/equipBrinstar' element={<EquipBrinstar/>}/>
        <Route path='/kraid2' element={<Kraid2/>}/>
        <Route path='/atterraggio2' element={<Atterraggio2/>}/>
        <Route path='/norfair' element={<Norfair/>}/>
        <Route path='/equipNorfair' element={<EquipNorfair/>}/>
        <Route path='/equipNorfair2' element={<EquipNorfair2/>}/>
        <Route path='/ridley' element={<Ridley/>}/>
        <Route path='/ridleyDefeat' element={<RidleyDefeat/>}/>
        <Route path='/ridley2' element={<Ridley2/>}/>
        <Route path='/atterraggio3' element={<Atterraggio3/>}/>
        <Route path='/tourian1' element={<Tourian1/>}/>
        <Route path='/equipBrinstar2' element={<EquipBrinstar2/>}/>
        <Route path='/tourian2' element={<Tourian2/>}/>
        <Route path='/motherBrain' element={<MotherBrain/>}/>
        <Route path='/equipBrinstar3' element={<EquipBrinstar3/>}/>
        <Route path='/tourian3' element={<Tourian3/>}/>
        <Route path='/motherBrain2' element={<MotherBrain2/>}/>
        <Route path='/conclusione' element={<Conclusione/>}/>
        <Route path='/tourianNoEntry2' element={<TourianNoEntry2/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
