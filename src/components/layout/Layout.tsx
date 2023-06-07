import AOS from 'aos'
import * as React from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';



export default function Layout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  // Put Header or Footer Here
  return <>

    <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header />
      {children}
    </div>

    <Footer />


  </>;
}
