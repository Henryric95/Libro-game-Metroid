import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Conclusione() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Fair_SM_ending.webp")}
        alt={"Finale"}
        title={"CONGRATULAZIONI!"}
        text={""}
      />
      <Button handlerOnClick={() => navigate("/")} text="Nuova Partita" />
      {/* <Card style={{ width: '18rem' }}></Card>
      <Card.Img variant='top' src={require('./../../img/Fair_SM_ending.webp')} alt='Finale' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>CONGRATULAZIONI!</Card.Text>
        <Button href='/' className='text'>Nuova Partita</Button>
        </Card.Body> */}
    </div>
  );
}

export default Conclusione;
