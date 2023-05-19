import styled from "styled-components";

const StyledShowCaseSection = styled.section`
  ul {
    display: flex;
    gap: 0.5rem;
    overflow-x: scroll;
  }
  @media (min-width: 1024px) {
    width: 80%;
    overflow: visible;
    ul {
      overflow: visible;
      ::-webkit-scrollbar {
        display: none;
      }
      width: 100%;
      flex-flow: row wrap;
      gap: 1.3rem;
    }
  }
`;

export default StyledShowCaseSection;
