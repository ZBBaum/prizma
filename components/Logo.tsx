import Link from 'next/link'
import PrismLogo from './PrismLogo'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 no-underline">
      <PrismLogo size={22} />
      <span className="text-black font-bold text-lg tracking-tight">prizma</span>
    </Link>
  )
}
