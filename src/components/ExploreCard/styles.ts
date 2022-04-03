import styled, { css } from "styled-components";
import v from "../variables";

const CardSizes = {
  smallCard: css`
    height: 70vw;
    @media (min-width: ${v.desktopWidth}) {
      height: 42vh;
    }
  `,
  largeCard: css`
    height: 135vw;
    @media (min-width: ${v.desktopWidth}) {
      height: 75vh;
    }
  `,
};

export type CardsSizesTypes = keyof typeof CardSizes;

export const ExploreCardContainer = styled.div<{
  fill?: string;
  roundedCorners?: boolean;
  cardType: CardsSizesTypes;
}>`
  ${(props) => props.fill && "background:" + props.fill};
  color: white;
  font-size: 0.8em;
  border-radius: ${(props) => (props.roundedCorners ? "1em" : 0)};
  overflow: hidden;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  ${(props) => CardSizes[props.cardType]};

  @media (min-width: ${v.desktopExpandWidth}) {
    font-size: 1em;
  }
`;

ExploreCardContainer.defaultProps = { roundedCorners: true };

export const CardAbsoluteText = styled.div<{
  justifyContent: string;
  alignItems: string;
  textAlign: string;
  fontSize?: string;
  gap?: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontSize};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};

  @media (min-width: ${v.desktopWidth}) {
    font-size: calc(0.2em + ${(props) => props.fontSize});
  }
`;

CardAbsoluteText.defaultProps = {
  fontSize: "1em",
  gap: "2em",
};
