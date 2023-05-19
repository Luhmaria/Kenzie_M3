import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { iProduct } from "../CartContext";

interface iShowCaseProviderProps {
  children: React.ReactNode;
}

interface iShowCaseContext {
  productsDisplayed: iProduct[];
  setProductsDisplayed: React.Dispatch<React.SetStateAction<iProduct[]>>;
  searchProduct: (searchContent: string) => void;
  productList: iProduct[];
}

export const showCaseContext = createContext({} as iShowCaseContext);

export const ShowCaseProvider = ({ children }: iShowCaseProviderProps) => {
  const [productsDisplayed, setProductsDisplayed] = useState<iProduct[]>([]);
  const [productList, setProductList] = useState<iProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data: allProducts } = await api.get<iProduct[]>("products");
        setProductList(allProducts);
        setProductsDisplayed(allProducts);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  const searchProduct = (searchContent: string) => {
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
      setProductsDisplayed(found);
    } else {
      toast.error("Nenhum item encontrado");
    }
  };

  return (
    <showCaseContext.Provider
      value={{
        productsDisplayed,
        setProductsDisplayed,
        searchProduct,
        productList,
      }}
    >
      {children}
    </showCaseContext.Provider>
  );
};
