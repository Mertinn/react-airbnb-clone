import styled from "styled-components";
import v from "../variables";

export const InputContainer = styled.div`
  font-size: 0.9em;
  padding: 0.5em 0.5em 0.5em 2em;
  background: white;
  border-radius: 3em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 900px;

  @media (min-width: ${v.navbarMoveWidth}) {
    width: 80%;
  }
`;
