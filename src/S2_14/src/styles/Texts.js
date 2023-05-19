import styled from "styled-components";
import { css } from "styled-components";

export const StyledTitle1 = styled.h1`
  font-weight: 700;
  font-size: 1.625rem;
`;
export const StyledTitle2 = styled.h2`
  font-weight: 700;
  font-size: 1.375rem;
`;
export const StyledTitle3 = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
`;
export const StyledTitle4 = styled.h4`
  font-weight: 700;
  font-size: 0.875rem;
`;
export const StyledText = styled.p`
  ${({ type }) => {
    switch (type) {
      case "headline":
        return css`
          font-weight: 400;
          font-size: 1rem;
        `;
      case "regular":
        return css`
          font-weight: 400;
          font-size: 0.875rem;
        `;
      case "bold":
        return css`
          font-weight: 600;
          font-size: 0.875rem;
        `;
      case "caption":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;
    }
  }}
  ${({ textColor }) => {
    switch (textColor) {
      case "grey-100":
        return css`
          color: var(--grey-100);
        `;
      case "grey-50":
        return css`
          color: var(--grey-50);
        `;
      case "grey-0":
        return css`
          color: var(--grey-0);
        `;
      case "brand":
        return css`
          color: var(--color-primary);
        `;
    }
  }}
`;
