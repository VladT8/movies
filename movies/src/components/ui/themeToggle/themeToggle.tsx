import React, { useContext, useState } from 'react';
import { ChangeThemeButtonContainer } from './themeToggle.styles';
import { ThemeType } from '../../themeContext/themes';
import { ThemeContext } from '../../themeContext';

export const ChangeThemeButton: React.FC = () => {
   
  
  const [currentTheme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light'? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <ChangeThemeButtonContainer/>
  );
};