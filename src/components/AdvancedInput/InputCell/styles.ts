import styled from "styled-components";

export const InputCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  color: black;
  flex: 1;
  &:not(:first-child) {
    padding: 0 0 0 1.5em;
  }

  &:not(:last-child) {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      height: 80%;
      width: 1px;
      transform: translateY(-50%);
      background: #cecece;
    }
  }
`;

export const CellHeader = styled.p`
  font-weight: bold;
`;

export const CellPlaceholder = styled.p`
  color: #717171;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
