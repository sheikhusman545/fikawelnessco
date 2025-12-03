'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')
  const isCheckout = pathname?.startsWith('/checkout')

  if (isDashboard || isCheckout) {
    return null
  }

  return <Header />
}

