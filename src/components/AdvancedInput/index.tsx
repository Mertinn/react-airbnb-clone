import React from "react";
import InputCell from "./InputCell";
import { InputContainer, Line } from "./styles";

const AdvancedInput = () => {
  return (
    <InputContainer>
      <InputCell
        title={"Lokalizacja"}
        type={"text"}
        placeholder={"Dokąd chcesz pojechać?"}
      />
      <Line />
      <InputCell
        title={"Lokalizacja"}
        type={"text"}
        placeholder={"Dodaj daty"}
      />
      <Line />
      <InputCell
        title={"Lokalizacja"}
        type={"text"}
        placeholder={"Dodaj daty"}
      />
      <Line />
      <InputCell title={"Goście"} type={"text"} placeholder={"Dodaj gości"} />
    </InputContainer>
  );
};

export default AdvancedInput;
