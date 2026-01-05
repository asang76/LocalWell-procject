import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { DeliverySelector } from "./AppWidgets/DeliverySelector";
import { SearchBar } from "./AppWidgets/SearchBar";
import LoginIcon from "../assets/LoginIcon.png";
import Carticon from "../assets/Carticon.png";
import PlusIcon from "../assets/PlusIcon.png";
import dots from "../assets/dots.png"


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
         
          <NavLink
            to="/login"
            className={({ isActive }) =>
              [
                "inline-flex h-10 items-center text-lg font-semibold pl-6",
                isActive
                  ? " bg-zinc-900 text-black hover:bg-blue-800"
                  : "bg-white text-zinc-900 hover:bg-zinc-50",
              ].join(" ")
            }
          >
             <img src={LoginIcon} className="w-6" />
              <span className="hidden sm:inline text-black">Login</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              [
                "inline-flex h-10 items-center gap-2  px-3 text-lg font-semibold",
                isActive ? " text-white" : " hover:bg-zinc-50",
              ].join(" ")
            }
            aria-label="Cart"
          >
            
            <img src={Carticon} className="w-6" />
            <span className="hidden sm:inline text-black">Cart</span>
          </NavLink>
         
         
          <NavLink
            to="/seller"
            className={({ isActive }) =>
              [
                "hidden md:inline-flex h-10 items-center  px-2 text-lg font-semibold",
                isActive ? " text-white" : " hover:bg-zinc-50",
              ].join(" ")
            }
          >
             <img src={PlusIcon} className="w-8 " />
            <span className="hidden sm:inline px-2 text-black"> Become a Seller</span>
          </NavLink>
            <NavLink to={"/"}>
                <img src={dots} className="w-4"/>
            </NavLink>
         
        </nav>
      </div>
    </header>
  );
}
