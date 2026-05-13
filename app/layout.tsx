import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import NoiseOverlay from '@/components/NoiseOverlay'

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
        <NoiseOverlay />
        <ScrollToTop />
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
