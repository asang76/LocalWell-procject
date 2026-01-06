import React from "react";
import OrderSummarySidebar, {
  type OrderSummarySidebarProps,
} from "../components/Order/OrderSummarySidebar";
import orderSummaryMock from "../Data/Data.json";
import PrescriptionIcon from "../assets/prescriptiondemo.png";
import ConfettiBurst from "../components/AppWidgets/ConfettiBurst";
import Tick from "../assets/sucessfullTick.png"

const OrderPlacedSuccessful: React.FC = () => {
  const data = orderSummaryMock as OrderSummarySidebarProps;

  return (
    <div className="min-h-[calc(100vh-80px)]">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
        {/* LEFT (3/4) */}
        <section className="lg:col-span-9 overflow-hidden border-zinc-200 shadow-sm">
  <div className="bg-gradient-to-b from-[#037253] via-[#18A56C] to-[#05CD7C] px-6 py-12 text-white sm:px-10">
    <div className="relative flex flex-col items-center">
      {/* Confetti BEHIND tick */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ConfettiBurst durationMs={2600} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center">
        <img src={Tick} className="w-44" alt="Success" />
        <h3 className="text-xl mt-4">Great Job</h3>
        <h1 className="mt-4 text-center text-2xl">
          Your Order No. 122334455 is Placed
        </h1>

        <p className="mt-3 max-w-2xl text-center text-sm font-medium text-white/90 sm:text-base">
          We will notify you once this order gets confirmed and send your updates thereafter
        </p>

        <div className="mt-10 flex w-full flex-col items-center rounded-2xl bg-white p-6 text-zinc-900 shadow-sm">
          <img src={PrescriptionIcon} className="w-22" alt="Prescription" />
          <p className="mt-4 mb-3 text-md font-semibold text-black text-center">
            We're reviewing your prescription now to confirm your order
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* RIGHT (1/4) */}
        <aside className="lg:col-span-3">
          <OrderSummarySidebar {...data} />
        </aside>
      </div>
    </div>
  );
};

export default OrderPlacedSuccessful;
