import React from "react";
import {
  ClassicButton,
  ColorBackground,
  DefaultPaddingContainer,
  HalfColorBackground,
  SectionHeader,
  TransparentButton,
} from "../../components/globalStyles";
import Navbar from "../../components/Navbar";
import ExploreCard from "../../components/ExploreCard";
import v from "../../components/variables";
import { CardAbsoluteText, CardCenteredContainer } from "./styles";
import CabinPhoto from "../../assets/forestCabin.webp";
import TownCardImage from "../../assets/townCardImage.webp";
import SwipeCard from "../../components/SwipeCard";
import SwipeCardsList from "../../components/SwipeCardsList";

const Home = () => {
  const swipeCards = [
    <SwipeCard
      backgroundColor={"rgb(204, 45, 74)"}
      image={TownCardImage}
      content={
        <>
          <h2>Gdańsk</h2>
          <p>140 kilometrów stąd</p>
        </>
      }
    />,
    <SwipeCard
      backgroundColor={"rgb(204, 45, 74)"}
      image={TownCardImage}
      content={
        <>
          <h2>Warszawa</h2>
          <p>227 kilometrów stąd</p>
        </>
      }
    />,
    <SwipeCard
      backgroundColor={"rgb(217, 59, 48)"}
      image={TownCardImage}
      content={
        <>
          <h2>Kraków</h2>
          <p>368 kilometrów stąd</p>
        </>
      }
    />,
    <SwipeCard
      backgroundColor={"rgb(188, 26, 110)"}
      image={TownCardImage}
      content={
        <>
          <h2>Katowice</h2>
          <p>328 kilometrów stąd</p>
        </>
      }
    />,
  ];
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

      <DefaultPaddingContainer>
        <SectionHeader>
          <h2>Pomysł na Twoją kolejną podróż</h2>
        </SectionHeader>
      </DefaultPaddingContainer>
      <DefaultPaddingContainer paddingRight={false}>
        <SwipeCardsList swipeCards={swipeCards} />
      </DefaultPaddingContainer>
    </>
  );
};

export default Home;
