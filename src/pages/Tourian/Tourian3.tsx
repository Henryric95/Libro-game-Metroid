import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Tourian3() {
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
        handlerOnClick={() => navigate("/motherBrain2")}
        text="Affronta il Cervello Madre"
      />
      {/* <p className='text'>Entri a Tourian e grazie al raggio congelante<br/>
        riesci a difenderti dai Metroid</p>
        <img src={require('./../../img/Metroidcard.webp')} alt='metroid'/>
        <Link to='/motherBrain2' className='text'>Affronta il Cervello Madre</Link> */}
    </div>
  );
}

export default Tourian3;
