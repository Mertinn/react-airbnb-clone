import styled from "styled-components";

export const DefaultPaddingContainer = styled.div<{ paddingTop?: boolean }>`
  padding: 1rem 1.5rem 1rem 1.5rem;
`;

DefaultPaddingContainer.defaultProps = { paddingTop: true };
