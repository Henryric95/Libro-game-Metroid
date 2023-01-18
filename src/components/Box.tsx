import React, { FC } from "react";

type BoxProps = {
  img: string;
  alt: string;
  title: string;
  text: string;
};

const Box: FC<BoxProps> = ({ img, alt, title, text }) => {
  return (
    <div className="box">
      <img src={img} alt={alt} width={"400px"} height={"400px"} />
      <h3 className="text">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
};

export default Box;
