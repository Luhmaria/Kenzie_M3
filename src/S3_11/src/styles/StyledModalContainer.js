import styled from "styled-components";

const StyledNewModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background: #12121480;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-inline: auto;
  .modal {
    position: relative;
    width: 100%;
    background: var(--grey3);
    max-height: 70vh;
    .closeButton {
      width: min-content;
      position: absolute;
      top: 0.5rem;
      right: 0.8rem;
      opacity: 0.5;
      transition: 0.4s;
      :hover {
        opacity: 1;
      }
    }
  }
`;

export default StyledNewModalContainer;
