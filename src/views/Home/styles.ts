import styled from "styled-components";

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
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontSize};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  align-items: ${(props) => props.alignItems};
  gap: 2em;
`;

CardAbsoluteText.defaultProps = { fontSize: "1em" };
