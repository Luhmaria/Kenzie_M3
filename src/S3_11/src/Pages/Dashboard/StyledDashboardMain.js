import styled from "styled-components";

const StyledDashboardMain = styled.main`
  width: 90%;
  margin-inline: auto;
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  section {
    width: 100%;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    padding-block: 1.5rem;
  }
  ul {
    background-color: var(--grey3);
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    @media (min-width: 1024px) {
      padding: 1.5rem;
    }
    li {
      min-height: 49px;
      width: 100%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.25rem;
      padding-inline: 1rem;
      background-color: var(--grey4);
      :hover {
        background-color: var(--grey2);
        transition: 0.4s;
      }
      @media (min-width: 1024px) {
        max-height: 49px;
        padding-inline: 1.5rem;
      }
    }
  }
`;

export default StyledDashboardMain;
