import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function EquipBrinstar2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Ice_Beam_M1.webp")}
        alt={"raggio congelante"}
        title={""}
        text={"Esplorando Brinstar hai trovato il raggio congelante"}
      />
      <Button
        handlerOnClick={() => navigate("/tourian2")}
        text="Vai a Tourian"
      />
      <Button
        handlerOnClick={() => navigate("/equipBrinstar3")}
        text="Continua ad esplorare"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img src={require('./../../img/Ice_Beam_M1.webp')} alt='raggio congelante' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Esplorando Brinstar hai trovato il raggio congelante</Card.Text> 
        <Button href='/tourian2' className='text'>Vai a Tourian</Button>
        <Button href='/equipBrinstar3' className='text'>Continua ad esplorare</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default EquipBrinstar2;
