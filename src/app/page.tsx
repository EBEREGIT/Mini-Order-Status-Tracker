import Orders from "@/components/order";

export default function Home() {
  return (
    <div className="w-screen">
      <h2 className="text-center text-3xl py-5 font-bold sticky bg-white z-[1]">
        Cybership Customer Orders
      </h2>
      <Orders />
    </div>
  );
}
