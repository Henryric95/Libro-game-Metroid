import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Ridley2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/NES_Metroid_HQ_Ridley_artwork.webp")}
        alt={"ridley"}
        title={""}
        text={
          "Grazie al raggio gamma sei riuscito a sconfiggere Ridley. Ora puoi accedere a Tourian e distruggere il Cervello Madre"
        }
      />
      <Button handlerOnClick={() => navigate("/atterraggio3")} text="Procedi" />
      {/* <Card style={{ width: '18rem' }}>
        <Card.Body className='box'>
        <Card.Img variant='top' src={require('./../../img/NES_Metroid_HQ_Ridley_artwork.webp')} alt='ridley' width={300} height={250}/>
        <Card.Text className='text'>Grazie al raggio gamma sei riuscito a sconfiggere Ridley<br/>
        Ora puoi accedere a Tourian e distruggere il Cervello Madre</Card.Text>
        <Button href='/atterraggio3' className='text'>Procedi</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default Ridley2;
