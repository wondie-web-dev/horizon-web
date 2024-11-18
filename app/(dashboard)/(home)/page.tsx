import React from 'react'
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import CTASection from '@/components/CTA-Section';

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <CTASection/>
    </div>
  )
}

export default HomePage