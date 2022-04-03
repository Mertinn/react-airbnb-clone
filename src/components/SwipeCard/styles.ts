import styled from "styled-components";
import v from "../variables";

export const SwipeCardContainer = styled.div<{ backgroundColor: string }>`
  border-radius: 1em;
  background: ${(props) => props.backgroundColor};
  color: white;
  overflow: hidden;
  height: 75vw;
  min-width: 55vw;
  img {
    width: 100%;
  }
  @media (min-width: ${v.desktopWidth}) {
    height: 45vw;
    min-width: 35vw;
  }

  @media (min-width: ${v.navbarMoveWidth}) {
    width: auto;
    height: 30vw;
    min-width: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em 1em 7em;
`;
