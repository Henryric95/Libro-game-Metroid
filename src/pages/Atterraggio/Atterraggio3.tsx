import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Atterraggio3() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Zomcard.PNG.webp")}
        alt={"Zebes"}
        title={""}
        text={"Cosa vuoi fare"}
      />
      <Button
        handlerOnClick={() => navigate("/tourian1")}
        text="Vai a Tourian"
      />
      <Button
        handlerOnClick={() => navigate("/equipBrinstar2")}
        text="Esplora Brinstar"
      />
      {/* <Card style={{ width: '18rem' }}></Card>
      <Card.Img variant='top' src={require('./../../img/Zomcard.PNG.webp')} alt='Zebes' width={300} height={250}/>
        <Card.Body className='box'>
        <Card.Text className='text'>Cosa vuoi fare?</Card.Text>
        <Button href='/tourian1' className='text'>Vai a Tourian</Button>
        <Button href='/equipBrinstar2' className='text'>Esplora Brinstar</Button>
        </Card.Body> */}
    </div>
  );
}

export default Atterraggio3;
