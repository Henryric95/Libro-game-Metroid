import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Norfair() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Cattura.PNG")}
        alt={"norfair"}
        title={""}
        text={"Sei arrivato a Norfair, cosa vuoi fare?"}
      />
      <Button
        handlerOnClick={() => navigate("/ridley")}
        text="Esplora la tana di Ridley"
      />
      <Button
        handlerOnClick={() => navigate("/equipNorfair")}
        text="Cerca nuovi potenziamenti"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/Cattura.PNG')} alt='norfair' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Sei arrivato a Norfair, cosa vuoi fare?</Card.Text>
        <Button href='/ridley' className='text'>Esplora la tana di Ridley</Button>
        <Button href='/equipNorfair' className='text'>Cerca nuovi potenziamenti</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default Norfair;
