import styled from "styled-components";
import v from "../../components/variables";
import { DefaultPadding } from "../../components/mixins";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1em;

  @media (min-width: ${v.desktopWidth}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    & > * {
      height: 50vw !important;
    }
  }
`;

export const NoPaddingCardContainer = styled.div`
  ${DefaultPadding(false, false, true, true)};
  @media (min-width: 1400px) {
    ${DefaultPadding(true, true, true, true)}
  }
`;
