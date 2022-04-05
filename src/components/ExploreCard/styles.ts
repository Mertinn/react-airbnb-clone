import styled, { css } from "styled-components";
import v from "../variables";

const CardSizes = {
  smallCard: css`
    height: 70vw;
    @media (min-width: ${v.desktopWidth}) {
      height: min(30vw, 450px);
    }
  `,
  largeCard: css`
    height: 135vw;
    @media (min-width: ${v.desktopWidth}) {
      height: 50vw;
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
  font-size: 1.1em;
  border-radius: ${(props) => (props.roundedCorners ? "1em" : 0)};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  ${(props) => CardSizes[props.cardType]};

  @media (min-width: ${v.desktopWidth}) {
    font-size: 1.2em;
  }

  @media (min-width: ${v.desktopExpandWidth}) {
    font-size: 1.4em;
  }

  @media (min-width: ${v.desktopLastExpand}) {
    font-size: 1.6em;
  }
`;

ExploreCardContainer.defaultProps = { roundedCorners: true };

export const CardAbsoluteText = styled.div<{
  justifyContent: string;
  alignItems: string;
  textAlign: string;
  gap?: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
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
