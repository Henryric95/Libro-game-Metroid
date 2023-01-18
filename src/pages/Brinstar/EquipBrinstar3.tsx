import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function EquipBrinstar3() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/chris-sulzbach-itm-supermissile-render.jpg")}
        alt={"super missile"}
        title={""}
        text={"Continuando l'esplorazione hai anche trovato dei Super Missili"}
      />
      <Button
        handlerOnClick={() => navigate("/tourian3")}
        text="Vai a Tourian"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/chris-sulzbach-itm-supermissile-render.jpg')} alt='super missile' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Continuando l'esplorazione hai anche trovato<br/>
        dei Super Missili</Card.Text>
        <Button href='/tourian3' className='text'>Vai a Tourian</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default EquipBrinstar3;
