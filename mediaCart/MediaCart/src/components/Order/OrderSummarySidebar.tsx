import React from "react";
import discountBg from "../../assets/discountBg.png"
type Tone = "normal" | "good";

export type OrderSummarySidebarProps = {
  deliveringTo: {
    title: string;
    addressLine1: string;
    addressLine2: string;
    eta: string;
  };
  items: Array<{
    name: string;
    subtitle: string;
    qtyText?: string;
    imageUrl?: string;
  }>;
  pricing: Array<{ label: string; value: string; tone?: Tone }>;
  amountPaid: string;
  savedText: string;
  payment: {
    methodTitle: string;
    fromLine: string;
    txnLine: string;
    dateLine: string;
  };
};

export default function OrderSummarySidebar(props: OrderSummarySidebarProps) {
  const { deliveringTo, items, pricing, amountPaid, savedText, payment } = props;
  const [openUp, setOpenUp] = React.useState(false);

  return (
    <aside className="rounded-2xl  bg-white p-5  ">
      {/* Delivering to */}
      <SectionTitle>Delivering to</SectionTitle>
      <div className="mt-3">
        <p className="text-base font-semibold text-zinc-900">{deliveringTo.title}</p>
        <p className="mt-1 text-sm text-zinc-600">{deliveringTo.addressLine1}</p>
        <p className="text-sm text-zinc-600">{deliveringTo.addressLine2}</p>
        <p className="mt-3 text-sm font-semibold text-[#E0652B]">{deliveringTo.eta}</p>
      </div>

      <Divider />

      {/* Order Summary */}
      <SectionTitle>Order Summary</SectionTitle>

      <div className="mt-3">
        <p className="text-sm font-semibold text-zinc-700">Items</p>

        <div className="mt-3 flex items-start gap-3">
          <div className="h-14 w-14 overflow-hidden rounded-lg border bg-zinc-50">
            {items[0]?.imageUrl ? (
              // If you have local item images, move them to /public and use "/img.png"
              <img src={items[0].imageUrl} alt={items[0].name} className="h-full w-full object-contain" />
            ) : (
              <div className="grid h-full w-full place-items-center text-xs text-zinc-500">IMG</div>
            )}
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-zinc-900">{items[0]?.name}</p>
            <p className="text-sm text-zinc-600">{items[0]?.subtitle}</p>
          </div>
        </div>

        {items[0]?.qtyText ? (
          <p className="mt-3 text-sm text-zinc-600">{items[0].qtyText}</p>
        ) : null}
      </div>

      <Divider />

      {/* Pricing rows */}
      <div className="space-y-2">
        {pricing.map((row) => (
          <Row key={row.label} label={row.label} value={row.value} tone={row.tone} />
        ))}
      </div>

      <Divider />

      {/* Amount paid */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-zinc-700">Amount paid</p>
        <p className="text-lg font-extrabold text-zinc-900">{amountPaid}</p>
      </div>

      <div className="mt-6">
  {/* Accordion content ABOVE the buttons */}
  <div
    className={[
      "overflow-hidden transition-all duration-[600ms] ease-in-out",
      openUp ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
    ].join(" ")}
  >
    {/* inner padding goes here so it doesn't affect max-h when closed */}
    <div className="pb-4">
      <div className="mt-4">
        <SavingsBanner text={savedText} />
      </div>

      <p className="mt-3 text-xs leading-5 text-zinc-500">
        *Prices shown on the page are indicative, inclusive of all taxes and may slightly vary once the final bill…
        <span className="cursor-pointer font-semibold text-purple-700"> See more</span>
      </p>

      <Divider />

      <SectionTitle>{payment.methodTitle}</SectionTitle>
      <div className="mt-3 space-y-2 text-sm text-zinc-800">
        <p>{payment.fromLine}</p>
        <p className="text-zinc-600">{payment.txnLine}</p>
        <p className="text-zinc-600">{payment.dateLine}</p>
      </div>

      <Divider />
    </div>
  </div>

  {/* Buttons (stays at bottom) */}
  <div className="flex gap-3">
    <button
      onClick={() => setOpenUp((v) => !v)}
      className="h-11 flex-1 rounded-xl  bg-white text-sm font-semibold text-black border border-black"
      aria-expanded={openUp}
    >
      {openUp ? "Hide details" : "Explore more"}
    </button>

    <button className="h-11 flex-1 rounded-xl bg-gradient-to-r from-[#6E0B78] to-[#B311C5] text-sm font-semibold text-white hover:opacity-95">
      Track Order
    </button>
  </div>
</div>
    </aside>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-base font-extrabold text-zinc-900">{children}</h2>;
}

function Divider() {
  return <div className="my-5 h-px w-full bg-zinc-200" />;
}

function Row({ label, value, tone = "normal" }: { label: string; value: string; tone?: Tone }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-zinc-600">{label}</span>
      <span className={tone === "good" ? "font-semibold text-[#108858]" : "font-semibold text-zinc-800"}>
        {value}
      </span>
    </div>
  );
}

function SavingsBanner({ text }: { text: string }) {
    return (
      <div className="relative overflow-hidden rounded-xl">
        {/* Background image */}
        <img
          src={discountBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
  
        {/* Dark overlay if needed for readability */}
        <div className="absolute inset-0 bg-black/10" />
  
        {/* Text on top */}
        <div className="relative z-10 px-4 py-3 text-sm font-semibold text-white">
          {text}
        </div>
      </div>
    );
  }
