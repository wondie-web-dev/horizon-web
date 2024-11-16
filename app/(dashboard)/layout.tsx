"use client";
import Footer from '@/components/Footer';
import HeaderNav from '@/components/Header';
import { ThemeProvider } from '@/components/Theme-Provider';
import { Toaster } from '@/components/ui/toaster';
import { Separator } from '@radix-ui/react-separator';
// import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react'
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//     title: 'Horizon AGH - Adult Residential Care Home',
//     description: 'Specialized 24-hour residential care for adults with IDD/DDS diagnostics, providing compassionate support and enriching experiences.',
//     keywords: 'residential care, IDD care, DDS care, adult care home, behavioral therapy, assisted living',
// };


const inter = Inter({ subsets: ['latin'] });
function Layout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
      }, []);
      
      if (!isMounted) {
        return null; // Or a loading state
      }
    return (
        <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <HeaderNav />
            <Separator />

            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
        // <div className='flex h-screen'>
        //     <div className='flex flex-col flex-1 min-h-screen'>
        //         <HeaderNav />
        //         <Separator />
        //         <main className='flex-1 py-4 text-accent-foreground'>
        //             {children}
        //         </main>
        //         <Footer />

        //     </div>
        // </div>
    );
}

export default Layout
