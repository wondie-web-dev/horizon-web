"use client";
import Link from "next/link"
import React from 'react'
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/admissions", label: "Admissions" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];
  
  function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
  
    return (
    //   <header className="flex justify-between sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <header className='flex items-center justify-between px-6 py-4 h-[50px] '>
        <div className="lg:pl-[10%] sm:pl-[2%] container flex h-16 items-center">
        {/* <nav className="ml-auto flex gap-4 sm:gap-6"> */}
        <nav className="container flex h-16 items-center">
        <Logo />
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:pl-[26%] sm:pl-[5%]">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
  
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === route.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
        </div>
      </header>
    );
  }
export default HeaderNav

// const routes = [

//     {
//         name: "Home",
//         href: "/",
//     },
//     {
//         name: "Services",
//         href: "services",
//     },
//     {
//         name: "About",
//         href: "about",
//     },
//     {
//         name: "Gallery",
//         href: "gallery",
//     },
//     {
//         name: "Contact",
//         href: "contact",
//     },
// ]
// function HeaderNav() {
//     return (
//         <>
//             {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> */}
//             <header className='flex items-center justify-between px-6 py-4 h-[50px] container'>
//                 <div className="lg:pl-[10%] container flex h-16 items-center">
//                     <Logo />
//                     <nav className="ml-auto flex gap-4 sm:gap-6">
//                         {routes.map((route) => (
//                             <Link key={route.href} href={route.href} className="text-sm font-medium hover:text-primary">
//                                 {route.name}
//                             </Link>
//                         ))}
//                     </nav>
//                 </div>
//             </header>
//         </>
//     )
// }
