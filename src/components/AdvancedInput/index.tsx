import React from "react";
import InputCell from "./InputCell";
import { InputContainer } from "./styles";

const AdvancedInput = () => {
  return (
    <InputContainer>
      <InputCell title={"Lokalizacja"} type={"text"} />
      <InputCell title={"Lokalizacja"} type={"text"} />
      <InputCell title={"Lokalizacja"} type={"text"} />
    </InputContainer>
  );
};

export default AdvancedInput;
