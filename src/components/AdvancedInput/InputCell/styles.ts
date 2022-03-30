import styled from "styled-components";

export const InputCellContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;

  &:not(:first-child) {
    padding: 0 0 0 1.5em;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    height: 80%;
    width: 1px;
    transform: translateY(-50%);
    background: #cecece;
  }
`;

export const CellHeader = styled.p`
  font-weight: bold;
`;

export const CellPlaceholder = styled.p`
  color: #717171;
`;

export const TextContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 0.5em 0;
  width: 100%;
  font-size: 0.9em;
  font,
  p {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
