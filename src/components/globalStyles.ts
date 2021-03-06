import styled from "styled-components";
import { DefaultPadding } from "./mixins";

export const DefaultPaddingContainer = styled.div<{
  paddingRight?: boolean;
  paddingTop?: boolean;
  paddingLeft?: boolean;
  paddingBottom?: boolean;
}>`
  width: 100%;
  ${(props) =>
    DefaultPadding(
      props.paddingLeft!,
      props.paddingRight!,
      props.paddingTop!,
      props.paddingBottom!
    )};
`;

DefaultPaddingContainer.defaultProps = {
  paddingTop: true,
  paddingRight: true,
  paddingLeft: true,
  paddingBottom: true,
};

export const TransparentButton = styled.button<{
  baseColor: string;
  transparentColor: string;
}>`
  border: 1px solid ${(props) => props.baseColor};
  color: ${(props) => props.baseColor};
  background: transparent;
  transition: 500ms;
  cursor: pointer;
  padding: 0.9em;
  border-radius: 0.7em;
  &:hover {
    background: ${(props) => props.baseColor};
    color: ${(props) => props.transparentColor};
  }
`;

export const ColorBackground = styled.div<{ color?: string }>`
  background: ${(props) => props.color};
`;

ColorBackground.defaultProps = { color: "black" };

export const HalfColorBackground = styled.div<{
  topColor: string;
  bottomColor: string;
}>`
  background: linear-gradient(
    ${(props) => props.topColor} 0%,
    ${(props) => props.topColor} 50%,
    ${(props) => props.bottomColor} 50%,
    ${(props) => props.bottomColor} 100%
  );
`;

export const ClassicButton = styled.button`
  padding: 1em 1.5em;
  background: white;
  color: #c6017e;
  font-size: 0.95em;
  border-radius: 2em;
  border: none;
  outline: none;
  font-weight: bold;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

export const MinimalisticButton = styled.button`
  background: white;
  color: black;
  border: none;
  outline: none;
  border-radius: 0.5em;
  font-weight: bold;
  padding: 0.9em 1.4em;
  font-size: 1.05rem;
`;

export const BiggerHeader = styled.h1`
  font-size: 2.5em;
`;

export const MediumHeader = styled.h1`
  font-size: 1.9em;
`;

export const DefaultWidthContainer = styled.div`
  max-width: 1750px;
  margin: auto;
`;
