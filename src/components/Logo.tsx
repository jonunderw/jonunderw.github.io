import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define patterns */}
      <defs>
        {/* Blueprint grid pattern */}
        <pattern
          id="blueprintGrid"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <rect width="5" height="5" fill="#0c4a6e" />
          <path
            d="M 5 0 L 0 0 0 5"
            fill="none"
            stroke="#1e7dd6"
            strokeWidth="0.3"
            opacity="0.7"
          />
        </pattern>
        
        {/* Major grid lines */}
        <pattern
          id="blueprintMajorGrid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect width="20" height="20" fill="url(#blueprintGrid)" />
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="0.5"
            opacity="0.8"
          />
        </pattern>
      </defs>
      
      {/* Blueprint background */}
      <rect
        width="100"
        height="100"
        fill="url(#blueprintMajorGrid)"
        rx="8"
      />
      
      {/* Blueprint border */}
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1"
        strokeDasharray="3,1"
        rx="6"
      />
      
      {/* Title block in corner */}
      <rect
        x="65"
        y="5"
        width="30"
        height="15"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="0.5"
      />
      
      
      {/* Letter J with construction lines - centered and same height as U */}
      <g>
        {/* Construction guidelines for J */}
        <line x1="25" y1="30" x2="45" y2="30" stroke="#1e7dd6" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.6" />
        <line x1="35" y1="25" x2="35" y2="75" stroke="#1e7dd6" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.6" />
        <line x1="25" y1="63" x2="45" y2="63" stroke="#1e7dd6" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.6" />
        
        {/* J Body - same height as U */}
        <path
          d="M35 30 L35 53 Q35 63 28 63 Q21 63 21 56 L21 53"
          stroke="#ffffff"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Blueprint-style J annotations */}
        <circle cx="35" cy="30" r="1" fill="#60a5fa" />
        <circle cx="21" cy="53" r="1" fill="#60a5fa" />
        <circle cx="28" cy="63" r="1" fill="#60a5fa" />
      </g>
      
      {/* Letter U with construction lines - centered */}
      <g>
        {/* Construction guidelines for U */}
        <line x1="50" y1="30" x2="80" y2="30" stroke="#1e7dd6" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.6" />
        <line x1="55" y1="25" x2="55" y2="75" stroke="#1e7dd6" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.6" />
        <line x1="75" y1="25" x2="75" y2="75" stroke="#1e7dd6" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.6" />
        <line x1="50" y1="63" x2="80" y2="63" stroke="#1e7dd6" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.6" />
        
        {/* U Body - main stroke */}
        <path
          d="M55 30 L55 53 Q55 63 65 63 Q75 63 75 53 L75 30"
          stroke="#ffffff"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Blueprint-style U annotations */}
        <circle cx="55" cy="30" r="1" fill="#60a5fa" />
        <circle cx="75" cy="30" r="1" fill="#60a5fa" />
        <circle cx="55" cy="53" r="1" fill="#60a5fa" />
        <circle cx="75" cy="53" r="1" fill="#60a5fa" />
        <circle cx="65" cy="63" r="1" fill="#60a5fa" />
        
        {/* Dimension line for U width */}
        <line x1="55" y1="71" x2="75" y2="71" stroke="#60a5fa" strokeWidth="0.3" />
        <line x1="55" y1="70" x2="55" y2="72" stroke="#60a5fa" strokeWidth="0.3" />
        <line x1="75" y1="70" x2="75" y2="72" stroke="#60a5fa" strokeWidth="0.3" />
        <text x="65" y="75" fontSize="2" fill="#60a5fa" textAnchor="middle">20</text>
      </g>
      
      {/* Dimension line for J height - updated to match U */}
      <line x1="42" y1="30" x2="42" y2="53" stroke="#60a5fa" strokeWidth="0.3" />
      <line x1="41" y1="30" x2="43" y2="30" stroke="#60a5fa" strokeWidth="0.3" />
      <line x1="41" y1="53" x2="43" y2="53" stroke="#60a5fa" strokeWidth="0.3" />
      <text x="46" y="43" fontSize="2" fill="#60a5fa" textAnchor="middle">23</text>
      
      {/* Blueprint corner markers */}
      <g stroke="#60a5fa" strokeWidth="0.5" fill="none">
        <path d="M8 8 L8 12 L12 8" />
        <path d="M92 8 L88 8 L92 12" />
        <path d="M8 92 L12 92 L8 88" />
        <path d="M92 92 L92 88 L88 92" />
      </g>
      
      {/* Scale indicator */}
      <g transform="translate(5, 85)">
        <rect x="0" y="0" width="20" height="8" fill="none" stroke="#60a5fa" strokeWidth="0.3" />
        <line x1="0" y1="4" x2="5" y2="4" stroke="#60a5fa" strokeWidth="0.4" />
        <line x1="5" y1="4" x2="10" y2="4" stroke="#60a5fa" strokeWidth="0.4" />
        <line x1="10" y1="4" x2="15" y2="4" stroke="#60a5fa" strokeWidth="0.4" />
        <line x1="15" y1="4" x2="20" y2="4" stroke="#60a5fa" strokeWidth="0.4" />
        <text x="10" y="7" fontSize="1.5" fill="#60a5fa" textAnchor="middle">SCALE 1:1</text>
      </g>
    </svg>
  );
};

export default Logo;