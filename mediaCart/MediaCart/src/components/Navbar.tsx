import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { DeliverySelector } from "./AppWidgets/DeliverySelector";
import { SearchBar } from "./AppWidgets/SearchBar";
import LoginIcon from "../assets/LoginIcon.png";
import Carticon from "../assets/Carticon.png";
import PlusIcon from "../assets/PlusIcon.png";
import dots from "../assets/dots.png";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white backdrop-blur">
      <div className="mx-auto flex w-full items-center gap-3 pl-12 pr-6 py-3">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-zinc-900"
        >
          <img
            src={logo}
            alt="mediaCart"
            className="h-8 w-46 rounded-lg object-contain"
          />
        </Link>
        <div className="h-10 w-0.5 bg-gray-400  flex items"></div>
        {/* Location */}
        <div className="hidden sm:flex flex-col items-start ">
          <DeliverySelector />
        </div>

        {/* Search */}
        <div className="flex flex-1 items-center gap-2">
          <SearchBar />
        </div>

        <nav className="flex items-center justify-between gap-2">
          <NavLink to="/login">
            <img src={LoginIcon} className="w-6" />
            <span className="hidden sm:inline text-black">Login</span>
          </NavLink>

          <NavLink to="/cart" aria-label="Cart">
            <img src={Carticon} className="w-6" />
            <span className="hidden sm:inline text-black">Cart</span>
          </NavLink>

          <NavLink to="/seller">
            <img src={PlusIcon} className="w-8 " />
            <span className="hidden sm:inline px-2 text-black">
              {" "}
              Become a Seller
            </span>
          </NavLink>
          <NavLink to={"/"}>
            <img src={dots} className="w-4" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
