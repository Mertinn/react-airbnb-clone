import React from "react";
import InputCell from "./InputCell";
import { InputContainer } from "./styles";

const AdvancedInput = () => {
  return (
    <InputContainer>
      <InputCell
        title={"Lokalizacja"}
        type={"text"}
        placeholder={"Dokąd chcesz pojechać?"}
      />

      <InputCell title={"Przyjazd"} type={"text"} placeholder={"Dodaj daty"} />

      <InputCell title={"Wyjazd"} type={"text"} placeholder={"Dodaj daty"} />

      <InputCell
        title={"Goście"}
        type={"text"}
        placeholder={"Dodaj gości"}
        isLast={true}
      />
    </InputContainer>
  );
};

export default AdvancedInput;
