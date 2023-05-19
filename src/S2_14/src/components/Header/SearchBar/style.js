import styled from "styled-components";

const StyledContainer = styled.form`
  border: 0.125rem solid var(--grey-20);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.5rem;
  width: 95%;
  background-color: white;
  position: relative;
  height: 3.5rem;
  input {
    width: 60%;
  }
  input::placeholder {
    color: var(--grey-20);
  }
  :focus-within {
    border-color: var(--grey-100);
  }
  :focus-within > input::placeholder {
    color: var(--grey-50);
  }
  button {
    position: absolute;
    top: 0.4rem;
    right: 0.5rem;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export default StyledContainer;
