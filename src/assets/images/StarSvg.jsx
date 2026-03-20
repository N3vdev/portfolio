/**
 * StarSvg is kept for backward-compat if used elsewhere.
 * The interactive version lives inside Hero.jsx (InteractiveStar component).
 */
import React from 'react'

const StarSvg = ({ index = '-z-10', style = {} }) => {
  return (
    <div
      className={`absolute right-[-23%] lg:right-[-12%] h-screen ${index} top-22 flex flex-col justify-center opacity-35`}
      style={style}
    >
      <svg
        className='h-[38vh] lg:h-[70vh]'
        style={{ animation: 'rotateSlow 18s linear infinite' }}
        viewBox="0 0 653 631"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M290.361 1.55586L333.686 284.91L333.88 286.179L334.595 285.113L496.712 43.717L530.894 66.1539L354.53 298.389L353.719 299.458L355.031 299.181L644.761 238.164L651.693 276.115L359.086 321.397L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.335L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.684L363.139 630.093L319.819 346.737L319.626 345.469L318.911 346.533L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73027 393.473L1.564 354.211L294.405 310.246L295.74 310.046L294.596 309.329L47.5646 154.374L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96535L290.361 1.55586Z"
          stroke="url(#paint0_linear_1074_2)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1074_2"
            x1="4.77595"
            y1="374.593"
            x2="648.724"
            y2="257.055"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF4D6D" />
            <stop offset="0.25" stopColor="#BD3EB2" />
            <stop offset="0.5" stopColor="#7B2FF7" />
            <stop offset="0.75" stopColor="#2F86F7" />
            <stop offset="1" stopColor="#2FF7ED" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default StarSvg