import FullPageSlider from '@/components/FullPageSlider'
import OurStory from '@/components/OurStory'
import ProductSlider from '@/components/ProductSlider'
import ProductInfoSection from '@/components/ProductInfoSection'
import NewsletterSection from '@/components/NewsletterSection'
import ShippingInfoSection from '@/components/ShippingInfoSection'

export default function Home() {
  return (
    <>
      <FullPageSlider />
      <OurStory />
      <ProductSlider />
      <ProductInfoSection />
      <NewsletterSection />
      <ShippingInfoSection />
    </>
  )
}

