export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card bg-[#1a1a1a] rounded-2xl p-5 h-full flex flex-col items-center text-white shadow-lg hover:scale-105 transition-transform duration-300 group">
      
      <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="text-xl font-bold uppercase text-center tracking-wide">
        {name}
      </h3>
      <p className="text-red-500 font-extrabold mt-2 text-lg tracking-wide">
        {price}
      </p>
    </div>
  );
}
