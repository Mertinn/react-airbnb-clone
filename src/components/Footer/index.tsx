import React from "react";
import {
  BottomSection,
  FooterContainer,
  FooterSections,
  InlineLinks,
  LinksList,
  SectionHeader,
} from "./styles";
import { DefaultPaddingContainer } from "../globalStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <DefaultPaddingContainer>
        <FooterSections>
          <li>
            <SectionHeader>Obsługa klienta</SectionHeader>
            <LinksList>
              <li>
                <a href={"/#"}>Centrum pomocy</a>
              </li>
              <li>
                <a href={"/#"}>Informacje dotyczące bezpieczeństwa</a>
              </li>
              <li>
                <a href={"/#"}>Opcje anulowania</a>
              </li>
              <li>
                <a href={"/#"}>Zgłoś problem</a>
              </li>
              <li>
                <a href={"/#"}>Wsparcie dla osób z niepełnosprawnościami</a>
              </li>
              <li>
                <a href={"/#"}>Zgłoś problem dotyczący Twojej okolicy</a>
              </li>
            </LinksList>
          </li>
          <li>
            <SectionHeader>Społeczność</SectionHeader>
            <LinksList>
              <li>
                <a href={"/#"}>Zacznij przyjmować gości</a>
              </li>
              <li>
                <a href={"/#"}>Odwiedź forum społeczności</a>
              </li>
              <li>
                <a href={"/#"}>Jak przyjmować gości odpowiedzialnie</a>
              </li>
            </LinksList>
          </li>
          <li>
            <SectionHeader>Informacje</SectionHeader>
            <LinksList>
              <li>
                <a href={"/#"}>Wiadomości</a>
              </li>
              <li>
                <a href={"/#"}>Poznaj nowe funkcje</a>
              </li>
              <li>
                <a href={"/#"}>Praca</a>
              </li>
              <li>
                <a href={"/#"}>Dla inwestorów</a>
              </li>
            </LinksList>
          </li>
          <BottomSection>
            <p>© 2022 Airbnb, Inc.</p>
            <InlineLinks>
              <a href={"/#"}>Prywatność</a>
              <span>·</span>
              <a href={"/#"}>Warunki</a>
              <span>·</span>
              <a href={"/#"}>Mapa witryny</a>
              <span>·</span>
              <a href={"/#"}>Informacje o firmie</a>
            </InlineLinks>
          </BottomSection>
        </FooterSections>
      </DefaultPaddingContainer>
    </FooterContainer>
  );
};

export default Footer;
