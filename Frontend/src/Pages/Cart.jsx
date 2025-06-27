import bgImage from "../assets/NoBG.png";

export default function Cart() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-32 px-4 flex flex-col items-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[clamp(2rem,5vw,4rem)] font-bebas font-extrabold uppercase tracking-wide text-white mb-10">
        Your Cart
      </h1>

      <div className="bg-black border border-red-500 shadow-lg p-8 rounded-2xl max-w-xl w-full text-center">
        <p className="text-lg text-gray-400 mb-4">No items added yet.</p>
        
        <button
          className="mt-4 bg-gray-500 text-white uppercase px-6 py-3 rounded-xl font-bold cursor-not-allowed hover:bg-gray-600 transition"
          disabled
        >
          Checkout (Coming Soon)
        </button>
      </div>
    </div>
  );
}
