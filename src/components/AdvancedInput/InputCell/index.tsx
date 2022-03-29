import React from "react";
import {
  CellHeader,
  CellPlaceholder,
  InputCellContainer,
  TextContainer,
} from "./styles";
import SearchButton from "../../SearchButton";

interface IProps {
  title: string;
  placeholder: string;
  type: "text" | "calendar";
  isLast?: boolean;
}

const InputCell = ({ title, placeholder, type, isLast = false }: IProps) => {
  return (
    <InputCellContainer>
      <TextContainer>
        <CellHeader>{title}</CellHeader>
        <CellPlaceholder>{placeholder}</CellPlaceholder>
      </TextContainer>
      {isLast && <SearchButton byPercentage={true} />}
    </InputCellContainer>
  );
};

export default InputCell;
