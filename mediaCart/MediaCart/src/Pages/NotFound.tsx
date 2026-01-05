import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="mt-2 text-zinc-600">Page not found.</p>
      <Link to="/" className="mt-4 inline-flex rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
        Go Home
      </Link>
    </div>
  );
}