import { CSSProperties } from 'react'

interface CustomStyle extends CSSProperties {
  '--rotation-duration': string;
  '--rotation-direction': string;
}

export function ElAyashyLoader() {
  const rotationStyle: CustomStyle = {
    '--rotation-duration': '0ms',
    '--rotation-direction': 'normal'
  }

  return (
    <div className="loader">
      <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="e">
            <stop stopColor="#973BED"></stop>
            <stop stopColor="#007CFF" offset="1"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="l">
            <stop stopColor="#FF6B6B"></stop>
            <stop stopColor="#FF8E53" offset="1"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="a1">
            <stop stopColor="#FFC800"></stop>
            <stop stopColor="#F0F" offset="1"></stop>
            <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.25; 0.5; 0.75; 1" dur="8s" values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform"></animateTransform>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="y1">
            <stop stopColor="#00E0ED"></stop>
            <stop stopColor="#00DA72" offset="1"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="a2">
            <stop stopColor="#FF3366"></stop>
            <stop stopColor="#FF9933" offset="1"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="s">
            <stop stopColor="#9933FF"></stop>
            <stop stopColor="#33CCFF" offset="1"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="h">
            <stop stopColor="#FF33CC"></stop>
            <stop stopColor="#FF99CC" offset="1"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="y2">
            <stop stopColor="#33FF99"></stop>
            <stop stopColor="#66FF33" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#e)" d="M16 16h32M16 32h24M16 48h32M16 16v32" className="dash" pathLength="360"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#l)" d="M20 16v32h24" className="dash" pathLength="360"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={rotationStyle} viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#a1)" d="M32 16L16 48M32 16L48 48M22 38h20" className="spin" pathLength="360"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#y1)" d="M16 16L32 32L48 16M32 32v16" className="dash" pathLength="360"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={rotationStyle} viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#a2)" d="M32 16L16 48M32 16L48 48M22 38h20" className="spin" pathLength="360"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#s)" d="M48 24c0-8-16-8-16-8s-16 0-16 8 16 8 16 8 16 0 16 8-16 8-16 8-16 0-16-8" className="dash" pathLength="360"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#h)" d="M20 16v32M44 16v32M20 32h24" className="dash" pathLength="360"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#y2)" d="M16 16L32 32L48 16M32 32v16" className="dash" pathLength="360"/>
      </svg>
    </div>
  )
} 