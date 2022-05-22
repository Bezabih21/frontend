import React from 'react';

function EllipsisSVG({ color }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill={color} />
    </svg>
  );
}

export default EllipsisSVG;
