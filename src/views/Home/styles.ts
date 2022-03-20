import styled from "styled-components";
import v from "../../components/variables";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1em;

  @media (min-width: ${v.desktopWidth}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    & > * {
      font-size: 0.9em;
      height: 54.5vw !important;
    }
  }
`;
