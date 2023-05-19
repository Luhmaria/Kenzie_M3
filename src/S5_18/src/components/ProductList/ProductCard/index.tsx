import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { cartContext, iProduct } from "../../../providers/CartContext";
import { useContext } from "react";

interface iProductCardProps {
  product: iProduct;
}

const ProductCard = ({ product }: iProductCardProps) => {
  const { addProduct } = useContext(cartContext);
  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <StyledParagraph className="category">
          {product.category}
        </StyledParagraph>
        <StyledParagraph className="price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => addProduct(product.id)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
