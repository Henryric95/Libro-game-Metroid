import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Ridley() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/NES_Metroid_HQ_Ridley_artwork.webp")}
        alt={"ridley"}
        title={""}
        text={
          "Ti trovi al cospetto di Ridley, il secondo dei pirati spaziali, cosa fai?"
        }
      />
      <Button
        handlerOnClick={() => navigate("/ridleyDefeat")}
        text="Affrontalo"
      />
      <Button
        handlerOnClick={() => navigate("/norfair")}
        text="Torna indietro"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/NES_Metroid_HQ_Ridley_artwork.webp')} alt='ridley' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Ti trovi al cospetto di Ridley, <br/>
        il secondo dei pirati spaziali, cosa fai?</Card.Text>
        <Button href='/ridleyDefeat' className='text'>Affrontalo</Button>
        <Button href='/norfair' className='text'>Torna indietro</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default Ridley;
