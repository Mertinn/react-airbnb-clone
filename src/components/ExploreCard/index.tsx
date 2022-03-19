import React from "react";
import { ExploreCardContainer } from "./styles";

interface IProps {
  fill?: string;
  image?: string;
  children: React.ReactNode;
  roundedCorners?: boolean;
}

const ExploreCard = ({
  image,
  fill,
  children,
  roundedCorners = true,
}: IProps) => {
  return (
    <ExploreCardContainer
      fill={fill}
      image={image}
      roundedCorners={roundedCorners}
    >
      {children}
    </ExploreCardContainer>
  );
};

export default ExploreCard;
