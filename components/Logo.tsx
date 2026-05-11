import Link from 'next/link'

export default function Logo({ height = 32 }: { height?: number }) {
  return (
    <Link href="/" className="flex items-center no-underline">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/PirzmaLogoDark1.png"
        alt="Prizma"
        style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      />
    </Link>
  )
}
