import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Next.js 14 Homepage',
    template:'%s | Next.js 14'
  },
  description: 'Home description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">

        <Navbar />
        {children}
        <Footer />
        </div>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}