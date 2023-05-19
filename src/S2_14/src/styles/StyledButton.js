import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 0.5rem;
  gap: 0.625rem;
  padding-inline: 1.3rem;
  font-size: 14px;
  font-weight: 600;
  transition: 0.4s;
  ${({ size }) => {
    if (size == "default") {
      return css`
        padding-block: 1.4rem;
      `;
    } else if (size == "medium") {
      return css`
        padding-block: 0.8rem;
      `;
    }
  }}
  ${({ backgroundColor }) => {
    if (backgroundColor == "green") {
      return css`
        background-color: var(--color-primary);
        color: white;
        :hover {
          background-color: var(--color-primary-50);
        }
      `;
    } else if (backgroundColor == "grey") {
      return css`
        background-color: var(--grey-20);
        color: var(--grey-50);
        :hover {
          background-color: var(--grey-50);
          color: var(--grey-20);
        }
      `;
    }
  }}
  ${({ isRemoving }) => {
    if (isRemoving) {
      return css`
        color: #bdbdbd;
        font-size: 12px;
        font-weight: 500;
        :hover {
          text-decoration: underline;
          color: var(--grey-100);
        }
      `;
    }
  }}
`;
