import React from 'react'
import HeaderNav from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import { Separator } from '@/components/ui/separator';
import CTASection from '@/components/CTA-Section';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <div>
    <HeaderNav/>
    <Separator />
    <HeroSection/>
    <ServiceSection/>
    <CTASection/>
    <Footer/>
    </div>
  )
}

export default HomePage