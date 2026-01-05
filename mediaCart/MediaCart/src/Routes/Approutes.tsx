import { Routes, Route } from "react-router-dom";
import RootLayout from "../Layout/Rootlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Seller from "../Pages/Seller";
import Cart from "../Pages/Cart";
import NotFound from "../Pages/NotFound";
import OrderPlacedSuccessful from "../Pages/OrderPlacedSucessfull";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/OrderPlacedSucessful" element={<OrderPlacedSuccessful />} />
      </Route>
    </Routes>
  );
}
