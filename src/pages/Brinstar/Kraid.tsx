import React from "react";
import "../../style.css";
import Button from "../../components/Button";
import Box from "../../components/Box";
import { useNavigate } from "react-router-dom";

function Kraid() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/NES_Metroid_HQ_Kraid_artwork.webp")}
        alt={"kraid"}
        title={""}
        text={"Durante l esplorazione ti imbatti in Kraid, cosa fai?"}
      />
      <Button
        handlerOnClick={() => navigate("/brinstar")}
        text="Torna indietro"
      />
      <Button
        handlerOnClick={() => navigate("/kraidDefeat")}
        text="Affrontalo"
      />
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={require('./../../img/NES_Metroid_HQ_Kraid_artwork.webp')} alt='kraid' width={300} height={250}/>
      <Card.Body className='box'>
        <Card.Text className='text'>Durante l'esplorazione ti imbatti in Kraid, <br/>
        uno dei pirati spaziali, cosa fai?</Card.Text>
        <Button href='/brinstar' className='text'>Torna indietro</Button>
        <Button href='/kraidDefeat' className='text'>Affrontalo</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
}

export default Kraid;
