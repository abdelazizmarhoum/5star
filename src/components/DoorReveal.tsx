import { useState, useEffect, type ReactNode } from "react";
import { ZelligeStarIcon } from "@/components/ZelligePattern";

interface DoorRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function DoorReveal({ children, className = "", delay = 0 }: DoorRevealProps) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpened(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`section-door-container ${className}`}>
      {opened && <div className="door-content-reveal">{children}</div>}

      {!opened && (
        <>
          <div className="door-overlay door-overlay-left">
            <div className="door-panel-bg" style={{ animation: "doorOpenLeft 1.2s cubic-bezier(0.4,0,0.2,1) forwards", animationDelay: `${delay}ms`, animationFillMode: "forwards" }}>
              <ZelligeStarIcon color="rgba(217,119,6,0.15)" size={40} />
            </div>
          </div>
          <div className="door-overlay door-overlay-right">
            <div className="door-panel-bg" style={{ animation: "doorOpenRight 1.2s cubic-bezier(0.4,0,0.2,1) forwards", animationDelay: `${delay}ms`, animationFillMode: "forwards" }}>
              <ZelligeStarIcon color="rgba(217,119,6,0.15)" size={40} />
            </div>
          </div>
          <div style={{ minHeight: "200px" }} />
        </>
      )}
    </div>
  );
}
