import styled from "styled-components";

const StyledCart = styled.aside`
  width: 100%;
  position: sticky;
  top: 1rem;
  right: 0;
  header {
    padding-inline: 1.5rem;
    line-height: 4.0625rem;
    background-color: var(--color-primary);
    color: white;
    font-weight: 700;
    height: 4.0625rem;
    border: 0.0625rem solid transparent;
    border-radius: 5px 5px 0px 0px;
  }
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 158px;
    background-color: var(--grey-0);
  }
  ul {
    width: 100%;
    background-color: var(--grey-0);
    max-height: 18rem;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--grey-20);
    }
  }
  @media (min-width: 1024px) {
    width: 30%;
    height: 5rem;
  }
`;

export default StyledCart;
