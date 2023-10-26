import { FC } from "react";
import { ThemeButtonStyle } from "./themeButton.styles";

interface ButtonThemeTogglerProps {
  onClick?: () => void;
  isActive?: boolean;
}

export const ButtonThemeToggler: FC<ButtonThemeTogglerProps> = ({
  onClick,
  isActive,
}) => {
  return (
    <ThemeButtonStyle
      onClick={onClick}
      className={isActive ? "active" : ""}
    ></ThemeButtonStyle>
  );
};
