import React from "react";
import {
  ClassicButton,
  ColorBackground,
  DefaultPaddingContainer,
  HalfColorBackground,
  TransparentButton,
} from "../../components/globalStyles";
import Navbar from "../../components/Navbar";
import ExploreCard from "../../components/ExploreCard";
import v from "../../components/variables";
import { CardAbsoluteText, CardCenteredContainer } from "./styles";
import CabinPhoto from "../../assets/forestCabin.webp";

const Home = () => {
  return (
    <>
      <ColorBackground>
        <Navbar />
        <DefaultPaddingContainer>
          <ExploreCard fill={v.primaryRed}>
            <CardCenteredContainer>
              <h1>
                Pomóż w&nbsp;zakwaterowaniu 100&nbsp;000&nbsp;uchodźców
                z&nbsp;Ukrainy
              </h1>
              <TransparentButton
                transparentColor={v.primaryRed}
                baseColor={"white"}
              >
                Dowiedz się więcej
              </TransparentButton>
            </CardCenteredContainer>
          </ExploreCard>
        </DefaultPaddingContainer>
      </ColorBackground>

      <HalfColorBackground topColor={"black"} bottomColor={"white"}>
        <DefaultPaddingContainer>
          <ExploreCard>
            <img src={CabinPhoto} alt="Cabin in a forest" />
            <CardAbsoluteText>
              <h1>Zarezerwuj, jak poprowadzi Cię&nbsp;ciekawość</h1>
              <ClassicButton>Elastyczne wyszukiwanie</ClassicButton>
            </CardAbsoluteText>
          </ExploreCard>
        </DefaultPaddingContainer>
      </HalfColorBackground>
    </>
  );
};

export default Home;
