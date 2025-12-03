import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import ConditionalHeader from '@/components/ConditionalHeader'
import ConditionalFooter from '@/components/ConditionalFooter'
import { CartProvider } from '@/components/CartProvider'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'FIKA Wellness Co. - Self-Care & Wellness Products',
  description: 'FIKA Wellness Co. - Empowering women through self-care and wellness products. Small batch, high quality wellness products blended to enhance your self-care practice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          <ConditionalHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <ConditionalFooter />
        </CartProvider>
      </body>
    </html>
  )
}

