import styled from "styled-components";

const StyledFormModal = styled.form.attrs({
  className: "modal",
})`
  padding-top: 0;
  flex-direction: column;
  border-radius: 0 0 0.25rem;
  position: relative;
  legend {
    margin-inline: 0;
    background-color: var(--grey2);
    width: 100%;
    padding-top: 2rem;
    border-radius: 0.25rem 0.25rem 0 0;
    display: flex;
    align-items: center;
    height: 4rem;
    line-height: 4rem;
    padding: 0 1.6rem;
  }
  div {
    display: flex;
    width: 100%;
    gap: 1.5rem;
  }
  input: disabled {
    cursor: not-allowed;
  }
`;

export default StyledFormModal;
