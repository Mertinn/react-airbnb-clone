import React from "react";
import {
  BiggerHeader,
  ClassicButton,
  ColorBackground,
  DefaultPaddingContainer,
  DefaultWidthContainer,
  HalfColorBackground,
  MediumHeader,
  MinimalisticButton,
  SectionHeader,
  TransparentButton,
} from "../../components/globalStyles";
import Navbar from "../../components/Navbar";
import ExploreCard from "../../components/ExploreCard";
import v from "../../components/variables";
import CabinPhoto from "../../assets/forestCabin.webp";
import TownCardImage from "../../assets/townCardImage.webp";
import CityCardImage from "../../assets/cityImage.webp";
import VillageCardImage from "../../assets/villageImage.webp";
import CastleCardImage from "../../assets/castleImage.webp";
import SwipeCard from "../../components/SwipeCard";
import SwipeCardsList from "../../components/SwipeCardsList";
import CavePhoto from "../../assets/caveImage.webp";
import IndonesianWomenPhoto from "../../assets/indonesianWomen.webp";
import WomenOnAField from "../../assets/womenOnAField.jpg";
import WomenOnAFieldBigger from "../../assets/womenOnAFieldBigger.webp";
import { CardAbsoluteText } from "../../components/ExploreCard/styles";
import Footer from "../../components/Footer";
import BigCabinPhoto from "../../assets/forestCabinBigger.webp";
import { CardsGrid, NoPaddingCardContainer } from "./styles";
import { SwipeCardsListContainer } from "../../components/SwipeCardsList/styles";

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
      <Navbar />

      <section>
        <ColorBackground>
          <DefaultWidthContainer>
            <DefaultPaddingContainer>
              <ExploreCard fill={v.primaryRed} cardSize={"smallCard"}>
                <CardAbsoluteText
                  alignItems={"center"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
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
                </CardAbsoluteText>
              </ExploreCard>
            </DefaultPaddingContainer>
          </DefaultWidthContainer>
        </ColorBackground>

        <HalfColorBackground topColor={"black"} bottomColor={"white"}>
          <DefaultWidthContainer>
            <DefaultPaddingContainer>
              <ExploreCard cardSize={"largeCard"}>
                <picture>
                  <source
                    media={`(min-width: ${v.desktopWidth})`}
                    srcSet={BigCabinPhoto}
                  />
                  <img src={CabinPhoto} alt="Cabin in a forest" />
                </picture>

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
          </DefaultWidthContainer>
        </HalfColorBackground>
      </section>

      <section>
        <DefaultWidthContainer>
          <DefaultPaddingContainer>
            <SectionHeader>
              <h2>Pomysł na Twoją kolejną podróż</h2>
            </SectionHeader>
          </DefaultPaddingContainer>

          <SwipeCardsListContainer>
            <SwipeCardsList swipeCards={swipeCards} />
          </SwipeCardsListContainer>
        </DefaultWidthContainer>
      </section>

      <section>
        <DefaultWidthContainer>
          <DefaultPaddingContainer>
            <SectionHeader>
              <h2>Odkryj atrakcje Airbnb</h2>
            </SectionHeader>
          </DefaultPaddingContainer>

          <DefaultPaddingContainer>
            <CardsGrid>
              <ExploreCard cardSize={"largeCard"}>
                <img src={CavePhoto} alt="Family in a cave" />
                <CardAbsoluteText
                  textAlign={"left"}
                  alignItems={"start"}
                  justifyContent={"start"}
                >
                  <MediumHeader>
                    Sposoby spędzania czasu w&nbsp;trakcie podróży
                  </MediumHeader>
                  <MinimalisticButton>Atrakcje</MinimalisticButton>
                </CardAbsoluteText>
              </ExploreCard>

              <ExploreCard cardSize={"largeCard"}>
                <img
                  src={IndonesianWomenPhoto}
                  alt="Indonesian women holding a fabric"
                />
                <CardAbsoluteText
                  textAlign={"left"}
                  alignItems={"start"}
                  justifyContent={"start"}
                >
                  <MediumHeader>
                    Sposoby spędzania czasu w&nbsp;domu
                  </MediumHeader>
                  <MinimalisticButton>Atrakcje online</MinimalisticButton>
                </CardAbsoluteText>
              </ExploreCard>
            </CardsGrid>
          </DefaultPaddingContainer>
        </DefaultWidthContainer>
      </section>

      <section>
        <DefaultWidthContainer>
          <NoPaddingCardContainer>
            <ExploreCard roundedCorners={false} cardSize={"largeCard"}>
              <picture>
                <source
                  media={`(min-width: ${v.desktopWidth})`}
                  srcSet={WomenOnAFieldBigger}
                />
                <img src={WomenOnAField} alt={"Women on a field"} />
              </picture>
              <CardAbsoluteText
                textAlign={"left"}
                alignItems={"start"}
                justifyContent={"space-between"}
              >
                <BiggerHeader>
                  Masz pytania na temat przyjmowania gości?
                </BiggerHeader>
                <MinimalisticButton>Zapytaj superhosta</MinimalisticButton>
              </CardAbsoluteText>
            </ExploreCard>
          </NoPaddingCardContainer>
        </DefaultWidthContainer>
      </section>

      <Footer />
    </>
  );
};

export default Home;
