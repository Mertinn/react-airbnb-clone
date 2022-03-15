import React, { useEffect, useState } from "react";
import { DefaultPaddingContainer } from "../globalStyles";
import { NavbarContainer, SearchbarContainer } from "./styles";
import { BiSearch } from "react-icons/bi";

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
      </DefaultPaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
