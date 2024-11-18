import React from "react"
import Link from "next/link"
import { Heart, Phone, Mail, MapPin } from 'lucide-react'

function Footer() {
  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/work-in-progress",
    },
    {
      name: "About",
      href: "/work-in-progress",
    },
    {
      name: "Gallery",
      href: "/work-in-progress",
    },
    {
      name: "Contact",
      href: "/work-in-progress",
    },
  ]
  return (
    <footer className="w-full py-12 bg-background">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-semibold">Horizon Adult Home Care</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing compassionate 24-hour care for adults with IDD/DDS diagnostics in a supportive,
              home-like environment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {routes.map((route) => (
                  <Link key={route.href} href={route.href} className="text-sm hover:text-primary">
                    {route.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <Link className="flex items-center hover:text-primary" href="tel:(503) 427-2346">
                  <Phone className="mr-2 h-4 w-4" />
                  (503) 427-2346
                </Link>
                <Link
                  className="flex items-center hover:text-primary"
                  href="mailto: teferaafh@gmail.com"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  teferaafh@gmail.com
                </Link>
                <div className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 mt-0.5" />
                  <span>
                    10117 SE Sunnyside RD  Suite F1234 
                    <br />
                    Clackamas, OR 97015
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 Horizon Adult Group Home. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer