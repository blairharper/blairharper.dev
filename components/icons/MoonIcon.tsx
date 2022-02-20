import * as React from 'react';

const MoonIcon = (props) => (
  <svg
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 1.5,
    }}
    {...props}>
    <path
      d="M52.792 12.603c-16.223 0-29.394 9.721-29.394 21.695 0 11.973 13.171 21.694 29.394 21.694-4.867-5.062-8.818-13.04-8.818-21.694 0-8.655 3.951-16.633 8.818-21.695Z"
      style={{
        fill: '#ebebeb',
        fillOpacity: 0,
        stroke: '#000',
        strokeWidth: '1.2px',
      }}
      fill="none"
      transform="matrix(.54263 -.14368 .19467 .73522 -1.866 8.722)"
    />
  </svg>
);

export default MoonIcon;
