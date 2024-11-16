import React from 'react'
import { Button } from "@/components/ui/button"
// import { HeartHandshake, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function HeroSection() {
    return (
            // <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C] text-white">
            //     <div className="px-2 md:px-6">
            //         <div className="flex flex-col items-center space-y-4  text-center">
            //             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            //                 Welcome to Horizon Adult Home Care
            //             </h1>
            //             <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            //                 Providing compassionate 24-hour care for adults with IDD/DDS diagnostics in a warm,
            //                 supportive environment.
            //             </p>
            //             <div className="space-x-4">
            //                 <Button className="bg-emerald-600 hover:bg-emerald-700">
            //                     <Phone className="mr-2 h-4 w-4" />
            //                     Contact Us
            //                 </Button>
            //                 <Button variant="outline" className="bg-white text-[#003B5C] hover:bg-gray-100">
            //                     <HeartHandshake className="mr-2 h-4 w-4" />
            //                     Our Services
            //                 </Button>
            //             </div>
            //         </div>
            //     </div>
            // </section>
<section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2058&auto=format&fit=crop"
            alt="Welcoming care home environment"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Horizon Adult Group Home</h1>
          <p className="text-xl md:text-2xl mb-8">
            Providing compassionate 24-hour care for adults with IDD/DDS in a warm,
            supportive environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    )
}

export default HeroSection