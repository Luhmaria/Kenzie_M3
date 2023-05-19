import { Toaster } from "react-hot-toast";
import { AuthenticationProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle, ResetStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            background: " #343B41",
            color: "#F8F9FA",
          },
        }}
      />
      <ResetStyle />
      <GlobalStyle />
      <AuthenticationProvider>
        <RoutesMain />
      </AuthenticationProvider>
    </>
  );
};

export default App;
