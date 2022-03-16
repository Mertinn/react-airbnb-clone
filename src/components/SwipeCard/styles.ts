import styled from "styled-components";

export const SwipeCardContainer = styled.div<{ backgroundColor: string }>`
  border-radius: 1em;
  background: ${(props) => props.backgroundColor};
  color: white;
  overflow: hidden;
  max-width: 50vw;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em 1em 6em;
`;
