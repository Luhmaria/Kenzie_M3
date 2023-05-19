import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--grey-0);
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header__container {
    margin-inline: auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 75%;
  }
  @media (min-width: 1024px) {
    height: 4.5rem;
    .header__container {
      width: 90%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
export default StyledHeader;
