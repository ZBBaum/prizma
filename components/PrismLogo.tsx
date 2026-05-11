export default function PrismLogo({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="prism-clip">
          <polygon points="12,1 23,21 1,21" />
        </clipPath>
      </defs>
      <rect x="0" y="1" width="24" height="3.33" fill="#FF0000" clipPath="url(#prism-clip)" />
      <rect x="0" y="4.33" width="24" height="3.33" fill="#FF8000" clipPath="url(#prism-clip)" />
      <rect x="0" y="7.66" width="24" height="3.33" fill="#FFE000" clipPath="url(#prism-clip)" />
      <rect x="0" y="11" width="24" height="3.33" fill="#00CC44" clipPath="url(#prism-clip)" />
      <rect x="0" y="14.33" width="24" height="3.33" fill="#0066FF" clipPath="url(#prism-clip)" />
      <rect x="0" y="17.67" width="24" height="3.33" fill="#8800FF" clipPath="url(#prism-clip)" />
      <polygon
        points="12,1 23,21 1,21"
        fill="none"
        stroke="black"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
