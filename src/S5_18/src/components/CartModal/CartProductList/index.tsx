import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../../providers/CartContext";

const CartProductList = () => {
  const { cartProducts, clearCart } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const sum = () => {
    const productsPrice = cartProducts.map((product) => product.price);
    const sum = productsPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    setTotalPrice(sum);
  };

  useEffect(() => {
    sum();
  }, [cartProducts]);

  return (
    <StyledCartProductList>
      <ul>
        {cartProducts.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">
          {totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={() => clearCart()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};
export default CartProductList;
