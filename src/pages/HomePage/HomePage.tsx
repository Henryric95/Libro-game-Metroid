import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/Metroid_01_big.webp")}
        alt="inizio"
        title="BENVENUTO SU ZEBES!"
        text="La tua missione sarà quella di esplorare il pianeta e
                 distruggere il Cervello Madre, sei pronto?"
      />
      <Button handlerOnClick={() => navigate("/atterraggio")} text="inizia" />
    </div>

    // <Container>
    //   <Row>
    //     <Col>
    //       <Card style={{ width: "18rem" }}>
    //         <Card.Img
    //           variant="top"
    //           src={require("./../../img/Metroid_01_big.webp")}
    //           width={300}
    //           height={250}
    //         />
    //         <Card.Body className="box">
    //           <Card.Title className="text">BENVENUTO SU ZEBES!</Card.Title>
    //           <Card.Text className="text">
    //             La tua missione sarà quella di esplorare il pianeta e
    //             distruggere il Cervello Madre, sei pronto?
    //             <Button href="/atterraggio" className="text">
    //               Inizia
    //             </Button>
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default HomePage;
