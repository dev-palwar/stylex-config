import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonL1: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button {...props} >
      {props.children}
    </button>
  );
};

export default ButtonL1;
