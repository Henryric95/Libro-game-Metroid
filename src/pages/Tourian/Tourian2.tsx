import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Tourian2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Metroidcard.webp")}
        alt={"metroid"}
        title={""}
        text={
          "Entri a Tourian e grazie al raggio congelante riesci a difenderti dai Metroid"
        }
      />
      <Button
        handlerOnClick={() => navigate("/motherBrain")}
        text="Affronta il Cervello Madre"
      />
      <Button
        handlerOnClick={() => navigate("/equipBrinstar2")}
        text="Torna indietro"
      />
      {/* <p className='text'>Entri a Tourian e grazie al raggio congelante<br/>
        riesci a difenderti dai Metroid</p>
        <img src={require('./../../img/Metroidcard.webp')} alt='metroid'/>
        <Link to='/motherBrain' className='text'>Affronta il Cervello Madre</Link>
        <Link to='/equipBrinstar2' className='text'>Torna indietro</Link> */}
    </div>
  );
}

export default Tourian2;
