import React from "react";
import { CellHeader, CellPlaceholder, InputCellContainer } from "./styles";

interface IProps {
  title: string;
  placeholder: string;
  type: "text" | "calendar";
}

const InputCell = ({ title, placeholder, type }: IProps) => {
  return (
    <InputCellContainer>
      <CellHeader>{title}</CellHeader>
      <CellPlaceholder>{placeholder}</CellPlaceholder>
    </InputCellContainer>
  );
};

export default InputCell;
