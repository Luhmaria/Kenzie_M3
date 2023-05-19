import { useState, useEffect } from "react";
import { ResetStyle, GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import api from "./services/api";
import Showcase from "./components/Showcase";
import StyledMain from "./styles/StyledMain";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [showCaseProducts, setShowCaseProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const list = await api.get(`products`);
        setProductList(list.data);
        setShowCaseProducts(list.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);

  const [cartProducts, setCartProducts] = useState([]);

  const clearCart = () => {
    toast.success("Carrinho esvaziado com sucesso");
    setCartProducts([]);
  };

  const addProduct = (productID) => {
    if (cartProducts.some((product) => product.id == productID)) {
      toast.warning("Produto já consta no carrinho");
    } else {
      toast.success("Produto adicionado com sucesso");
      const newProduct = productList.find((product) => product.id == productID);
      setCartProducts([...cartProducts, newProduct]);
    }
  };

  const removeProduct = (productID) => {
    toast.success("Produto removido com sucesso");
    const updatedCart = [...cartProducts].filter(
      (product) => product.id != productID
    );
    setCartProducts(updatedCart);
  };

  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchProduct = (searchContent) => {
    const normalizedSearch = searchContent
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const found = productList.filter(
      (product) =>
        product.category
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(normalizedSearch) ||
        product.name
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(normalizedSearch)
    );
    if (found.length > 0) {
      setShowCaseProducts(found);
      setSearch(true);
      setSearchValue(searchContent);
    } else {
      toast.error("Nenhum item encontrado");
    }
  };

  const clearSearch = () => {
    setShowCaseProducts(productList);
    setSearch(false);
    setSearchValue("");
  };

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Header searchProduct={searchProduct} />
      <ToastContainer position="top-left" />
      <StyledMain>
        <Showcase
          addProduct={(event) => addProduct(event.target.id)}
          products={showCaseProducts}
          isSearch={search}
          searchValue={searchValue}
          clearSearch={clearSearch}
        />
        <Cart
          CartProducts={cartProducts}
          cleanCart={clearCart}
          removeProduct={(event) => removeProduct(event.target.id)}
        />
      </StyledMain>
    </>
  );
}

export default App;
