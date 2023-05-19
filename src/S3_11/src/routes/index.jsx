import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";
import { TechProvider } from "../providers/TechProvider";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <TechProvider>
            <DashboardPage />
          </TechProvider>
        }
      />
    </Routes>
  );
};
