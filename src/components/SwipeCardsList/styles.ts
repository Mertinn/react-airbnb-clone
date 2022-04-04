import styled from "styled-components";
import v from "../variables";
import { DefaultPadding } from "../mixins";

export const CardsList = styled.ul`
  display: flex;
  gap: 1em;
  list-style-type: none;
  overflow: overlay;
  scroll-snap-type: x mandatory;

  li {
    scroll-snap-align: start;
  }

  @media (min-width: ${v.navbarMoveWidth}) {
    overflow: visible;
  }
`;

export const SwipeCardsListContainer = styled.div`
  ${DefaultPadding(true, false, true, true)};
  @media (min-width: ${v.navbarMoveWidth}) {
    ${DefaultPadding(true, true, true, true)}
  }
`;
