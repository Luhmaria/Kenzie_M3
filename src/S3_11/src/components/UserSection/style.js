import styled from "styled-components";

const StyledSection = styled.section`
  div {
    width: 90%;
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    justify-content: space-between;
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
    }
  }
  border-block: 0.0938rem solid var(--grey2);
  padding-block: 2rem;
`;

export default StyledSection;
