import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ height = 32 }: { height?: number }) {
  return (
    <Link href="/" className="flex items-center no-underline">
      <Image
        src="/PrizmaLogoLight1.png"
        alt="Prizma"
        height={height}
        width={0}
        style={{ width: 'auto', height: `${height}px` }}
        priority
      />
    </Link>
  )
}
