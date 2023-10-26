import { FC, useContext, useState } from "react";
import { FooterContainer } from "./footer.styles";
import { ThemeContext } from "../../themeContext";

export const Footer: FC = () => {
  const themeContextData = useContext(ThemeContext);

  return (
    <FooterContainer
      className="footer"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    ></FooterContainer>
  );
};
