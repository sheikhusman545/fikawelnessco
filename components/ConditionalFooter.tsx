'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  const isCheckout = pathname?.startsWith('/checkout')

  if (isCheckout) {
    return null
  }

  return <Footer />
}

