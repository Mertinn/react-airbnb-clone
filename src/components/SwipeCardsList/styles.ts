import styled from "styled-components";

export const CardsList = styled.ul`
  display: flex;
  gap: 1em;
  list-style-type: none;
  overflow: overlay;
  scroll-snap-type: x mandatory;

  li {
    scroll-snap-align: start;
  }
`;
