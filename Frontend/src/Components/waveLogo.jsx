export default function WaveLogo() {
  return (
    <svg viewBox="0 0 6000 200" className="w-full h-28">
      <path
        id="wavePath"
        d="M 0 100 Q 600 -50 1200 100 T 2400 100 T 3600 100 T 4800 100 T 6000 100"
        fill="transparent"
      />

      <text
        fontSize="72"  // Increased from 52 to 72
        fill="white"
        fontFamily="Bebas Neue"
        letterSpacing="8"
      >
        <textPath href="#wavePath" startOffset="0%">
          {Array(90).fill(" OVERSOCKS ").join(" ")}
        </textPath>
      </text>
    </svg>
  );
}
