import React from "react";
import { ExploreCardContainer } from "./styles";

interface IProps {
  fill?: string;
  children: React.ReactNode;
  roundedCorners?: boolean;
}

const ExploreCard = ({ fill, children, roundedCorners = true }: IProps) => {
  return (
    <ExploreCardContainer fill={fill} roundedCorners={roundedCorners}>
      {children}
    </ExploreCardContainer>
  );
};

export default ExploreCard;
