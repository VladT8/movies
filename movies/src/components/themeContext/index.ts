import React from "react";
import { Theme, ThemeType } from "./themes";

export const initialContext = {};

interface ThemeContextProps {
  currentTheme: ThemeType;
  stylesForTheme: Theme;
}

export const ThemeContext = React.createContext({} as ThemeContextProps);
