import React from 'react';
import latest1 from '../assets/a.jpg';
import latest4 from '../assets/c.jpg';
import latest5 from '../assets/b.jpg';
import latest6 from '../assets/d.jpg';

const Latest = () => {
  return (
    <div className="w-full font-Montserrat  bg-white py-20 px-10 relative z-10 ">
      <h2 className="text-sm  tracking-widest text-gray-600 mb-10 text-center">
        LATEST DROP
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {[
          {
            img: latest1,
            title: 'WHITE BOX BOX T-SHIRT',
            price: 'Rs. 495',
          },
          {
            img: latest6,
            title: 'DRS PURPLE FULL SLEEVE JERSEY',
            price: 'Rs. 1,495',
          },
          {
            img: latest4,
            title: 'BLACK BOX BOX T-SHIRT',
            price: 'Rs. 999',
          },
          {
            img: latest5,
            title: 'DRS RED FULL SLEEVE JERSEY',
            price: 'Rs. 1,225',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center transform transition duration-300 hover:scale-105 animate-fade-slide"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-cover  shadow-lg"
            />
            <h3 className="mt-4 font">{item.title}</h3>
            <p className="text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

export default Latest;