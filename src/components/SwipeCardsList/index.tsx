import React from "react";
import { DefaultPaddingContainer } from "../globalStyles";
import { CardsList } from "./styles";

interface IProps {
  swipeCards: React.ReactNode[];
}

const SwipeCardsList = ({ swipeCards }: IProps) => {
  return (
    <CardsList>
      {swipeCards.map((card) => (
        <li>{card}</li>
      ))}
      <DefaultPaddingContainer paddingLeft={false} />
    </CardsList>
  );
};

export default SwipeCardsList;
