import Link from 'next/link'

export default function Logo({ height = 32, src = '/PrizmaLogoLight1.png' }: { height?: number; src?: string }) {
  return (
    <Link href="/" className="flex items-center no-underline">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Prizma"
        style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      />
    </Link>
  )
}
