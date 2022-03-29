import React from "react";
import { BiSearch } from "react-icons/bi";
import styled, { css } from "styled-components";
import v from "../variables";

export const SearchButtonContainer = styled.button<{ byPercentage: boolean }>`
  border-radius: 50%;
  background: ${v.primaryRed};
  border: none;
  outline: none;
  color: white;
  ${(props) =>
    props.byPercentage
      ? css`
          height: 90%;
        `
      : css`
          height: 2.5em;
          width: 2.5em;
        `}
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
`;

const SearchButton = ({ byPercentage = false }: { byPercentage?: boolean }) => {
  return (
    <>
      <SearchButtonContainer byPercentage={byPercentage}>
        <BiSearch size={"1.5em"} />
      </SearchButtonContainer>
    </>
  );
};

export default SearchButton;
