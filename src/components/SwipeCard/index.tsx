import React from "react";
import { ContentContainer, SwipeCardContainer } from "./styles";

interface IProps {
  image: string;
  content: React.ReactNode;
  backgroundColor: string;
}

const SwipeCard = ({ image, backgroundColor, content }: IProps) => {
  return (
    <SwipeCardContainer backgroundColor={backgroundColor}>
      <img src={image} alt="" />
      <ContentContainer>{content}</ContentContainer>
    </SwipeCardContainer>
  );
};

export default SwipeCard;
