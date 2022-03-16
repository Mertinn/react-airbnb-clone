import styled from "styled-components";

export const DefaultPaddingContainer = styled.div`
  padding: 1rem 1.5rem 1rem 1.5rem;
`;

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
  font-size: 1.1em;
  border-radius: 2em;
  border: none;
  outline: none;
  font-weight: bold;
`;
