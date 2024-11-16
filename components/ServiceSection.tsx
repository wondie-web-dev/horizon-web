import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User2, Activity } from 'lucide-react'

function ServiceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="services">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="text-emerald-600 font-semibold">OUR COMMITMENT</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Exceptional Care for Every Individual
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">24/7 Professional Care</h3>
                <p className="text-muted-foreground text-center">
                  Round-the-clock support from our dedicated team of healthcare professionals.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <User2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Personalized Support</h3>
                <p className="text-muted-foreground text-center">
                  Individualized care plans tailored to each residents unique needs and goals.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <Activity className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Enriching Activities</h3>
                <p className="text-muted-foreground text-center">
                  Engaging recreational and therapeutic activities that promote growth and joy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection