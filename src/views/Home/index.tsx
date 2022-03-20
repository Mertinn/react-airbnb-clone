import React from "react";
import {
  BiggerHeader,
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
import {
  CardAbsoluteText,
  LargeCard,
  SmallCard,
} from "../../components/ExploreCard/styles";
import Footer from "../../components/Footer";
import BigCabinPhoto from "../../assets/forestCabinBigger.webp";
import { CardsGrid } from "./styles";

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
          <DefaultPaddingContainer>
            <SmallCard>
              <ExploreCard fill={v.primaryRed}>
                <CardAbsoluteText
                  alignItems={"center"}
                  textAlign={"center"}
                  justifyContent={"center"}
                  fontSize={"1.3em"}
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
            </SmallCard>
          </DefaultPaddingContainer>
        </ColorBackground>

        <HalfColorBackground topColor={"black"} bottomColor={"white"}>
          <DefaultPaddingContainer>
            <LargeCard>
              <ExploreCard>
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
                  fontSize={"1.2em"}
                >
                  <h1>Zarezerwuj, jak poprowadzi Cię&nbsp;ciekawość</h1>
                  <ClassicButton>Elastyczne wyszukiwanie</ClassicButton>
                </CardAbsoluteText>
              </ExploreCard>
            </LargeCard>
          </DefaultPaddingContainer>
        </HalfColorBackground>
      </section>

      <section>
        <DefaultPaddingContainer>
          <SectionHeader>
            <h2>Pomysł na Twoją kolejną podróż</h2>
          </SectionHeader>
        </DefaultPaddingContainer>
        <DefaultPaddingContainer paddingRight={false}>
          <SwipeCardsList swipeCards={swipeCards} />
        </DefaultPaddingContainer>
      </section>

      <section>
        <DefaultPaddingContainer>
          <SectionHeader>
            <h2>Odkryj atrakcje Airbnb</h2>
          </SectionHeader>
        </DefaultPaddingContainer>

        <DefaultPaddingContainer>
          <CardsGrid>
            <LargeCard>
              <ExploreCard>
                <img src={CavePhoto} alt="Family in a cave" />
                <CardAbsoluteText
                  textAlign={"left"}
                  alignItems={"start"}
                  justifyContent={"start"}
                  fontSize={"1.5em"}
                >
                  <h1>Sposoby spędzania czasu w&nbsp;trakcie podróży</h1>
                  <MinimalisticButton>Atrakcje</MinimalisticButton>
                </CardAbsoluteText>
              </ExploreCard>
            </LargeCard>

            <LargeCard>
              <ExploreCard>
                <img
                  src={IndonesianWomenPhoto}
                  alt="Indonesian women holding a fabric"
                />
                <CardAbsoluteText
                  textAlign={"left"}
                  alignItems={"start"}
                  justifyContent={"start"}
                  fontSize={"1.5em"}
                >
                  <h1>Sposoby spędzania czasu w&nbsp;domu</h1>
                  <MinimalisticButton>Atrakcje online</MinimalisticButton>
                </CardAbsoluteText>
              </ExploreCard>
            </LargeCard>
          </CardsGrid>
        </DefaultPaddingContainer>
      </section>

      <section>
        <DefaultPaddingContainer paddingRight={false} paddingLeft={false}>
          <ExploreCard roundedCorners={false}>
            <LargeCard>
              <img src={WomenOnAField} alt={"Women on a field"} />
              <CardAbsoluteText
                textAlign={"left"}
                alignItems={"start"}
                justifyContent={"space-between"}
                fontSize={"1.3em"}
              >
                <BiggerHeader>
                  Masz pytania na temat przyjmowania gości?
                </BiggerHeader>
                <MinimalisticButton>Zapytaj superhosta</MinimalisticButton>
              </CardAbsoluteText>
            </LargeCard>
          </ExploreCard>
        </DefaultPaddingContainer>
      </section>

      <Footer />
    </>
  );
};

export default Home;
