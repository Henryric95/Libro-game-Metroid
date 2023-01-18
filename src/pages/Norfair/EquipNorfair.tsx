import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function EquipNorfair() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Samus_artwork_26.webp")}
        alt={"samus"}
        title={""}
        text={"Provi a cercare ma non hai trovato nulla"}
      />
      <Button
        handlerOnClick={() => navigate("/norfair")}
        text="Torna indietro"
      />
      <Button
        handlerOnClick={() => navigate("/equipNorfair2")}
        text="Cerca meglio"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/Samus_artwork_26.webp')} alt='samus' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Provi a cercare ma non hai trovato nulla.</Card.Text>
        <Button href='/norfair' className='text'>Torna indietro</Button>
        <Button href='/equipNorfair2' className='text'>Cerca meglio</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default EquipNorfair;
