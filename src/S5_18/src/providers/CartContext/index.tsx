import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { showCaseContext } from "../ShowCaseContext";

interface iCartProviderProps {
  children: React.ReactNode;
}

interface iCartContext {
  cartVisibility: boolean;
  setcartVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  addProduct: (productID: number) => void;
  cartProducts: iProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  clearCart: () => void;
  removeProduct: (productID: number) => void;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const cartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const { productList } = useContext(showCaseContext);
  const [cartVisibility, setcartVisibility] = useState(false);
  const [cartProducts, setCartProducts] = useState<iProduct[]>([]);

  const clearCart = () => {
    toast.success("Carrinho esvaziado com sucesso");
    setCartProducts([]);
  };

  const addProduct = (productID: number) => {
    if (cartProducts.some((product) => product.id == productID)) {
      toast.warning("Produto já consta no carrinho");
    } else {
      toast.success("Produto adicionado com sucesso");
      const newProduct: iProduct | undefined = productList.find(
        (product) => product.id == productID
      );
      if (newProduct) {
        setCartProducts([...cartProducts, newProduct]);
      }
    }
  };

  const removeProduct = (productID: number) => {
    toast.success("Produto removido com sucesso");
    const updatedCart = [...cartProducts].filter(
      (product) => product.id != productID
    );
    setCartProducts(updatedCart);
  };

  return (
    <cartContext.Provider
      value={{
        cartVisibility,
        setcartVisibility,
        addProduct,
        cartProducts,
        setCartProducts,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
