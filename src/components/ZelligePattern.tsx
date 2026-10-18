import type { CSSProperties } from "react";

interface ZelligePatternProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export function ZelligePattern({ className = "", color = "#1E3A8A", opacity = 0.06 }: ZelligePatternProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="zellige-tile" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* 8-pointed star */}
          <g fill="none" stroke={color} strokeWidth="1.2">
            {/* Outer star polygon */}
            <path d="M40 8 L47 25 L65 18 L57 35 L75 40 L57 45 L65 62 L47 55 L40 72 L33 55 L15 62 L23 45 L5 40 L23 35 L15 18 L33 25 Z" />
            {/* Inner octagon */}
            <path d="M40 28 L52 40 L40 52 L28 40 Z" />
            {/* Connecting squares */}
            <rect x="34" y="0" width="12" height="12" />
            <rect x="34" y="68" width="12" height="12" />
            <rect x="0" y="34" width="12" height="12" />
            <rect x="68" y="34" width="12" height="12" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellige-tile)" />
    </svg>
  );
}

export function ZelligeStar({ className = "", color = "#D97706", opacity = 1, size = 24 }: { className?: string; color?: string; opacity?: number; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M24 2 L29 14 L42 9 L37 22 L49 24 L37 26 L42 39 L29 34 L24 46 L19 34 L6 39 L11 26 L-1 24 L11 22 L6 9 L19 14 Z"
        fill={color}
      />
      <path
        d="M24 10 L28 18 L36 16 L33 23 L40 24 L33 25 L36 32 L28 30 L24 38 L20 30 L12 32 L15 25 L8 24 L15 23 L12 16 L20 18 Z"
        fill="none"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}

export function MoroccanArch({ className = "", strokeColor = "#D97706", fill = "none", strokeWidth = 1.5, opacity = 0.3 }: { className?: string; strokeColor?: string; fill?: string; strokeWidth?: number; opacity?: number }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 200 120"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 120 L0 50 Q0 0 100 0 Q200 0 200 50 L200 120"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill={fill}
      />
      <path
        d="M10 120 L10 52 Q10 12 100 12 Q190 12 190 52 L190 120"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.6}
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function CornerRosette({ className = "", color = "#C85A32", size = 20 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2 L14 8 L20 6 L16 11 L22 12 L16 13 L20 18 L14 16 L12 22 L10 16 L4 18 L8 13 L2 12 L8 11 L4 6 L10 8 Z" fill={color} opacity="0.3" />
      <circle cx="12" cy="12" r="3" fill={color} opacity="0.5" />
    </svg>
  );
}

export function ZelligeStarIcon({ className = "", color = "#D97706", size = 20, rotateOnHover = false, opacity = 1, style }: { className?: string; color?: string; size?: number; rotateOnHover?: boolean; opacity?: number; style?: CSSProperties }) {
  return (
    <svg
      className={`${className} ${rotateOnHover ? "zellige-rotate" : ""}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <path
        d="M24 2 L29 14 L42 9 L37 22 L49 24 L37 26 L42 39 L29 34 L24 46 L19 34 L6 39 L11 26 L-1 24 L11 22 L6 9 L19 14 Z"
        fill={color}
      />
      <path
        d="M24 10 L28 18 L36 16 L33 23 L40 24 L33 25 L36 32 L28 30 L24 38 L20 30 L12 32 L15 25 L8 24 L15 23 L12 16 L20 18 Z"
        fill="none"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}

export function OrnamentDivider({ className = "", color = "#C85A32" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="20"
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 10 L35 10" stroke={color} strokeWidth="1" opacity="0.4" />
      <path d="M85 10 L120 10" stroke={color} strokeWidth="1" opacity="0.4" />
      {/* Center 8-point star */}
      <path
        d="M60 2 L63 7 L69 6 L66 11 L72 10 L66 12 L69 17 L63 14 L60 19 L57 14 L51 17 L54 12 L48 10 L54 11 L51 6 L57 7 Z"
        fill={color}
        opacity="0.5"
      />
      <circle cx="60" cy="10" r="2" fill={color} opacity="0.3" />
      {/* Side diamonds */}
      <path d="M40 10 L44 6 L48 10 L44 14 Z" fill={color} opacity="0.3" />
      <path d="M72 10 L76 6 L80 10 L76 14 Z" fill={color} opacity="0.3" />
    </svg>
  );
}

export { BabArchFrame } from "./BabArchFrame";

