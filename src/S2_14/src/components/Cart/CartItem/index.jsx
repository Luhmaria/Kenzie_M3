import { StyledButton } from "../../../styles/StyledButton";
import { StyledText, StyledTitle4 } from "../../../styles/Texts";
import StyledCartList from "./style";

const CartItem = ({
  productImage,
  productTitle,
  productCategory,
  removeProduct,
  id,
}) => {
  return (
    <StyledCartList>
      <figure>
        <img src={productImage} alt="" />
      </figure>
      <div>
        <StyledTitle4>
          {productTitle.length <= 14
            ? productTitle
            : `${productTitle.substring(0, 12)}...`}
        </StyledTitle4>
        <StyledText type="caption" textColor="grey-50">
          {productCategory}
        </StyledText>
        <StyledButton isRemoving={true} onClick={removeProduct} id={id}>
          Remover
        </StyledButton>
      </div>
    </StyledCartList>
  );
};

export default CartItem;
