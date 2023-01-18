import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function EquipBrinstar() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Missile_M1.webp")}
        alt={"missile"}
        title={""}
        text={"Hai trovato una scorta di missili"}
      />
      <Button
        handlerOnClick={() => navigate("/kraid2")}
        text="Vai ad affrontare Kraid"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img src={require('./../../img/Missile_M1.webp')} alt='missile' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Hai trovato una scorta di missili</Card.Text>
        <Button href='/kraid2' className='text'>Vai ad affrontare Kraid</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default EquipBrinstar;
