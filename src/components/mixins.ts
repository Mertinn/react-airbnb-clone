import { css } from "styled-components";
import v from "./variables";

export const DefaultPadding = (
  paddingLeft: boolean,
  paddingRight: boolean,
  paddingTop: boolean,
  paddingBottom: boolean
) => css`
  padding: ${paddingTop ? "1rem" : "0"} ${paddingRight ? "1.5rem" : "0"}
    ${paddingBottom ? "1rem" : "0"} ${paddingLeft ? "1.5rem" : "0"};

  @media (min-width: ${v.desktopWidth}) {
    padding: ${paddingTop ? "1rem" : "0"} ${paddingRight ? "2.5rem" : "0"}
      ${paddingBottom ? "1rem" : "0"} ${paddingLeft ? "2.5rem" : "0"};
  }

  @media (min-width: ${v.desktopExpandWidth}) {
    padding: ${paddingTop ? "1rem" : "0"} ${paddingRight ? "5rem" : "0"}
      ${paddingBottom ? "1rem" : "0"} ${paddingLeft ? "5rem" : "0"};
  }
`;
