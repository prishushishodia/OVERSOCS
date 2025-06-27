import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="bg-[#051023] py-12 text-white font-heading uppercase">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl text-gray-300 font-extrabold mb-2">Oversocs®</h2>
          <p className="text-gray-500 mb-4">Step into bold comfort with premium socks.</p>
          <p className="text-gray-500 underline hover:text-red-500 cursor-pointer transition">
            help@oversocs.com
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-gray-300">Shop</h3>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li><a href="#" className="hover:text-red-500 transition">Men</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Women</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Kids</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Limited Edition</a></li>
          </ul>
        </div>

        {/* About & Social */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-gray-300">About</h3>
          <ul className="flex flex-col gap-2 text-gray-400 mb-6">
            <li><a href="#" className="hover:text-red-500 transition">Our Story</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Careers</a></li>
          </ul>

          <h3 className="text-lg font-bold mb-3 text-gray-500">Social</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-gray-300">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Want bold updates & product news? Join our list.
          </p>
          <div className="flex items-center bg-black border border-gray-500 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 bg-black text-white outline-none placeholder-gray-500"
            />
            <button className="text-black bg-gray-300 px-4 py-2 hover:bg-red-600 transition">
              →
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            By subscribing, you agree to our privacy policy.
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10  pt-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Oversocs. All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-red-500 transition">Terms of Use</a>
          <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
