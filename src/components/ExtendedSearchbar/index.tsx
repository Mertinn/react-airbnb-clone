import React from "react";
import {
  ExtendedContainer,
  GapContainer,
  HeaderLinks,
  SearchbarContainer,
  SearchLabel,
} from "./styles";
import { DefaultPaddingContainer } from "../globalStyles";
import AdvancedInput from "../AdvancedInput";
import SearchButton from "../SearchButton";

const ExtendedSearchbar = ({ isExtended }: { isExtended: boolean }) => {
  return (
    <>
      <SearchbarContainer isShown={!isExtended}>
        <SearchLabel>Rozpocznij wyszukiwanie</SearchLabel>
        <SearchButton />
      </SearchbarContainer>

      <ExtendedContainer isShown={isExtended}>
        <DefaultPaddingContainer paddingRight={false} paddingLeft={false}>
          <GapContainer>
            <HeaderLinks>
              <p>Miejsca na pobyt</p>
              <p>Atrakcje</p>
              <p>Atrakcje online</p>
            </HeaderLinks>
            <AdvancedInput />
          </GapContainer>
        </DefaultPaddingContainer>
      </ExtendedContainer>
    </>
  );
};

export default ExtendedSearchbar;
