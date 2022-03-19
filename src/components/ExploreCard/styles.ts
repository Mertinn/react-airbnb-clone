import styled from "styled-components";

export const ExploreCardContainer = styled.div<{
  fill?: string;
  image?: string;
  roundedCorners?: boolean;
}>`
  background: ${(props) => (props.image ? props.image : props.fill)};
  color: white;
  font-size: 0.8em;
  border-radius: ${(props) => (props.roundedCorners ? "1em" : 0)};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
`;

ExploreCardContainer.defaultProps = { roundedCorners: true };

export const CardCenteredContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 10em 0;
`;

export const CardAbsoluteText = styled.div<{
  justifyContent: string;
  alignItems: string;
  textAlign: string;
  fontSize?: string;
  gap?: string;
  topPadding?: string;
  bottomPadding?: string;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.topPadding} 2em ${(props) => props.bottomPadding}
    2em;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontSize};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`;

CardAbsoluteText.defaultProps = {
  fontSize: "1em",
  gap: "2em",
  topPadding: "4em",
  bottomPadding: "4em",
};
