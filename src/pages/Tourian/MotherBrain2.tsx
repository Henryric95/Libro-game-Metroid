import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function MotherBrain2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Tourian_cartoon.webp")}
        alt={"mother brain"}
        title={""}
        text={
          "Grazie al tuo nuovo equipaggiamento riesci a sconfiggere il Cervello Madre e a compiere la tua missione"
        }
      />
      <Button handlerOnClick={() => navigate("/conclusione")} text="Continua" />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/Tourian_cartoon.webp')} alt='mother brain' width={300} height={250} />
        <Card.Text className='text'>Grazie al tuo nuovo equipaggiamento<br/>
        Riesci a sconfiggere il Cervello Madre e <br/>
        a compiere la tua missione</Card.Text>
        <Button href='/conclusione' className='text'>Continua</Button>
        </Card> */}
    </div>
  );
}

export default MotherBrain2;
