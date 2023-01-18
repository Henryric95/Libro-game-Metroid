import React, { FC } from "react";

type ButtonProps = {
  text: string;
  handlerOnClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, handlerOnClick }) => {
  return <button onClick={handlerOnClick}>{text}</button>;
};

export default Button;
