import styled from "styled-components";
import v from "../variables";

export const FooterContainer = styled.div`
  font-size: 0.9em;
  background: #f7f7f7;
`;
export const FooterSections = styled.ul`
  list-style-type: none;
  line-height: 2em;

  & > li {
    padding: 1em 0;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(212, 212, 212, 0.65);
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  @media (min-width: ${v.desktopExpandWidth}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > li:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const SectionHeader = styled.p`
  font-weight: bold;
`;

export const LinksList = styled.ul`
  list-style-type: none;

  @media (min-width: ${v.desktopWidth}) {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0.5em;
  }

  @media (min-width: ${v.desktopExpandWidth}) {
    display: block;
  }
`;

export const InlineLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  list-style: none;
`;

export const BottomSection = styled.li`
  width: 100%;
  @media (min-width: ${v.desktopExpandWidth}) {
    border-top: 1px solid rgba(212, 212, 212, 0.65);
  }
`;
