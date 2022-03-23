import React from "react";
import {
  ExtendedContainer,
  HeaderLinks,
  SearchbarContainer,
  SearchButton,
  SearchLabel,
} from "./styles";
import { BiSearch } from "react-icons/bi";
import { DefaultPaddingContainer } from "../globalStyles";

const ExtendedSearchbar = ({ isExtended }: { isExtended: boolean }) => {
  return (
    <>
      <SearchbarContainer isShown={!isExtended}>
        <SearchLabel>Rozpocznij wyszukiwanie</SearchLabel>
        <SearchButton>
          <BiSearch size={"1.5em"} />
        </SearchButton>
      </SearchbarContainer>

      <ExtendedContainer isShown={isExtended}>
        <DefaultPaddingContainer>
          <HeaderLinks>
            <p>Miejsca na pobyt</p>
            <p>Atrakcje</p>
            <p>Atrakcje online</p>
          </HeaderLinks>
        </DefaultPaddingContainer>
      </ExtendedContainer>
    </>
  );
};

export default ExtendedSearchbar;
