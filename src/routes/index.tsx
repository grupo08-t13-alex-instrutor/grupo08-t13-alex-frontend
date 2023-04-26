import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdDetailsPage from "../pages/AdDetailsPage";
import { Homepage } from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProfilePageAdmin from "../pages/ProfilePageAdmin";
import ProfilePageUser from "../pages/ProfilePageUser";
import { useContext } from "react";
import { User } from "../context";

function ProtecaoRotas() {

  const { infoUserLogin } = useContext(User)

  const token = localStorage.getItem("token");

  if (token && !infoUserLogin?.buyer) return <Outlet />

  return <Navigate to="/homepage" />;
}


export const RoutesMain = () => (
  <Routes>
    <Route path="/ad" element={<AdDetailsPage />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/" element={<ProtecaoRotas />}>
      <Route path="profile/admin" element={<ProfilePageAdmin />} />
    </Route>
    <Route path="/profile/user" element={<ProfilePageUser />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/homepage" />} />
  </Routes >
);
