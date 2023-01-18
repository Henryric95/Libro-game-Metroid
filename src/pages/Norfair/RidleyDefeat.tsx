import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function RidleyDefeat() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Samus_game_over.webp")}
        alt={"samus muore"}
        title={"GAME OVER"}
        text={"Provi ad affrontare Ridley ma perdi miseramente"}
      />
      <Button handlerOnClick={() => navigate("/")} text="Nuova Partita" />
      {/* <Card style={{ width: '18rem' }}>
        <Card.Body className='box'>
        <Card.Img variant='top' src={require('./../../img/Samus_game_over.webp')} alt='samus muore'/>
        <Card.Text className='text'>Provi ad affrontare Ridley ma perdi miseramente</Card.Text>
        <Card.Text className='text'>GAME OVER</Card.Text>
        <Button href='/' className='text'>Nuova Partita</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default RidleyDefeat;
