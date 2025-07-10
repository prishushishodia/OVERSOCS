import React from "react";
import alterbg from "../assets/mnop.jpg";
import CircularText from "../ReactBits/CircularText"; // Make sure this path is correct

export default function Compo() {
  return (
    <section
    className="w-full z-10 h-[60vh] bg-cover bg-center flex flex-col items-center justify-center relative"

      style={{ backgroundImage: `url(${alterbg})` }}
    >
      

      {/* Circular Text Animation */}
      <div className="absolute translate-y-0 z-10">
        <CircularText
          text="OVERSOCS*STEP*BOLDLY*"
          onHover="speedUp"
          spinDuration={15}
          className="text-white"

        />
      </div>
    </section>
  );
}
