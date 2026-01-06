import dropdownArrow from "../../assets/dropdownArrow.png"; 

export function DeliverySelector() {
  return (
    <div className="hidden sm:flex flex-col mt-1">
      <span className="text-md font-medium text-[#666666] pl-3 -mb-1">Delivery to</span>

      <div className="relative">
        <select
          defaultValue="bengaluru"
          aria-label="Select location"
          className="
            h-9 w-[170px]
            rounded-lg 
          bg-white
            px-3 
            text-sm
            outline-none
            appearance-none
          "
        >
          <option value="delhi" style={optStyle}>Bengaluru 442401</option>
          <option value="nagpur" style={optStyle}>Nagpur 442401</option>
          <option value="hyderabad" style={optStyle}>Hyderabad 442401</option>
          <option value="mumbai" style={optStyle}>Mumbai 442401</option>
          <option value="pune" style={optStyle}>Pune 442401</option>
        </select>

        {/* Custom arrow */}
        <img
          src={dropdownArrow}
          alt=""
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-80"
        />
      </div>
    </div>
  );
}

const optStyle: React.CSSProperties = {
  backgroundColor: "#111111",
  color: "#ffffff",
  fontSize: "14px",
};
