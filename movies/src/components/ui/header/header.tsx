import { FC, useContext } from "react";

import { HeaderContainer } from "./header.styles";
import { ThemeContext } from "../../themeContext";
import { Burger } from "./Burger";
import { ButtonThemeToggler } from "../themeToggle/themeButton";
import { SearchBox } from "../searchInput/searchBox";

interface HeaderContainerProps {
  nav?: string;
  children?: any;
  changeTheme: () => void;
  isActive: boolean;
  onSearch?: (searchText: string) => void;
}

export const Header: FC<HeaderContainerProps> = ({
  nav,
  changeTheme,
  isActive,
  onSearch,
}) => {
  const themeContextData = useContext(ThemeContext);

  return (
    <HeaderContainer
      className="header"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <Burger />
      {/* <SearchInput onSearch={onSearch} /> */}
      {/* <SearchBox /> */}

      <ButtonThemeToggler onClick={changeTheme} isActive={isActive} />
    </HeaderContainer>
  );
};
