import React from "react";
import { StyledButton } from "../../../styles/StyledButton";
import StyledContainer from "./style";

const SearchBar = ({ searchProduct }) => {
  const search = (event) => {
    const form = event.target;
    if (form.checkValidity()) {
      event.preventDefault();
      searchProduct(form.search.value);
      form.search.value = "";
    }
  };
  return (
    <StyledContainer className="searchBar" onSubmit={search}>
      <input
        name="search"
        type="text"
        placeholder="Digitar Pesquisa"
        required
      />
      <StyledButton size="medium" backgroundColor="green">
        Pesquisar
      </StyledButton>
    </StyledContainer>
  );
};

export default SearchBar;
