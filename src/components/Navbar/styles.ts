import styled, { css } from "styled-components";
import v from "../variables";
import { ReactComponent as AirbnbLogo } from "../../assets/airbnbLogo.svg";

export const AirbnbLogoStyled = styled(AirbnbLogo)`
  color: white;
  transition: ${v.navbarAnimationDuration};
`;

export const DesktopMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: white;
  transition: ${v.navbarAnimationDuration};
  position: relative;
  gap: 3em;
  @media (max-width: calc(${v.desktopWidth} - 1px)) {
    display: none;
  }

  @media (min-width: ${v.navbarMoveWidth}) {
    & > * {
      flex: 1 1 0;
    }
  }
`;

export const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
  position: sticky;
  top: 0;
  transition: ${v.navbarAnimationDuration};
  ${(props) => (props.isScrolled ? "background: white" : "background: black")};
  z-index: 999;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);

  ${DesktopMenu} {
    ${(props) =>
      props.isScrolled &&
      css`
        color: black;
      `}
  }

  ${AirbnbLogoStyled} {
    ${(props) =>
      props.isScrolled &&
      css`
        color: ${v.primaryRed};
      `}
  }
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

  @media (min-width: ${v.desktopWidth}) {
    display: none;
  }
`;

export const BottomSpacer = styled.div`
  display: block;
  padding: 5em;
  background: black;
  @media (max-width: calc(${v.desktopWidth} - 1px)) {
    display: none;
  }
  @media (min-width: ${v.navbarMoveWidth}) {
    padding: 3.5em;
  }
`;

export const NavbarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  @media (min-width: ${v.navbarMoveWidth}) {
    justify-content: end;
  }
`;
