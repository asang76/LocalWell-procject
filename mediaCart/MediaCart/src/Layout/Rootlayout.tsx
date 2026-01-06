import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar />
      {/* Padding-top to avoid content hidden under fixed navbar */}
      <main className="mx-auto w-full px-4 pt-20 pb-10">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}