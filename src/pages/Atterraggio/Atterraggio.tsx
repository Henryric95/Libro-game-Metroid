import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Atterraggio() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Zomcard.PNG.webp")}
        alt="Zebes"
        text="Sei atterrato sul pianeta Zebes, dove vuoi andare?"
        title={""}
      />
      <Button
        handlerOnClick={() => navigate("/tourianNoEntry")}
        text="Vai a Tourian"
      />
      <Button
        handlerOnClick={() => navigate("/brinstar")}
        text="Vai a Brinstar"
      />
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("./../../img/Zomcard.PNG.webp")}
          alt="Zebes"
          width={300}
          height={250}
        />
        <Card.Body className="box">
          <Card.Text className="text">
            Sei atterrato sul pianeta Zebes, dove vuoi andare?
            <Button href="/tourianNoEntry" className="text">
              Vai a Tourian
            </Button>
            <Button href="/brinstar" className="text">
              Vai a Brinstar
            </Button>
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default Atterraggio;
