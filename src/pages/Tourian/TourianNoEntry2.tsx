import React from "react";
import "../../style.css";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function TourianNoEntry2() {
  const navigate = useNavigate();
  return (
    <div className="pippo">
      <Box
        img={require("./../../img/istockphoto-1031642272-612x612.jpg")}
        alt={"No entry"}
        title={""}
        text={"Per entrare a Tourian devi prima sconfiggere i pirati spaziali"}
      />
      <Button
        handlerOnClick={() => navigate("/atterraggio2")}
        text="Torna indietro"
      />
      {/* <p className='text'>Per entrare a Tourian devi prima sconfiggere i pirati spaziali</p>
        <img src={require('./../../img/istockphoto-1031642272-612x612.jpg')} alt='No entry'/>
        <Link to='/atterraggio2' className='text'>Torna indietro</Link> */}
    </div>
  );
}

export default TourianNoEntry2;
