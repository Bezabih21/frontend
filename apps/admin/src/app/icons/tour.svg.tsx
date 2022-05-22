import React from 'react';

function TourSVG({ color }) {
  return (
    <svg
      width="31"
      height="36"
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5295 4.73528V0.499985H0.823608V20.2647H5.76479V24.5H19.1766V4.73528H13.5295ZM8.80206 4.73528L12.1177 2.52478V4.73528H8.80206ZM2.23537 18.8529V1.91175H10.4923L5.76479 5.06342V6.14704H3.64714V7.55881H5.76479V8.97057H3.64714V10.3823H5.76479V11.7941H3.64714V13.2059H5.76479V14.6176H3.64714V16.0294H5.76479V18.8529H2.23537ZM17.7648 23.0882H7.17655V6.14704H17.7648V23.0882Z"
        fill={color}
      />
      <path
        d="M16.353 7.55879H12.1177V11.7941H16.353V7.55879ZM14.9413 10.3823H13.5295V8.97056H14.9413V10.3823Z"
        fill={color}
      />
      <path
        d="M8.58826 10.3824H10.7059V11.7942H8.58826V10.3824Z"
        fill={color}
      />
      <path
        d="M8.58826 7.55879H10.7059V8.97056H8.58826V7.55879Z"
        fill={color}
      />
      <path d="M8.58826 13.2059H16.353V14.6176H8.58826V13.2059Z" fill={color} />
      <path d="M8.58826 16.0293H16.353V17.4411H8.58826V16.0293Z" fill={color} />
      <path d="M8.58826 18.8529H16.353V20.2647H8.58826V18.8529Z" fill={color} />
    </svg>
  );
}

export default TourSVG;
