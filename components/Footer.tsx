import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 bg-black">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <Logo height={24} />
        <p className="text-sm font-bold text-white/30">
          © {new Date().getFullYear()} Prizma
        </p>
      </div>
    </footer>
  )
}
