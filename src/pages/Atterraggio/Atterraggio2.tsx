import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Atterraggio2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Zomcard.PNG.webp")}
        alt={"Zebes"}
        title={""}
        text={"Dove vuoi andare?"}
      />
      <Button
        handlerOnClick={() => navigate("/tourianNoEntry2")}
        text="Vai a Tourian"
      />
      <Button
        handlerOnClick={() => navigate("/norfair")}
        text="Vai a Norfair"
      />
      {/* <Card style={{ width: '18rem' }}></Card>
      <Card.Img variant='top' src={require('./../../img/Zomcard.PNG.webp')} alt='Zebes' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Dove vuoi andare?</Card.Text>
        <Button href='/tourianNoEntry2' className='text'>Vai a Tourian</Button>
        <Button href='/norfair' className='text'>Vai a Norfair</Button>
        </Card.Body> */}
    </div>
  );
}

export default Atterraggio2;
