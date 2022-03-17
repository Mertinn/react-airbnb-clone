import React from "react";
import {
  ClassicButton,
  ColorBackground,
  DefaultPaddingContainer,
  HalfColorBackground,
  MinimalisticButton,
  SectionHeader,
  TransparentButton,
} from "../../components/globalStyles";
import Navbar from "../../components/Navbar";
import ExploreCard from "../../components/ExploreCard";
import v from "../../components/variables";
import { CardAbsoluteText, CardCenteredContainer } from "./styles";
import CabinPhoto from "../../assets/forestCabin.webp";
import TownCardImage from "../../assets/townCardImage.webp";
import CityCardImage from "../../assets/cityImage.webp";
import VillageCardImage from "../../assets/villageImage.webp";
import CastleCardImage from "../../assets/castleImage.webp";
import SwipeCard from "../../components/SwipeCard";
import SwipeCardsList from "../../components/SwipeCardsList";
import CavePhoto from "../../assets/caveImage.webp";

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
      image={CityCardImage}
      content={
        <>
          <h2>Warszawa</h2>
          <p>227 kilometrów stąd</p>
        </>
      }
    />,
    <SwipeCard
      backgroundColor={"rgb(217, 59, 48)"}
      image={CastleCardImage}
      content={
        <>
          <h2>Kraków</h2>
          <p>368 kilometrów stąd</p>
        </>
      }
    />,
    <SwipeCard
      backgroundColor={"rgb(188, 26, 110)"}
      image={VillageCardImage}
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
            <CardAbsoluteText
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"end"}
            >
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

      <DefaultPaddingContainer>
        <SectionHeader>
          <h2>Odkryj atrakcje Airbnb</h2>
        </SectionHeader>
      </DefaultPaddingContainer>

      <DefaultPaddingContainer>
        <ExploreCard>
          <img src={CavePhoto} alt="Cabin in a forest" />
          <CardAbsoluteText
            textAlign={"left"}
            alignItems={"start"}
            justifyContent={"start"}
            fontSize={"1.2em"}
          >
            <h1>Sposoby spędzania czasu w&nbsp;trakcie podróży</h1>
            <MinimalisticButton>Atrakcje</MinimalisticButton>
          </CardAbsoluteText>
        </ExploreCard>
      </DefaultPaddingContainer>
    </>
  );
};

export default Home;
