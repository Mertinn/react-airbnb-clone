import React from "react";
import { CardsList } from "./styles";

interface IProps {
  swipeCards: React.ReactNode[];
}

const SwipeCardsList = ({ swipeCards }: IProps) => {
  return (
    <CardsList>
      {swipeCards.map((card, index) => (
        <li key={index}>{card}</li>
      ))}
    </CardsList>
  );
};

export default SwipeCardsList;
