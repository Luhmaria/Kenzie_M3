import styled from "styled-components";

const StyledSection = styled.section`
  border-top: 0.125rem solid var(--grey-20);
  background-color: pink;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.3rem 1rem;
  background-color: var(--grey-0);
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export default StyledSection;
