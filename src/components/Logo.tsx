import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="48" stroke="#243b5fff" stroke-width="12" fill="none"/>
  <text
    x="54"
    y="62"
    text-anchor="middle"
    alignment-baseline="middle"
    font-family="monospace"
    font-size="48"
    font-weight="bold"
    fill="#243b5fff"
    letter-spacing="-10"
    dominant-baseline="middle"
  >
 J|U
  </text>

</svg>
  );
};

export default Logo;