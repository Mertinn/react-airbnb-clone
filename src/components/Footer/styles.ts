import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 2em;
  font-size: 0.9em;
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
`;

export const SectionHeader = styled.p`
  font-weight: bold;
`;

export const LinksList = styled.ul`
  list-style-type: none;
`;

export const InlineLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  list-style: none;
`;
