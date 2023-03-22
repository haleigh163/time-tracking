import { FC } from "react";
import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  text: string;
} & RestProps;

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
  return <MuiButton {...rest}>{text}</MuiButton>;
};

export default Button;
