import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"none" | "hover" | "view">("none");
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Disable on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Quick setters for smooth animations
    const xCursorSet = gsap.quickSetter(cursor, "x", "px");
    const yCursorSet = gsap.quickSetter(cursor, "y", "px");
    const xFollowerSet = gsap.quickSetter(follower, "x", "px");
    const yFollowerSet = gsap.quickSetter(follower, "y", "px");

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const speed = 0.15; // smooth delay speed

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) setVisible(true);
      xCursorSet(mouse.x);
      yCursorSet(mouse.y);
    };

    const tick = () => {
      // Linear interpolation for lagging follower
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      xFollowerSet(pos.x);
      yFollowerSet(pos.y);
      requestAnimationFrame(tick);
    };

    const onMouseLeaveWindow = () => setVisible(false);
    const onMouseEnterWindow = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);
    const tickId = requestAnimationFrame(tick);

    // Track hover classes dynamically
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest link, button, or custom clickable elements
      const interactive = target.closest("a, button, [role='button'], .clickable");
      const viewCard = target.closest(".view-hover");

      if (viewCard) {
        setHoverType("view");
      } else if (interactive) {
        setHoverType("hover");
      } else {
        setHoverType("none");
      }
    };

    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(tickId);
    };
  }, [visible]);

  // Adjust cursor design dynamically on hover type
  const getFollowerStyles = () => {
    switch (hoverType) {
      case "view":
        return "scale-[2.5] bg-[var(--brand-red)]/15 border-[var(--brand-red)]/60";
      case "hover":
        return "scale-150 border-[var(--brand-red)] bg-[var(--brand-red)]/5";
      default:
        return "scale-100 border-white/40 bg-transparent";
    }
  };

  const getCursorStyles = () => {
    switch (hoverType) {
      case "view":
        return "scale-0 opacity-0";
      case "hover":
        return "scale-75 bg-[var(--brand-red)]";
      default:
        return "scale-100 bg-[var(--brand-red)]";
    }
  };

  if (!mounted || isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Follower Outer Ring */}
      <div
        ref={followerRef}
        className={`absolute -left-5 -top-5 h-10 w-10 rounded-full border border-solid transition-all duration-300 ease-out flex items-center justify-center ${getFollowerStyles()}`}
        style={{ transformOrigin: "center center" }}
      >
        {/* Label visible only on catalog card hovers */}
        <span
          ref={labelRef}
          className={`font-display text-[5px] font-bold tracking-widest text-[var(--brand-red)] transition-opacity duration-300 ${
            hoverType === "view" ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          VER
        </span>
      </div>

      {/* Tiny inner dot */}
      <div
        ref={cursorRef}
        className={`absolute -left-1 -top-1 h-2 w-2 rounded-full transition-all duration-200 ease-out ${getCursorStyles()}`}
        style={{ transformOrigin: "center center" }}
      />
    </div>
  );
}
