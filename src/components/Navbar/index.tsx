import React, { useEffect, useState } from "react";
import { DefaultPaddingContainer } from "../globalStyles";
import {
  BottomSpacer,
  DesktopMenu,
  LogoContainer,
  NavbarContainer,
  NavbarSection,
  SearchbarContainer,
} from "./styles";
import { BiSearch } from "react-icons/bi";
import { ReactComponent as ProfileIcon } from "../../assets/profileIcon.svg";
import ExtendedSearchbar from "../ExtendedSearchbar";
import { ReactComponent as AirbnbLogo } from "../../assets/airbnbLogo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setIsScrolled((isScrolled) => {
        if (scrollY > 0 && !isScrolled) return true;
        else if (scrollY < 1 && isScrolled) return false;

        return isScrolled;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarContainer isScrolled={isScrolled}>
        <DefaultPaddingContainer>
          <SearchbarContainer>
            <button>
              <BiSearch size={"1.3em"} /> Dokąd chcesz pojechać?
            </button>
          </SearchbarContainer>

          <DesktopMenu>
            <LogoContainer>
              <AirbnbLogo />
              <p>airbnb</p>
            </LogoContainer>
            <ExtendedSearchbar isExtended={!isScrolled} />
            <NavbarSection>
              <p>Zostań gospodarzem</p>
              <ProfileIcon />
            </NavbarSection>
          </DesktopMenu>
        </DefaultPaddingContainer>
      </NavbarContainer>
      <BottomSpacer />
    </>
  );
};

export default Navbar;
