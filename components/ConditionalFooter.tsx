'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  const isCheckout = pathname?.startsWith('/checkout')
  const isDashboard = pathname?.startsWith('/dashboard')

  if (isCheckout || isDashboard) {
    return null
  }

  return <Footer />
}

