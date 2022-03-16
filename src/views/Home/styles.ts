import styled from "styled-components";

export const CardCenteredContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 10em 0;
`;

export const CardAbsoluteText = styled.div`
  position: absolute;
  width: 100%;
  top: 10%;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: center;
  align-items: center;
  gap: 2em;
`;
