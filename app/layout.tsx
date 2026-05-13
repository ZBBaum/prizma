import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Prizma | AI Consulting',
  description: 'The impossible, delivered instantly.',
  icons: {
    icon: '/PrizmaPrizm3.png',
    apple: '/PrizmaPrizm3.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <head>
        <link rel="icon" type="image/png" href="/PrizmaPrizm3.png" />
        <link rel="shortcut icon" href="/PrizmaPrizm3.png" />
        <link rel="apple-touch-icon" href="/PrizmaPrizm3.png" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
        />
      </head>
      <body>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, backgroundColor: 'transparent', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '200px 200px', mixBlendMode: 'overlay', opacity: 0.08, pointerEvents: 'none' }} />
        <ScrollToTop />
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
