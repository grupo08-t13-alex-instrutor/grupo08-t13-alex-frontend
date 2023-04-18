import { Navigate, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages";
import { AdDetailsPage } from "../pages/AdDetailsPage";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const RoutesMain = () => (
  <Routes>
    <Route path="/ad" element={<AdDetailsPage />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/homepage" />} />
  </Routes>
);
