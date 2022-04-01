import React from "react";
import { Link } from "react-router-dom";
import {
  BottomSection,
  FooterContainer,
  FooterSections,
  InlineLinks,
  LinksList,
  SectionHeader,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSections>
        <li>
          <SectionHeader>Obsługa klienta</SectionHeader>
          <LinksList>
            <li>
              <Link to={"#"}>Centrum pomocy</Link>
            </li>
            <li>
              <Link to={"#"}>Informacje dotyczące bezpieczeństwa</Link>
            </li>
            <li>
              <Link to={"#"}>Opcje anulowania</Link>
            </li>
            <li>
              <Link to={"#"}>Zgłoś problem</Link>
            </li>
            <li>
              <Link to={"#"}>Wsparcie dla osób z niepełnosprawnościami</Link>
            </li>
            <li>
              <Link to={"#"}>Zgłoś problem dotyczący Twojej okolicy</Link>
            </li>
          </LinksList>
        </li>
        <li>
          <SectionHeader>Społeczność</SectionHeader>
          <LinksList>
            <li>
              <Link to={"#"}>Zacznij przyjmować gości</Link>
            </li>
            <li>
              <Link to={"#"}>Odwiedź forum społeczności</Link>
            </li>
            <li>
              <Link to={"#"}>Jak przyjmować gości odpowiedzialnie</Link>
            </li>
          </LinksList>
        </li>
        <li>
          <SectionHeader>Informacje</SectionHeader>
          <LinksList>
            <li>
              <Link to={"#"}>Wiadomości</Link>
            </li>
            <li>
              <Link to={"#"}>Poznaj nowe funkcje</Link>
            </li>
            <li>
              <Link to={"#"}>Praca</Link>
            </li>
            <li>
              <Link to={"#"}>Dla inwestorów</Link>
            </li>
          </LinksList>
        </li>
        <BottomSection>
          <p>© 2022 Airbnb, Inc.</p>
          <InlineLinks>
            <Link to={"#"}>Prywatność</Link>
            <span>·</span>
            <Link to={"#"}>Warunki</Link>
            <span>·</span>
            <Link to={"#"}>Mapa witryny</Link>
            <span>·</span>
            <Link to={"#"}>Informacje o firmie</Link>
          </InlineLinks>
        </BottomSection>
      </FooterSections>
    </FooterContainer>
  );
};

export default Footer;
