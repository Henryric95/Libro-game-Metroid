import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function EquipNorfair2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Cattura2.PNG")}
        alt={"raggio gamma"}
        title={""}
        text={"Hai trovato il raggio gamma"}
      />
      <Button
        handlerOnClick={() => navigate("/ridley2")}
        text="Affronta Ridley"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img src={require('./../../img/Cattura2.PNG')} alt='raggio gamma' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Hai trovato il raggio gamma</Card.Text>
        <Button href='/ridley2' className='text'>Affronta Ridley</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default EquipNorfair2;
