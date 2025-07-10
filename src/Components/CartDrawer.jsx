// components/CartDrawer.jsx
import { useEffect } from "react";

export default function CartDrawer({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
    <div
  onClick={onClose}
  className={`fixed inset-0 backdrop-blur-sm bg-black/20 z-40 transition-opacity duration-300 ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
/>



      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full max-w-md bg-[#F5F5DC] h-full z-50 transform transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold tracking-widest">CART</h2>
          <button onClick={onClose} className="text-xl font-bold">×</button>
        </div>

        {/* Empty Cart UI */}
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <svg className="w-16 h-16 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12M7 13l-4-8m16 16a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z" />
            <circle cx="16" cy="8" r="1.2" fill="currentColor" />
          </svg>
          <p className="text-gray-600">Your cart is currently empty.</p>
          <button onClick={onClose} className="bg-black text-white px-6 py-2 rounded">Start Shopping</button>
        </div>
      </div>
    </>
  );
}
