import styled from "styled-components";

const StyledProductCard = styled.li`
  border: 2px solid var(--grey-20);
  width: 17rem;
  height: 21.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 5px;
  figure {
    background-color: var(--grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45%;
    width: 100%;
  }
  figure > img {
    height: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    height: 55%;
  }
  :hover {
    transform: scale(1.1);
    transition: 1.2s;
  }
`;

export default StyledProductCard;
