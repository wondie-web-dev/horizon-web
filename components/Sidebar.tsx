"use client";

import { HomeIcon } from 'lucide-react';
import React from 'react'
import Logo from './Logo';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const routes = [
    {
        href: "/",
        label: "Home",
        icons: HomeIcon
    },
    {
        href: "/about",
        label: "About Us",
        icons: HomeIcon
    },
    {
        href: "/services",
        label: "Services",
        icons: HomeIcon
    },
    {
        href: "/contact",
        label: "Contact Us",
        icons: HomeIcon
    }
];

function DesktopSidebar() {
  return (
    <div className='hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-auto
    w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate'>
        <div className='flex items-center justify-center gap-2 border-b-[1px] border-separate p-4'>
            <Logo/>
        </div>
        <div className='flex flex-col p-2'>
            {routes.map((route) => (
               <Link key={route.href} href={route.href} className={buttonVariants({})}>
                <route.icons size={20} />
                {route.label}
               </Link> 
            ))}
        </div>
    </div>
  )
}

export default DesktopSidebar