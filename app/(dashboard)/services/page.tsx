import { Heart, Users, Award, Clock, Briefcase, Home, Shield, Music, Palette, Book, TreesIcon as Tree, Bus, Store } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1 w-full">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Heart className="h-12 w-12 text-emerald-400" />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Services at HAGH
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Providing 24-hour staff supervision and services for individuals 18 years and older in Portland and surrounding cities in Oregon.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Comprehensive Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home className="h-6 w-6 mr-2 text-primary" />
                    Room and Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We provide comfortable living spaces and nutritious meals for our residents.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-primary" />
                    Health and Safety Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our staff ensures the health and safety of each resident through continuous monitoring and care.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Behavioral and Mental Health Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We offer support for behavioral and mental health needs, tailored to each individual.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-primary" />
                    24-Hour Supervision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our dedicated staff provides round-the-clock supervision and assistance.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-6 w-6 mr-2 text-primary" />
                    Educational and Employment Coordination
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We coordinate with educational programs and employment opportunities for our residents.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-2 text-primary" />
                    Recreational Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We organize various recreational activities to enhance the quality of life for our residents.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Facility Activities */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Facility Activities</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="h-6 w-6 mr-2 text-primary" />
                    Music Therapy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Regular music sessions to promote emotional well-being and cognitive stimulation.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="h-6 w-6 mr-2 text-primary" />
                    Art and Craft Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Creative activities to encourage self-expression and fine motor skills development.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Group Exercise Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tailored fitness programs to maintain physical health and promote social interaction.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="h-6 w-6 mr-2 text-primary" />
                    Book Club and Reading Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Regular reading groups to stimulate cognitive function and encourage discussion.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-primary" />
                    Wellness and Meditation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Guided relaxation and mindfulness sessions to promote mental well-being.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-2 text-primary" />
                    Skill-building Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Classes focused on developing life skills and enhancing independence.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Outings */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Community Outings</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tree className="h-6 w-6 mr-2 text-primary" />
                    Nature Walks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Regular outings to local parks and nature reserves for fresh air and gentle exercise.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bus className="h-6 w-6 mr-2 text-primary" />
                    Cultural Excursions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Visits to museums, art galleries, and local attractions to broaden horizons and stimulate minds.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Store className="h-6 w-6 mr-2 text-primary" />
                    Shopping Trips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Supervised visits to local stores to practice life skills and enjoy community integration.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Community Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Participation in local festivals, fairs, and community gatherings to foster social connections.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-primary" />
                    Volunteer Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Engaging in local volunteer work to give back to the community and build self-esteem.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-primary" />
                    Dining Out Experiences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Regular visits to local restaurants to practice social skills and enjoy diverse cuisines.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003B5C] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience Quality Care at HAGH
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Join our caring community and discover how we can support you or your loved one in achieving their full potential for health and well-being.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}