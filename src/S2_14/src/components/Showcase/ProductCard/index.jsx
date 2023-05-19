import { StyledButton } from "../../../styles/StyledButton";
import { StyledText, StyledTitle3 } from "../../../styles/Texts";
import StyledProductCard from "./style";

export const ProductCard = ({
  productImage,
  productTitle,
  productCategory,
  productPrice,
  addProduct,
  id,
}) => {
  return (
    <StyledProductCard>
      <figure>
        <img src={productImage} alt="" />
      </figure>
      <div>
        <StyledTitle3>{productTitle}</StyledTitle3>
        <StyledText type="caption" textColor="grey-50">
          {productCategory}
        </StyledText>
        <StyledText type="bold" textColor="brand">
          {`${productPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}`}
        </StyledText>
        <StyledButton
          size="medium"
          backgroundColor="green"
          onClick={addProduct}
          id={id}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
