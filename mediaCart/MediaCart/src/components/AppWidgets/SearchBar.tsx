import searchIcon from "../../assets/search.png"; 

export function SearchBar() {
  return (
    <div className="flex flex-1 items-center gap-2">
      <div className="relative w-full">
        <input
          type="search"
          placeholder="Search for Medicines or Health Products"
          className="h-14 w-full rounded-xl border border-zinc-200 bg-white pl-2 pr-4 text-lg outline-none focus:border-zinc-400 "
        />
        <img
          src={searchIcon}
          alt=""
          className="pointer-events-none absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 opacity-70"
        />
      </div>
    </div>
  );
}
