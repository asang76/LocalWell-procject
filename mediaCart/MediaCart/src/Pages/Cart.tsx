import { Link } from "react-router-dom";

export default function Cart() {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <Link to={"/OrderPlacedSucessful"}>
        <h1 className="text-2xl font-bold">Cart</h1>
        <p className="mt-2 text-zinc-600">Place your Order</p>
        </Link>
      </div>
    );
  }