import styled from "styled-components";
import { css } from "styled-components";

const StyledButton = styled.button`
  ${({ backgroundColor }) => {
    if (backgroundColor == "primary") {
      return css`
        background-color: var(--color-primary);
        :hover {
          background-color: var(--color-primary-focus);
        }
      `;
    } else if (backgroundColor == "secondary") {
      return css`
        background-color: var(--grey1);
        :hover {
          background-color: var(--grey2);
        }
      `;
    }
  }}
  ${({ size }) => {
    if (size == "small") {
      return css`
        width: 3.4375rem;
        height: 2rem;
        font-size: 0.75rem;
        color: var(--grey0);
        background-color: var(--grey3);
        :hover {
          background-color: var(--grey2);
        }
      `;
    } else if (size == "50%") {
      return css`
        width: 50%;
      `;
    }
  }}
`;

export default StyledButton;
