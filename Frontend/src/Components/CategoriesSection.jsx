import categoryBG from "../assets/contactBG.jpg";
import manImage from "../assets/MAN.jpg";
import womanImage from "../assets/WOMAN.png";
import kidsImage from "../assets/KIDS.jpg";

const categories = [
  { id: 1, name: "MAN", image: manImage },
  { id: 2, name: "WOMAN", image: womanImage },
  { id: 3, name: "KIDS", image: kidsImage },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="py-24 px-4 text-white relative z-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${categoryBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Diagonal */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden z-30">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,0 120,0 120,0 120,130" fill="#051023" />
        </svg>
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bebas font-extrabold uppercase tracking-widest mb-4">
          Categories
        </h2>
        <div className="h-1 w-24 bg-red-500 mx-auto rounded-full"></div>
      </div>

      {/* Modular Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map(({ id, name, image }) => (
          <div
            key={id}
            className="group relative bg-[#0b182d] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/30 cursor-pointer transition-transform hover:scale-105"
            style={{ aspectRatio: "1.2 / 1" }}
          >
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold uppercase text-white group-hover:text-red-500 transition-colors">
              {name}
            </h3>
          </div>
        ))}
      </div>

      {/* Bottom Diagonal */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden z-30">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="100,100 0,100 0,0" fill="#051023" />
        </svg>
      </div>
    </section>
  );
}
