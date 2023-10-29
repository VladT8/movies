import React, { FC, useState } from "react";
import { SearchBoxStyle } from "./searchBox.styles";

interface SearchBoxProps {
  value?: string;
  searchValue?: string;
  setSearchValue: (value: string) => void;
}

export const SearchBox: FC<SearchBoxProps> = ({ value, setSearchValue }) => {
  return (
    <>
      <SearchBoxStyle
        placeholder="Search for a movie..."
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </>
  );
};
