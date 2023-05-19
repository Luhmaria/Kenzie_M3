import { useContext } from "react";
import { showCaseContext } from "../../providers/ShowCaseContext";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";

const ProductList = () => {
  const { productsDisplayed } = useContext(showCaseContext);
  return (
    <StyledProductList>
      {productsDisplayed.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
