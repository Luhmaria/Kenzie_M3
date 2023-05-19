import ProductCard from "./ProductCard";
import SearchHeadline from "./SearchHeadline";
import StyledShowCaseSection from "./style";

const Showcase = ({
  products,
  isSearch,
  searchValue,
  addProduct,
  clearSearch,
}) => {
  return (
    <StyledShowCaseSection>
      {isSearch && (
        <SearchHeadline inputValue={searchValue} clearSearch={clearSearch} />
      )}
      <ul>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            addProduct={addProduct}
            productImage={product.img}
            productTitle={product.name}
            productCategory={product.category}
            productPrice={product.price}
            id={product.id}
          ></ProductCard>
        ))}
      </ul>
    </StyledShowCaseSection>
  );
};
export default Showcase;
