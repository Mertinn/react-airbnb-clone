import React, { useEffect, useState } from "react";
import { DefaultPaddingContainer } from "../globalStyles";
import { DesktopMenu, NavbarContainer, SearchbarContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { ReactComponent as AirbnbLogo } from "../../assets/airbnbLogo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profileIcon.svg";
import ExtendedSearchbar from "../ExtendedSearchbar";

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
    <NavbarContainer isScrolled={isScrolled}>
      <DefaultPaddingContainer>
        <SearchbarContainer>
          <button>
            <BiSearch size={"1.3em"} /> Dokąd chcesz pojechać?
          </button>
        </SearchbarContainer>

        <DesktopMenu>
          <AirbnbLogo />
          <ExtendedSearchbar />
          <p>Zostań gospodarzem</p>
          <ProfileIcon />
        </DesktopMenu>
      </DefaultPaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
