import React from "react";
import Logo from "../../assets/images/Logo.svg";
import StyledHeader from "./style";
import SearchBar from "./SearchBar";

const Header = ({ searchProduct }) => {
  return (
    <StyledHeader>
      <div className="header__container">
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <SearchBar searchProduct={searchProduct} />
      </div>
    </StyledHeader>
  );
};

export default Header;
