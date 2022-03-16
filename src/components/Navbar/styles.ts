import styled from "styled-components";
import v from "../variables";

export const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
  position: sticky;
  top: 0;
  transition: background 0.5s;
  ${(props) => props.isScrolled && "background: white"};
  z-index: 999;
`;

export const SearchbarContainer = styled.div`
  padding: 0.85em;
  background: white;
  border-radius: 4em;
  button {
    background: transparent;
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    outline: none;
    border: none;
    margin: auto;
    svg {
      color: ${v.primaryRed};
    }
  }
`;
