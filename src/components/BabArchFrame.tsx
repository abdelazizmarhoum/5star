import type { FC } from "react";

interface BabArchFrameProps {
  className?: string;
  borderColor?: string;
  spandrelColor?: string;
  accentColor?: string;
}

/**
 * BabArchFrame (قوس باب فاس)
 *
 * An authentic Fes Moorish Pointed Horseshoe Arch (Bab) frame designed to sit
 * directly on top of full-bleed food photos (w-full h-48 object-cover).
 *
 * Uses an SVG overlay / spandrel technique:
 * - Natural uncompressed food photo underneath.
 * - Spandrel corners filled with card background (#FBF8F1) to create the architectural doorway.
 * - Crisp 2px terracotta border (#C85A32) tracing the classic pointed Moorish arch contour.
 * - Authentic double-moulding accent line and an 8-pointed star keystone at the apex.
 */
export const BabArchFrame: FC<BabArchFrameProps> = ({
  className = "absolute inset-0 w-full h-full pointer-events-none",
  borderColor = "#C85A32",
  spandrelColor = "#FBF8F1",
  accentColor = "#D97706",
}) => {
  /*
   * Geometry (viewBox: 0 0 300 192):
   * Width: 300, Height: 192 (matches Tailwind h-48 = 12rem = 192px).
   * Apex: (150, 8) with sweeping Moorish pointed arch curves.
   * Horseshoe impost / springline: around y = 66, leaving 126px+ of vertical open space.
   * Non-scaling strokes ensure borders remain exactly 2px regardless of screen resolution.
   */
  const archContour =
    "M 0 192 L 0 66 C 0 54 8 46 22 42 C 55 24 98 10 150 8 C 202 10 245 24 278 42 C 292 46 300 54 300 66 L 300 192";

  const spandrelArea =
    "M 0 0 L 300 0 L 300 66 C 300 54 292 46 278 42 C 245 24 202 10 150 8 C 98 10 55 24 22 42 C 8 46 0 54 0 66 Z";

  // Outer decorative echo moulding (Moroccan double-arch relief)
  const outerMoulding =
    "M 0 52 C 10 40 26 32 42 26 C 72 14 110 5 150 3 C 190 5 228 14 258 26 C 274 32 290 40 300 52";

  return (
    <svg
      className={className}
      viewBox="0 0 300 192"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Soft shadow cast by the arch door onto the image */}
        <filter id="bab-door-shadow" x="-5%" y="-5%" width="110%" height="115%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2"
            floodColor="#1A120B"
            floodOpacity="0.22"
          />
        </filter>

        {/* Linear gradient for subtle terracotta depth on hover */}
        <linearGradient id="bab-terracotta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C85A32" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#C85A32" />
        </linearGradient>
      </defs>

      {/* 1. Spandrel Masonry (solid card background color framing top corners) */}
      <path
        d={spandrelArea}
        fill={spandrelColor}
        filter="url(#bab-door-shadow)"
      />

      {/* 2. Outer Decorative Accent Moulding (Moroccan double-arch relief) */}
      <path
        d={outerMoulding}
        stroke={accentColor}
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeDasharray="4 3"
        vectorEffect="non-scaling-stroke"
      />

      {/* 3. Authentic Spandrel Corner Rosettes (Left & Right) */}
      <g opacity="0.35">
        {/* Left Spandrel 8-point Mini Star */}
        <path
          d="M 18 14 L 20 11 L 23 11 L 22 14 L 24 16 L 21 16 L 20 19 L 18 17 L 16 19 L 16 16 L 13 16 L 15 14 L 13 11 L 16 11 Z"
          fill={borderColor}
        />
        {/* Right Spandrel 8-point Mini Star */}
        <path
          d="M 282 14 L 284 11 L 287 11 L 286 14 L 288 16 L 285 16 L 284 19 L 282 17 L 280 19 L 280 16 L 277 16 L 279 14 L 277 11 L 280 11 Z"
          fill={borderColor}
        />
      </g>

      {/* 4. Primary Fes Moorish Arch 2px Terracotta Border (#C85A32) */}
      <path
        d={archContour}
        fill="none"
        stroke={borderColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="transition-all duration-300 group-hover:stroke-[#B84A28]"
      />

      {/* 5. Keystone Rosette at the Pointed Arch Apex (150, 8) */}
      <g transform="translate(150, 8)">
        {/* Diamond stud */}
        <polygon
          points="0,-4 3,0 0,4 -3,0"
          fill={borderColor}
        />
        {/* Inner gold center */}
        <circle cx="0" cy="0" r="1.2" fill={accentColor} />
      </g>
    </svg>
  );
};

export default BabArchFrame;
