import styled from "styled-components";

const StyledCartList = styled.li`
  width: 100%;
  border: 2px solid transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  position: relative;
  :hover {
    border-color: var(--color-primary);
  }
  margin-bottom: 0.5rem;
  figure {
    height: 75%;
    width: 25%;
    background-color: var(--grey-20);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  figure > img {
    height: 95%;
  }
  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }
  div > button {
    position: absolute;
    top: 1.5rem;
    right: 0;
  }
`;

export default StyledCartList;
