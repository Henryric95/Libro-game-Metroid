import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Brinstar() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Zomcard3.PNG.webp")}
        alt={"brinstar"}
        title={""}
        text={"Ti trovi a Brinstar, cosa fai?"}
      />
      <Button
        handlerOnClick={() => navigate("/kraid")}
        text="Esplora la tana di Kraid"
      />
      <Button
        handlerOnClick={() => navigate("/equipBrinstar")}
        text="Cerca nuovi potenziamenti"
      />
      {/* <Card style={{ width: '18rem' }}></Card>
      <Card.Img variant='top' src={require('./../../img/Zomcard3.PNG.webp')} alt='brinstar' width={300} height={250}/>
        <Card.Body className='box'>
        <Card.Text className='text'>Ti trovi a Brinstar, cosa fai?</Card.Text>
        <Button href='/kraid' className='text'>Esplora la tana di Kraid</Button>
        <Button href='/equipBrinstar' className='text'>Cerca nuovi potenziamenti</Button>
        </Card.Body> */}
    </div>
  );
}

export default Brinstar;
