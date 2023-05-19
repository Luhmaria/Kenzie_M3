import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

const StyledLink = styled(Link)`
  border-radius: 0.25rem;
  padding-inline: 1rem;
  text-align: center;
  line-height: 3rem;
  text-decoration: none;
  ${({ type }) => {
    if (type == "large") {
      return css`
        font-size: 1rem;
        height: 3rem;
        width: 100%;
        color: white;
        background-color: var(--grey1);
        :hover {
          background-color: var(--grey2);
        }
      `;
    } else {
      return css`
        width: 4.25rem;
        font-size: 0.75rem;
        color: var(--grey0);
        background-color: var(--grey3);
        :hover {
          background-color: var(--grey2);
        }
      `;
    }
  }}
`;

export default StyledLink;
