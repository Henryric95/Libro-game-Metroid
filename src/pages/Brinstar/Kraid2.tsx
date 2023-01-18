import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Kraid2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/NES_Metroid_HQ_Kraid_artwork.webp")}
        alt={"kraid"}
        title={""}
        text={
          "Affronti Kraid con l'equipaggiamneto ottenuto e riesci a vincere"
        }
      />
      <Button
        handlerOnClick={() => navigate("/atterraggio2")}
        text="Torna indietro"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/NES_Metroid_HQ_Kraid_artwork.webp')} alt='kraid' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Affronti Kraid con l'equipaggiamento ottenuto <br/>
        e riesci a vincere</Card.Text>
        <Button href='/atterraggio2' className='text'>Torna indietro</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default Kraid2;
