import React from 'react';

function BellSVG({ color }) {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00065 17.3333C6.55852 17.3311 6.13499 17.1551 5.82158 16.8432C5.50816 16.5314 5.33002 16.1087 5.32565 15.6666H8.65898C8.66075 15.8894 8.61826 16.1104 8.53398 16.3166C8.42622 16.5639 8.26121 16.782 8.05257 16.953C7.84392 17.124 7.59763 17.2429 7.33398 17.3H7.29482C7.198 17.3201 7.09952 17.3313 7.00065 17.3333ZM13.6673 14.8333H0.333984V13.1666L2.00065 12.3333V7.74996C1.95675 6.57422 2.22226 5.40756 2.77065 4.36663C3.04051 3.88935 3.40851 3.47472 3.85036 3.15008C4.29221 2.82545 4.79787 2.59819 5.33398 2.48329V0.666626H8.66732V2.48329C10.8165 2.99496 12.0007 4.86496 12.0007 7.74996V12.3333L13.6673 13.1666V14.8333Z"
        fill={color}
      />
    </svg>
  );
}

export default BellSVG;