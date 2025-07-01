import { useState } from "react";
import { motion } from "framer-motion";
import wishlist from "../assets/wishlist.jpg";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the delivery time?",
      answer: "We usually deliver within 5-7 business days across India.",
    },
    {
      question: "How can I track my order?",
      answer: "Use the 'Track Your Order' option in the navigation or visit /track-order.",
    },
    {
      question: "What is your return & exchange policy?",
      answer: "You can return or exchange socks within 15 days if unworn and in original condition.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within India.",
    },
    {
      question: "How can I contact customer support?",
      answer: "Visit our 'Customer Care' page or email support@oversocs.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background Image Rotated */}
      <img
        src={wishlist}
        alt="Oversocs Background"
        className="absolute top-1/2 left-1/2 w-[150vh] h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 z-0 opacity-40 pointer-events-none"
      />

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[clamp(2rem,5vw,4rem)] font-anton font-extrabold uppercase tracking-wide mt-32 mb-10 z-10"
      >
        Help & FAQs
      </motion.h1>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl z-10 space-y-4"
      >
        {faqs.map((faq, index) => (
         <div
  key={index}
  className="bg-[#f5f5dc] border border-black rounded-2xl shadow hover:shadow-red-500/50 transition-transform overflow-hidden"
>
  <button
    onClick={() => setOpenIndex(openIndex === index ? null : index)}
    className="flex justify-between items-center w-full px-4 py-3 text-left font-bold uppercase text-lg transition 
      hover:bg-black hover:text-[#f5f5dc]"
  >
    {faq.question}
    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
  </button>

  {openIndex === index && (
    <div className="px-4 py-2 text-black/80 border-t border-black">
      {faq.answer}
    </div>
  )}
</div>

        ))}
      </motion.div>
    </div>
  );
}
