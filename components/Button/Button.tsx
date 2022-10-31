import { FC } from "react";
import { ButtonStyled } from "./Button.styles";
import { ButtonProps } from "./ButtonProps";

export const Button: FC<ButtonProps> = ({
  preset = "main",
  isActive = false,
  children,
  ...props
}) => {
  return (
    <ButtonStyled isActive={isActive} preset={preset} type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};
