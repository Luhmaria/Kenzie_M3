import { StyledButton } from "../../../styles/StyledButton";
import { StyledTitle1 } from "../../../styles/Texts";
import StyledSearchHeader from "./style";

const SearchHeadline = ({ inputValue, clearSearch }) => {
  return (
    <StyledSearchHeader>
      <StyledTitle1>Resultados para:</StyledTitle1>
      <StyledTitle1 className="searchTitle">{inputValue}</StyledTitle1>
      <StyledButton size="medium" backgroundColor="green" onClick={clearSearch}>
        Limpar busca
      </StyledButton>
    </StyledSearchHeader>
  );
};

export default SearchHeadline;
