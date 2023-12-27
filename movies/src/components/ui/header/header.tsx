import { FC, useContext } from "react";

import { HeaderContainer } from "./header.styles";
import { ThemeContext } from "../../themeContext";
import { Burger } from "./Burger";
import { SearchBox } from "../searchInput/searchBox";
import { BasicMenu } from "./menu/header-menu";

interface HeaderContainerProps {
  changeTheme: () => void;
  isActive: boolean;
  searchValue?: string;
  setSearchValue: (value: string) => void;
}

export const Header: FC<HeaderContainerProps> = ({
  changeTheme,
  isActive,
  searchValue,
  setSearchValue,
}) => {
  const themeContextData = useContext(ThemeContext);

  return (
    <HeaderContainer
      className="header"
      theme={themeContextData.stylesForTheme}
      myTheme={themeContextData.currentTheme}
    >
      <Burger />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <BasicMenu changeTheme={changeTheme} isActive={isActive} />
    </HeaderContainer>
  );
};
