import React, { FC, useContext, useState } from "react";
import {
  FooterContainer,
} from "./footer.styles";
import { ThemeContext } from "../../themeContext";
import { ThemeType } from "../../themeContext/themes";


export const Footer: FC = () => {
  const themeContextData = useContext(ThemeContext);

  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <FooterContainer className="footer"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      
    </FooterContainer>
  );
};
