import styled from "styled-components";
import { css } from "styled-components";

const StyledHeader = styled.header`
  padding-block: 1rem;
  ${({ styleType, children }) => {
    switch (styleType) {
      case "centered":
        if (children.props.children.at(1) == undefined) {
          return css`
            div {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding-bottom: 1rem;
            }
          `;
        } else {
          return css`
            div {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `;
        }

      case "fullPage":
        return css`
          div {
            width: 90%;
            max-width: 1200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-inline: auto;
          }
        `;
    }
  }}
`;

export default StyledHeader;
