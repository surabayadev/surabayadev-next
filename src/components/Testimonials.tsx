'use client';

import Image from 'next/image'
// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestimonialImage from '~/images/testimonial.jpg'
import JagoanHostingImage from '~/images/supports/jagoan-hosting.webp'
import MicrosoftImage from '~/images/supports/microsoft.png'
import CakapImage from '~/images/supports/cakap.png'
import DailySocialImage from '~/images/supports/dailysocial.png'

import AlibabaImage from '~/images/supports/compart/alibaba.png'
import AwsImage from '~/images/supports/compart/aws.png'
import BackendNgalamImage from '~/images/supports/compart/backendngalam.png'
import MozillaImage from '~/images/supports/compart/mozilla.png'
import PasuruanDevImage from '~/images/supports/compart/pasuruandev.png'
import PatrisDevImage from '~/images/supports/compart/patrisdev.png'
import KlasImage from '~/images/supports/compart/klas.png'
import SurabayaJsImage from '~/images/supports/compart/surabayajs.png'
import Tokped from '~/images/supports/compart/tokped.png'
import TulungagungImage from '~/images/supports/compart/tulungagungdev.jpg'


export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Terima kasih telah bekerja sama dengan <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400">SurabayaDev</span></h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Kami sangat terbuka apabila kamu ingin berkolaborasi baik itu berupa pemateri, audience, maupun media partner</p>
          </div> */}

          <div className="text-center">
            <h2 className="h5 mb-6 text-gray-400">Website Supported By</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto mb-20">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <div>
                <Image src={JagoanHostingImage} alt="Testimonial 01" className="max-w-full fill-current grayscale text-gray-400" width="124" height="124" />
              </div>
            </div>

          </div>


          {/* <div className="text-center">
            <h2 className="h5 mb-6 text-gray-400">Community Partner</h2>
          </div>

          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5  mb-20">
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={SurabayaJsImage} alt="Testimonial 01" className="max-w-full fill-current grayscale text-gray-400" width="124" height="124" />
            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={PasuruanDevImage} alt="Testimonial 01" className="max-w-full fill-current grayscale text-gray-400" width="80" height="80" />

            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={KlasImage} alt="Testimonial 01" className="max-w-full fill-current grayscale text-gray-400" width="100" height="100" />

            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={PatrisDevImage} alt="Testimonial 01" className="max-w-full fill-current grayscale text-gray-400" width="124" height="124" />

            </div>

            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              <Image src={TulungagungImage} alt="Testimonial 01" className="max-w-full fill-current grayscale text-gray-400" width="124" height="124" />

            </div>

          </div> */}

          {/* Testimonials */}
          {/* <div className='mt-20'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {[1, 2, 3, 4].map((id) => (

                <SwiperSlide key={id}>
                  <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
                    <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                      <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                        <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                          <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                          </svg>
                          <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                        </div>
                        <blockquote className="text-xl font-medium mb-4">
                          “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                        </blockquote>
                        <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                        <div className="text-gray-600">
                          <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                        </div>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}

        </div>
      </div>
    </section>
  )
}