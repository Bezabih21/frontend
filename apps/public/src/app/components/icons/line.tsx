import React from 'react';

function LineSVG({ className }) {
  return (
    <svg
      className={className}
      width="350"
      height="1"
      viewBox="0 0 350 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="350" y2="0.5" stroke="#8A8C8D" strokeDasharray="4 4" />
    </svg>
  );
}

export default LineSVG;
