import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function KraidDefeat() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Samus_game_over.webp")}
        alt={"samus muore"}
        title={"GAME OVER"}
        text={"Affronti Kraid, ma il tuo equipaggiamento non è sufficiente"}
      />
      <Button handlerOnClick={() => navigate("/")} text="Nuova Partita" />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/Samus_game_over.webp')} alt='samus muore'/>
      <Card.Body className='box'>
        <Card.Text className='text'>Affronti Kraid, ma il tuo equipaggiamento non è sufficiente, <br/>
        concludi lo scontro perendo malissimo</Card.Text>
        <Card.Text className='text'>GAME OVER</Card.Text>
        <Button href='/' className='text'>Nuova Partita</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default KraidDefeat;
