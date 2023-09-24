import React, { useContext, useState } from 'react';
import { ToggleContainer } from './themeToggle.styles';
import { ThemeType } from '../../themeContext/themes';
import { ThemeContext } from '../../themeContext';

const ThemeToggle: React.FC = () => {
   
   const [theme, setTheme] = useState<ThemeType>("light")

   const changeTheme = () => {
     switch (theme) {
       case 'light':
         setTheme('dark');
         break;
       case 'dark':
         setTheme('light');
         break;
     }
   }

  return (
    <ToggleContainer>
      <label>
        <input type="checkbox" onChange={changeTheme} />
        Change Theme
      </label>
    </ToggleContainer>
  );
};

export default ThemeToggle;
