import { useParams } from "react-router-dom";
import Button from "../Components/Button";

export default function ProductDetail() {
  const { id } = useParams(); // Use this ID to fetch product later

  // Dummy single product data
  const product = {
    name: "Classic Red Socks",
    price: "399",
    description: "Premium cotton red crew socks with a bold vibe.",
    image: "/assets/socks1.jpg",
  };

  return (
    <div className="bg-cream py-20 px-4 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img src={product.image} alt={product.name} className="w-full object-cover rounded-xl shadow-card" />
        <div>
          <h1 className="text-4xl font-heading uppercase text-brand font-extrabold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-body font-semibold mb-6">₹{product.price}</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
