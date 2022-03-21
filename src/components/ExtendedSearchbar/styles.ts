import styled from "styled-components";
import v from "../variables";

export const SearchbarContainer = styled.div`
  background: none;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  padding: 0.5em;
  gap: 4em;
  border-radius: 2em;
`;

export const SearchLabel = styled.button`
  background: none;
  outline: none;
  border: none;
  margin-left: 1em;
  font-weight: bold;
`;

export const SearchButton = styled.button`
  border-radius: 50%;
  background: ${v.primaryRed};
  border: none;
  outline: none;
  color: white;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
