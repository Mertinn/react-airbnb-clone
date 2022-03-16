import styled from "styled-components";

export const ExploreCardContainer = styled.div<{
  fill?: string;
  image?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.image ? props.image : props.fill)};
  color: white;
  font-size: 0.8em;
  border-radius: 1em;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
`;
