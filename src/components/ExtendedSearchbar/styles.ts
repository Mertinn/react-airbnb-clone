import styled, { css, keyframes } from "styled-components";
import v from "../variables";

export const SearchbarContainer = styled.div<{ isShown: boolean }>`
  background: none;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  padding: 0.5em;
  gap: 4em;
  border-radius: 2em;
  opacity: 1;
  transition: opacity 0.2s;

  ${(props) =>
    !props.isShown &&
    css`
      opacity: 0;
    `};
`;

export const SearchbarAnimation = keyframes`
  from {
    top: 0;
    transform: translateX(-30%) scaleX(0);
    opacity: 0;
  }
  to {
    top: 100%;
    transform: translateX(0) scaleX(1);
    opacity: 1;
  }
`;
export const SearchbarAnimationBack = keyframes`
  from {
    top: 100%;
    transform: translateX(0) scaleX(1);
    opacity: 1;
  }
  to {
     top: 0;
     transform: translateX(-30%) scaleX(0);
     opacity: 0;
   }
`;

export const ExtendedContainer = styled.div<{ isShown: boolean }>`
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.isShown
      ? css`
          animation: ${v.navbarAnimationDuration} ${SearchbarAnimation} forwards;
        `
      : css`
          animation: ${v.navbarAnimationDuration} ${SearchbarAnimationBack}
            forwards;
        `}
`;

export const SearchLabel = styled.button`
  background: none;
  outline: none;
  border: none;
  margin-left: 1em;
  font-weight: bold;
`;

export const SearchButton = styled.button`
  border-radius: 50%;
  background: ${v.primaryRed};
  border: none;
  outline: none;
  color: white;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
  gap: 2em;
`;

export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
