import React from 'react';

function RectangleSVG({ color }) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="19" height="18" fill={color} />
    </svg>
  );
}

export default RectangleSVG;
