import React from "react";
import { SearchbarContainer, SearchButton, SearchLabel } from "./styles";
import { BiSearch } from "react-icons/bi";

const ExtendedSearchbar = () => {
  return (
    <SearchbarContainer>
      <SearchLabel>Rozpocznij wyszukiwanie</SearchLabel>
      <SearchButton>
        <BiSearch size={"1.5em"} />
      </SearchButton>
    </SearchbarContainer>
  );
};

export default ExtendedSearchbar;
