import styled from "styled-components";

const StyledSearchHeader = styled.header`
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-bottom: 2rem;
  position: relative;
  button {
    display: none;
  }
  .searchTitle {
    color: var(--grey-50);
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 40px;
    gap: 0.5rem;
    button {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

export default StyledSearchHeader;
