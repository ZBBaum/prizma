function Arrow() {
  return (
    <div className="flex items-center flex-1 min-w-8">
      <div className="flex-1 h-px bg-black/20 dark:bg-white/20" />
      <svg
        className="flex-shrink-0 text-black/20 dark:text-white/20"
        width="7" height="12" viewBox="0 0 7 12" fill="none"
      >
        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function ProcessDiagram() {
  return (
    <div className="w-full flex items-center justify-center px-8 py-16 md:py-20">
      <div className="flex items-center gap-3 md:gap-5 w-full max-w-sm md:max-w-md">

        <span className="flex-shrink-0 text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
          Problem
        </span>

        <Arrow />

        <span
          className="flex-shrink-0 text-2xl md:text-3xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(to right, var(--prizma-violet), var(--prizma-blue), var(--prizma-green), var(--prizma-yellow), var(--prizma-orange), var(--prizma-red))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Prizma
        </span>

        <Arrow />

        <span className="flex-shrink-0 text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
          Platform
        </span>

      </div>
    </div>
  )
}
