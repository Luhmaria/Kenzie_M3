import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CartProvider } from "../../providers/CartContext";
import { userContext } from "../../providers/UserContext";

const ProtectedRoutes = () => {
  const { user } = useContext(userContext);

  return user ? (
    <CartProvider>
      <Outlet />
    </CartProvider>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
