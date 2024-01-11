import React from "react";
import * as stylex from "@stylexjs/stylex";
import Button, { ButtonProps } from "./ButtonL1";

interface ButtonL2Props extends ButtonProps {
  variant?: "primary" | "secondary" | "disabled" | "loading";
}

const variants = stylex.create({
  primary: {
    backgroundColor: "red",
  },
  secondary: {},
  disabled: {},
  loading: {},
});

const ButtonL2 = React.forwardRef<HTMLButtonElement, ButtonL2Props>(
  ({ ...props }) => {
    return (
      <Button {...props} {...stylex.props(variants.primary)}>
        {props.children}
      </Button>
    );
  }
);

export default ButtonL2;
