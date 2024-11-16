import React from "react"
import { Button } from "@/components/ui/button"
import { Info, Phone } from "lucide-react"

function CTASection() {
  return (
    <section className="bg-[#003B5C]">
      <div className="lg:flex lg:items-center lg:justify-between lg:p-12 p-6">
          <div className="space-y-2 py-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-4xl">
            <span className="block">Ready to take the next step?</span>
            <span className="block text-[#9fcee9]">Contact us to begin the admission process.</span>
            </h2>
            {/* <p className="text-xl text-gray-200">Get in touch with us today.</p> */}
          </div>
          <div className="mt-8 flex space-x-4 lg:mt-0 lg:flex-shrink-0">
            <Button variant="outline" className="border-white text-[#003B5C] hover:bg-white/10">
              Learn About Admissions
              <Info className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Contact Us
            <Phone className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
      </div>
    </section>
  )
}

export default CTASection