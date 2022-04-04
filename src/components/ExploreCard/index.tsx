import React from "react";
import { DefaultPaddingContainer } from "../globalStyles";
import { CardsSizesTypes, ExploreCardContainer } from "./styles";

interface IProps {
  fill?: string;
  children: React.ReactNode;
  roundedCorners?: boolean;
  cardSize: CardsSizesTypes;
}

const ExploreCard = ({
  fill,
  children,
  roundedCorners = true,
  cardSize,
}: IProps) => {
  return (
    <ExploreCardContainer
      fill={fill}
      roundedCorners={roundedCorners}
      cardType={cardSize}
    >
      {children}
    </ExploreCardContainer>
  );
};

export default ExploreCard;
