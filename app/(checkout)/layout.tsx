export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Header comes from root layout, Footer is excluded via ConditionalFooter */}
      {children}
    </>
  )
}

