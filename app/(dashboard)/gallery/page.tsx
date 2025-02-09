'use client'
import Image from "next/image"
import { Camera } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function GalleryPage() {
  
  const galleryCategories = [
    {
      title: "Our Facility",
      description: "Take a tour through our comfortable and welcoming spaces",
      images: [
        { src: "/lobby.jpg?height=400&width=600", alt: "Exterior view", caption: "Our welcoming entrance" },
        { src: "/room2.jpg?height=400&width=600", alt: "Common area", caption: "Spacious common area" },
        { src: "/room4.jpg?height=400&width=600", alt: "Dining room", caption: "Community dining room" },
        { src: "/garden.jpg?height=400&width=600", alt: "Garden area", caption: "Peaceful garden space" },
        { src: "/room3.jpg?height=400&width=600", alt: "Resident room", caption: "Comfortable resident rooms" },
        { src: "/room1.jpg?height=400&width=600", alt: "Activity room", caption: "Engaging activity center" },
      ]
    },
    {
      title: "Activities & Programs",
      description: "Explore our engaging activities and therapeutic programs",
      images: [
        { src: "/group_therapy.jpg?height=400&width=600", alt: "Group activity", caption: "Stimulating group activities" },
        { src: "/heart.jpg?height=400&width=600", alt: "Art therapy", caption: "Creative art therapy sessions" },
        { src: "/music_therapy.jpg?height=400&width=600", alt: "Music therapy", caption: "Uplifting music therapy" },
        { src: "/exercise_class.jpg?height=400&width=600", alt: "Exercise class", caption: "Invigorating wellness programs" },
        { src: "/gardening.jpg?height=400&width=600", alt: "Gardening", caption: "Therapeutic gardening activities" },
        { src: "/game_night.jpg?height=400&width=600", alt: "Game night", caption: "Fun-filled game nights" },
      ]
    },
    {
      title: "Community Life",
      description: "See how our residents enjoy life in our community",
      images: [
        { src: "/community_ste.jpg?height=400&width=600", alt: "Community event", caption: "Vibrant community gatherings" },
        { src: "/neighbour.jpg?height=400&width=600", alt: "Family visit", caption: "Heartwarming family visits" },
        { src: "/group.jpg?height=400&width=600", alt: "Holiday celebration", caption: "Joyous holiday celebrations" },
        { src: "/beach.jpg?height=400&width=600", alt: "Outdoor activity", caption: "Refreshing outdoor activities" },
        { src: "/gather.jpg?height=400&width=600", alt: "Birthday party", caption: "Special birthday celebrations" },
        { src: "/Volunteer.jpg?height=400&width=600", alt: "Volunteer event", caption: "Engaging volunteer events" },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C]">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Camera className="h-12 w-12 text-emerald-400" />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Our Gallery
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Take a visual journey through life at Horizon Adult Group Home
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <div className="py-12 md:py-24 lg:py-32">
          {galleryCategories.map((category, index) => (
            <section key={index} className="mb-20 last:mb-0">
              <div className="px-4 md:px-6">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                    {category.title}
                  </h2>
                  <p className="text-gray-500 md:text-lg max-w-[700px] mx-auto">
                    {category.description}
                  </p>
                </div>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-7xl mx-auto"
                >
                  <CarouselContent>
                    {category.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="md:basis-1/3 lg:basis-1/4">
                        <div className="p-1">
                          <Card className="overflow-hidden">
                            <CardContent className="p-0">
                              <div className="relative aspect-[4/3]">
                                <Image
                                  src={image.src || "/placeholder.svg"}
                                  alt={image.alt}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-4 bg-white">
                                <p className="text-sm text-gray-500">{image.caption}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C] text-white">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience Our Community
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Schedule a visit to see our facility in person and meet our caring staff.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}