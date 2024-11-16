import Link from "next/link"
import React from 'react'

// import { Heart } from 'lucide-react'
import Logo from "./Logo"
const routes = [

    {
        name: "Home",
        href: "/",
    },
    {
        name: "Services",
        href: "services",
    },
    {
        name: "About",
        href: "about",
    },
    {
        name: "Gallery",
        href: "gallery",
    },
    {
        name: "Contact",
        href: "contact",
    },
]
function HeaderNav() {
    return (
        <>
            {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> */}
            <header className='flex items-center justify-between px-6 py-4 h-[50px] container'>
                <div className="lg:pl-[10%] container flex h-16 items-center">
                    {/* <Heart className="h-6 w-6 text-primary" />
          <span>Caring Hearts Home</span> */}
                    <Logo />
                    <nav className="ml-auto flex gap-4 sm:gap-6">
                        {routes.map((route) => (
                            <Link key={route.href} href={route.href} className="text-sm font-medium hover:text-primary">
                                {route.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}

export default HeaderNav