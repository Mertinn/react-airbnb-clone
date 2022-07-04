import styled, { css } from "styled-components";
import v from "../variables";

const CardSizes = {
  smallCard: css`
    height: 70vw;
    @media (min-width: ${v.desktopWidth}) {
      height: auto;
      padding: 16% 0 16% 0;
    }
  `,
  largeCard: css`
    height: 135vw;
    @media (min-width: ${v.desktopWidth}) {
      height: auto;
      padding: 29% 0 29% 0;
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
  font-size: 1em;
  border-radius: ${(props) => (props.roundedCorners ? "1em" : 0)};
  @media (min-width: ${v.desktopLastExpand}) {
    border-radius: 1em;
  }
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
  }
  @media (min-width: 360px) {
    font-size: 1.1em;
  }
  @media (min-width: ${v.desktopWidth}) {
    font-size: 1.2em;
  }

  @media (min-width: ${v.desktopExpandWidth}) {
    font-size: 1.4em;
  }

  @media (min-width: ${v.desktopLastExpand}) {
    font-size: 1.6em;
  }
  ${(props) => CardSizes[props.cardType]};
`;

ExploreCardContainer.defaultProps = { roundedCorners: true };

export const CardAbsoluteText = styled.div<{
  justifyContent: string;
  alignItems: string;
  textAlign: string;
  gap?: string;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};

  @media (min-width: ${v.desktopLastExpand}) {
    padding: 4rem;
  }
`;

CardAbsoluteText.defaultProps = {
  gap: "2em",
};
