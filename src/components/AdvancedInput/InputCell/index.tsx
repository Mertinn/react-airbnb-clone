import React from "react";
import { CellHeader, InputCellContainer } from "./styles";

interface IProps {
  title: string;
  type: "text" | "calendar";
}

const InputCell = ({ title, type }: IProps) => {
  return (
    <InputCellContainer>
      <CellHeader>{title}</CellHeader>
    </InputCellContainer>
  );
};

export default InputCell;
