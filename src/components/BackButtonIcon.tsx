import React from "react";

interface BackButtonIconProps {
  isMouseOver: boolean;
  size?: number;
}

export function BackButtonIcon({ isMouseOver, size = 18 }: BackButtonIconProps) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height={size}
      fill="none"
      viewBox="0 0 10 18"
    >
      <path
        stroke={isMouseOver ? "#FFBA08" : "#47585B"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 17L1 9l8-8"
      ></path>
    </svg>
  );


}

