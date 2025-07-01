import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000000] pt-20 pb-52 text-white font-heading uppercase relative overflow-hidden">

      {/* Big Translucent OVERSOCKS Text */}
      <h1 className="absolute left-0 right-0 bottom-0 translate-x-[-6%] translate-y-[20%] text-[12vw] md:text-[18vw] font-extrabold text-white/10 leading-none select-none whitespace-nowrap pointer-events-none text-center">
        OVERSOCKS
      </h1>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

        {/* Brand Info */}
        <div>
<h2 className="text-3xl font-anton hover:text-red-500 font-extrabold mb-2">
  OversocKs<sup>©</sup>
</h2>

          <p className="text-white/70 mb-4">Step into bold comfort with premium socks.</p>
          <p className="text-white underline hover:text-red-500 cursor-pointer transition">
            help@oversocks.com
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Shop</h3>
          <ul className="flex flex-col gap-2 text-white/40">
            <li><a href="#" className="hover:text-red-500 transition">Men</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Women</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Kids</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Limited Edition</a></li>
          </ul>
        </div>

        {/* About & Social */}
        <div>
          <h3 className="text-lg font-bold mb-3">About</h3>
          <ul className="flex flex-col gap-2 text-white/40 mb-6">
            <li><a href="#" className="hover:text-red-500 transition">Our Story</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Careers</a></li>
          </ul>

          <h3 className="text-lg font-bold mb-3 text-white">Social</h3>
          <div className="flex text-white/40 gap-4">
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3">Subscribe</h3>
          <p className="text-white/70 mb-4">
            Want bold updates & product news? Join our list.
          </p>
          <div className="flex items-center bg-black border border-gray-500 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 bg-[#F5F5DC] text-black outline-none placeholder-gray-500"
            />
            <button className="text-[#F5F5DC] bg-black px-4 py-2 hover:bg-red-600 transition">
              →
            </button>
          </div>
          <p className="text-white/70 text-xs mt-2">
            By subscribing, you agree to our privacy policy.
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 pt-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 relative z-10">
        <p>&copy; {new Date().getFullYear()} Oversocks. All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-red-500 transition">Terms of Use</a>
          <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
