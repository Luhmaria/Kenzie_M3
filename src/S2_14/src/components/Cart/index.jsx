import { StyledText, StyledTitle3 } from "../../styles/Texts";
import CartAmount from "./CartAmount";
import CartItem from "./CartItem";
import StyledCart from "./style";

const Cart = ({ CartProducts, cleanCart, removeProduct }) => {
  return (
    <StyledCart>
      <header>Carrinho de compras</header>
      <ul>
        {CartProducts.length > 0 ? (
          CartProducts.map((product) => (
            <CartItem
              key={product.id}
              productImage={product.img}
              productTitle={product.name}
              productCategory={product.category}
              productPrice={product.price}
              id={product.id}
              removeProduct={removeProduct}
            />
          ))
        ) : (
          <div className="empty-cart">
            <StyledTitle3>Sua sacola está vazia</StyledTitle3>
            <StyledText type="regular" textColor="grey-50">
              Adicione Itens
            </StyledText>
          </div>
        )}
      </ul>
      {CartProducts.length > 0 && (
        <CartAmount cartProducts={CartProducts} cleanCart={cleanCart} />
      )}
    </StyledCart>
  );
};

export default Cart;
