import review1 from "../assets/1.jpg";
import review2 from "../assets/2.jpg";
import review3 from "../assets/3.jpg";
import review4 from "../assets/4.jpg";
import review5 from "../assets/5.jpg";

export default function ReviewsSection() {
  const reviews = [
    { id: 1, image: review1, text: "Limited Edition Sock Drops!" },
    { id: 2, image: review2, text: "Bold Graphics, Bolder Socks" },
    { id: 3, image: review3, text: "Step back in time with our Retro '80s Sock Collection!" },
    { id: 4, image: review4, text: "Comfort that brings a smile to every step!" },
    { id: 5, image: review5, text: "Socks designed for sunny days and cozy summer vibes!" },
  ];

  return (
    <>
      {/* Heading Section with Beige Background */}
      <section className="relative w-full  bg-white py-12 px-4">
        <h2 className="text-2xl md:text-4xl -translate-x-85 translate-y-5 font-Montserrat font-light uppercase text-center mb-8">
          Loved by Our Community
        </h2>
      </section>

      {/* Image Grid Section - no background override */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
        {reviews.map((review) => (
          <div key={review.id} className="relative group overflow-hidden">
            <img
              src={review.image}
              alt={review.text}
              className="w-full h-full object-cover aspect-[9/16]"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <button className="text-white bg-black/70 p-3 rounded-full hover:bg-white hover:text-black transition">
                ▶
              </button>
            </div>
            <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm leading-snug">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
