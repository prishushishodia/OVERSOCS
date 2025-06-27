import noBG from "../assets/contactBG.jpg";

export default function ContactForm() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Fullscreen Background Image Fixed */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${noBG})` }}
      ></div>

      {/* Optional Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black opacity-40"></div>

      {/* Content Stacking Above Background */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20 px-40">
        
        <form className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-2xl space-y-8">
          
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-heading uppercase text-gray-300 font-extrabold text-center tracking-wide drop-shadow-sm">
            Contact Us
          </h2>

          <div>
            <label className="block text-xs font-bold uppercase mb-2 tracking-wider text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-700 bg-black text-white rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:uppercase placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-2 tracking-wider text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-700 bg-black text-white rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:uppercase placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-2 tracking-wider text-white">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-700 bg-black text-white rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:uppercase placeholder:text-gray-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-500 text-white uppercase px-8 py-4 rounded-xl font-bold w-full hover:bg-red-700 transition-all duration-300 tracking-wide shadow-md"
          >
            Send Message
          </button>
          
        </form>

      </div>
    </section>
  );
}
