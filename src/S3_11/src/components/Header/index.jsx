import Logo from "../../assets/images/Logo.svg";
import StyledHeader from "./style";

const Header = ({ styleType, children }) => {
  return (
    <StyledHeader styleType={styleType}>
      <div>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        {children}
      </div>
    </StyledHeader>
  );
};

export default Header;
