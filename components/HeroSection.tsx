import React from 'react'
import { Button } from "@/components/ui/button"
import { HeartHandshake, Phone } from 'lucide-react'

function HeroSection() {
    return (
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C] text-white">
                <div className="px-2 md:px-6">
                    <div className="flex flex-col items-center space-y-4  text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            Welcome to Horizon Adult Home Care
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                            Providing compassionate 24-hour care for adults with IDD/DDS diagnostics in a warm,
                            supportive environment.
                        </p>
                        <div className="space-x-4">
                            <Button className="bg-emerald-600 hover:bg-emerald-700">
                                <Phone className="mr-2 h-4 w-4" />
                                Contact Us
                            </Button>
                            <Button variant="outline" className="bg-white text-[#003B5C] hover:bg-gray-100">
                                <HeartHandshake className="mr-2 h-4 w-4" />
                                Our Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default HeroSection