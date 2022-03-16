import React from "react";
import { ExploreCardContainer } from "./styles";

interface IProps {
  fill?: string;
  image?: string;
  children: React.ReactNode;
}

const ExploreCard = ({ image, fill, children }: IProps) => {
  return (
    <ExploreCardContainer fill={fill} image={image}>
      {children}
    </ExploreCardContainer>
  );
};

export default ExploreCard;
