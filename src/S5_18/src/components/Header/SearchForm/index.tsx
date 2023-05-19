import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { FormEvent, useContext } from "react";
import { showCaseContext } from "../../../providers/ShowCaseContext";

const SearchForm = () => {
  const { searchProduct } = useContext(showCaseContext);

  return (
    <StyledSearchForm
      onSubmit={(event) => {
        const form = event.target as HTMLFormElement;
        event.preventDefault();
        searchProduct(form.searchInfo.value);
        form.searchInfo.value = "";
      }}
    >
      <input type="text" placeholder="Digitar pesquisa" name="searchInfo" />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
