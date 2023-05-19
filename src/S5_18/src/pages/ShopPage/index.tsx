import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { cartContext } from "../../providers/CartContext";

const ShopPage = () => {
  const { cartVisibility } = useContext(cartContext);

  return (
    <StyledShopPage>
      {cartVisibility ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
