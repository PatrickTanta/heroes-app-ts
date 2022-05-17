import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "../components/Login/LoginScreen";
import NavBar from "../components/ui/NavBar";

import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginScreen />} />

        <Route path="/*" element={<DashboardRoutes />} />

      </Routes>
    </BrowserRouter>
  );
};
