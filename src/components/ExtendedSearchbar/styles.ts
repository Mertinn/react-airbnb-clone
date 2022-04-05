import styled, { css, keyframes } from "styled-components";
import v from "../variables";

export const SearchbarContainer = styled.div<{ isShown: boolean }>`
  background: none;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  gap: 4em;
  border-radius: 2em;
  opacity: 1;
  transition: ${v.navbarAnimationDuration};
  margin-right: auto;
  max-width: 300px;

  ${(props) =>
    !props.isShown &&
    css`
      opacity: 0;
      transform: translateY(50%);
    `};

  @media (min-width: ${v.navbarMoveWidth}) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const SearchbarAnimation = (fromLeft: boolean) => keyframes`
  from {
    top: 0;
    transform: ${fromLeft && "translateX(-30%)"} scaleX(0) translateY(-50%);
    opacity: 0;
  }
  to {
    top: 100%;
    transform: ${fromLeft && "translateX(0)"} scaleX(1) translateY(0);
    opacity: 1;
  }
`;
export const SearchbarAnimationBack = (fromLeft: boolean) => keyframes`
  from {
    top: 100%;
    transform: ${fromLeft && "translateX(0)"} scaleX(1) translateY(0);
    opacity: 1;
  }
  to {
     top: 0;
     transform: ${fromLeft && "translateX(-30%)"} scaleX(0) translateY(-50%);
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
          animation: ${v.navbarAnimationDuration} ${SearchbarAnimation(true)}
            forwards;
        `
      : css`
          animation: ${v.navbarAnimationDuration}
            ${SearchbarAnimationBack(true)} forwards;
        `};

  @media (min-width: ${v.navbarMoveWidth}) {
    top: 0 !important;
    gap: 1em;
    ${(props) =>
      props.isShown
        ? css`
            animation: ${v.navbarAnimationDuration} ${SearchbarAnimation(false)}
              forwards;
          `
        : css`
            animation: ${v.navbarAnimationDuration}
              ${SearchbarAnimationBack(false)} forwards;
          `};
  }
`;

export const SearchLabel = styled.button`
  background: none;
  outline: none;
  border: none;
  margin-left: 1em;
  font-weight: bold;
  white-space: nowrap;
`;

export const HeaderLinks = styled.div`
  display: flex;
  gap: 2em;
`;

export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: center;
`;
