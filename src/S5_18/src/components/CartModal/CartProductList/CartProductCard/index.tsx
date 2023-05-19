import { MdDelete } from "react-icons/md";
import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { cartContext, iProduct } from "../../../../providers/CartContext";
import { useContext } from "react";

interface iCartProductCardProps {
  product: iProduct;
}

const CartProductCard = ({ product }: iCartProductCardProps) => {
  const { removeProduct } = useContext(cartContext);
  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <button
          type="button"
          aria-label="Remover"
          onClick={() => removeProduct(product.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
