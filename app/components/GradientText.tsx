import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  // The first color is repeated at the end to create a seamless infinite loop
  colors = ["#e2488f", "#7a5af8", "#1fb0c0", "#5bc46a", "#f4a13a", "#e2488f"],
  animationSpeed = 4,
}: GradientTextProps) {
  return (
    <span
      className={`inline-block text-transparent bg-clip-text animate-gradient ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}