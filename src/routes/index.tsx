import { Navigate, Route, Routes } from "react-router-dom";
import AdDetailsPage from "../pages/AdDetailsPage";
import { Homepage } from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/ad" element={<AdDetailsPage />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/homepage" />} />
  </Routes>
);
