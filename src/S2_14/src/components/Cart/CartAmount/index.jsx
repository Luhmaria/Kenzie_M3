import { StyledButton } from "../../../styles/StyledButton";
import { useEffect, useState } from "react";
import { StyledText } from "../../../styles/Texts";
import StyledSection from "./style";

const CartAmount = ({ cartProducts, cleanCart }) => {
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
    <StyledSection>
      <div>
        <StyledText type="bold" textColor="grey-100">
          Total
        </StyledText>
        <StyledText type="bold" textColor="grey-50">
          {`${totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}`}
        </StyledText>
      </div>
      <StyledButton size="default" backgroundColor="grey" onClick={cleanCart}>
        Remover todos
      </StyledButton>
    </StyledSection>
  );
};

export default CartAmount;
