import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Award, Phone, Mail, MapPin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Company Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <Heart className="h-12 w-12 text-emerald-400" />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About Horizon Adult Group Home
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Experience exceptional 24-hour care where residents thrive, not just live. Our vibrant home environment blends professional support with the warmth of family, empowering each individual to reach their full potential while enjoying life to its fullest.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Mission and Values</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Dignity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We are committed to delivering quality home care services that honor each resident&apos;s personal needs and goals, ensuring their well-being and dignity in all aspects of daily life.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-2 text-primary" />
                    Respect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We foster collaborative relationships with residents, families, and partner agencies, respecting individual choices while providing comprehensive support and supervision.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-primary" />
                    Home-like Environment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We provide 24-hour supportive supervision in a safe, comfortable setting where residents can achieve their full potential for health and well-being while feeling truly at home.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                <p className="text-lg text-gray-700">
                Horizon Adult Group Home (HAGH) emerged from our founder&apos;s deep-rooted commitment to supportive care, established after years of exemplary service as one of Clackamas County&apos;s model care homes. Drawing from extensive experience as a Licensed Level B2 DD foster home provider since 2010, combined with advanced education in Organizational Leadership, our founder envisioned creating a home where residents could thrive while receiving comprehensive, person-centered support.
                
                </p>
                <p className="text-lg text-gray-700">
                Today, HAGH continues this vision by providing 24-hour supervised care that emphasizes dignity, independence, and quality of life, while actively collaborating with families and community partners to help each resident achieve their full potential.
                
                </p>
              </div>
              <div className="relative w-full max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3 scale-105"></div>
                <Image
                  src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFByb2Zlc3Npb25hbCUyMENhcmUlMjBFbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D?height=400&width=600"
                  alt="Horizon Adults Group Home founder with residents"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                  className="relative rounded-xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Our Approach to Care */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 overflow-hidden">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Approach to Care</h2>
            <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative w-full max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500 to-teal-600 rounded-2xl transform -rotate-3 scale-105"></div>
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fENvbW11bml0eSUyRlNvY2lhbCUyMFNldHRpbmd8ZW58MHx8MHx8fDA%3D?height=400&width=600"
                  alt="Caregiver assisting a resident"
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                  className="relative rounded-xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">Personalized Care Plans</h3>
                <p className="text-lg text-gray-700">
                We monitor and provide comprehensive support for each resident&apos;s health, safety, dietary, behavioral, and mental health needs. Our team collaborates with service coordinators and providers to maintain exceptional quality of care tailored to individual goals.
                </p>
                <h3 className="text-2xl font-bold">Holistic Wellness Programs</h3>
                <p className="text-lg text-gray-700">
                We deliver supportive services that address residents&apos; health, recreational, and daily living needs while coordinating with educational programs and employment opportunities. Our qualified staff ensures 24-hour supervision to enhance residents&apos; overall well-being and independence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Commitment to Quality</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-2 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We maintain all required state and federal certifications, ensuring compliance with the highest standards of care.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Staff Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our staff undergoes continuous training and education to stay updated on the latest care techniques and best practices.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-primary" />
                    Healthcare Affiliations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We maintain strong relationships with local healthcare providers and organizations to ensure comprehensive care for our residents.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Families Say</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { quote: "The care and attention my mother receives at Horizon Adults Group Home is exceptional. It gives me peace of mind knowing she's in such good hands.", author: "Jane D." },
                { quote: "The staff goes above and beyond to make my father feel at home. Their dedication and compassion are truly remarkable.", author: "Michael S." },
                { quote: "Choosing Horizon Adults Group Home for my aunt was the best decision we could have made. The quality of care and the warm environment have made a world of difference.", author: "Lisa M." },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</p>
                    <p className="text-sm text-gray-500">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community and Activities */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Community and Activities</h2>
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  At Horizon Adult Group Home, we provide comprehensive 24-hour support that addresses our residents&quot; health, safety, dietary, behavioral, mental health, and recreational needs. Our supportive environment promotes both personal growth and community integration.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Daily exercise and wellness programs</li>
                  <li>Art and craft workshops</li>
                  <li>Music therapy sessions</li>
                  <li>Book clubs and discussion groups</li>
                  <li>Celebratory events for holidays and birthdays</li>
                  <li>Health and safety monitoring</li>
                  <li>Behavioral and mental health care</li>
                  <li>Educational program support</li>
                  <li>Employment coordination</li>
                  <li>Community engagement opportunities</li>
                </ul>
                <p className="text-lg text-gray-700">
                We collaborate closely with families, providers, service coordinators, and community partners to create a supportive environment where residents can achieve their full potential while maintaining active lives.
                </p>
              </div>
              <div className="relative w-full max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-3 scale-105"></div>
                <Image
                  src="https://images.unsplash.com/photo-1657664042448-c955b411d9d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdhcmRlbmluZyUyMGFjdGl2aXRpZXN8ZW58MHx8MHx8fDA%3D?height=400&width=600"
                  alt="Residents enjoying a group activity"
                  width={600}
                  height={400}
                  className="relative rounded-xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                We&apos;re here to answer your questions and help you explore the compassionate care options at Horizon Adults Group Home.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link href="tel:+11234567890" className="flex items-center justify-center space-x-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#003B5C] shadow transition-colors hover:bg-gray-100">
                  <Phone className="h-5 w-5" />
                  <span>(503) 427-2346</span>
                </Link>
                <Link href="mailto:info@horizonagh.com" className="flex items-center justify-center space-x-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#003B5C] shadow transition-colors hover:bg-gray-100">
                  <Mail className="h-5 w-5" />
                  <span>info@horizonagh.com</span>
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-200">
                <MapPin className="h-5 w-5" />
                <span>10117 SE Sunnyside RD  Suite F1234, Clackamas, OR 97015</span>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage