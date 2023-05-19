import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 90%;
  margin-inline: auto;
  @media (min-width: 1024px) {
    max-width: 1200px;
    flex-direction: row;
    overflow: visible;
    margin-bottom: 2rem;
  }
`;

export default StyledMain;
