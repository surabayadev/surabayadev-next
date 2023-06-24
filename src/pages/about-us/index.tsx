import Image from 'next/image';

import Layout from '@/components/layout/Layout';

import Head from 'next/head';
import galery from '@/api/galery';
import teams from '@/api/teams';
// import { useState } from "react";

export default function AboutUs() {
  // const [tab, setTab] = useState<number>(1);

  return (
    <Layout>

      <Head>
        <title>About Us</title>
      </Head>
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute inset-x-0 -bottom-80 lg:-bottom-14 -top-48 overflow-hidden bg-green-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>

        <div className="container max-w-screen-xl mx-auto px-4 pt-32 pb-12">
          <section className="relative">
            <div className="text-center py-0 lg:py-12">
              <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl mb-5">
                Tentang Kami
              </h2>

              <p className="font-normal text-gray-500 text-base md:text-lg lg:text-xl mb-16">
                SurabayaDev merupakan komunitas teknologi yang dibentuk sejak
                tahun 2014 <br /> dan merupakan wadah untuk belajar dan kolaborasi
                di Kota Surabaya
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mb-12 lg:mb-24">

              <div className="card">
                <div className="text-center mb-20 lg:mb-0">
                  <div className="flex justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" stroke="#3B82F6"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <h3 className="font-medium text-gray-900 text-lg lg:text-xl mb-2">
                    Memperluas Koneksi
                  </h3>

                  <p className="font-normal text-gray-500 text-sm lg:text-base px-12">
                    Memperluas relasi melalui komunitas untuk menjalin kebermanfaatan.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="text-center mb-20 lg:mb-0">
                  <div className="flex justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" stroke="#3B82F6" />
                    </svg>

                  </div>

                  <h3 className="font-medium text-gray-900 text-lg lg:text-xl mb-2">
                    Berbagi Ilmu
                  </h3>

                  <p className="font-normal text-gray-500 text-sm lg:text-base px-10">
                    Menjadi wadah yang tepat untuk bisa saling berbagi ilmu, pengalaman maupun wawasantentang update teknologi.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="text-center mb-20 lg:mb-0">
                  <div className="flex justify-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" stroke="#3B82F6" />
                    </svg>
                  </div>

                  <h3 className="font-medium text-gray-900 text-lg lg:text-xl mb-2">
                    Wadah Belajar
                  </h3>

                  <p className="font-normal text-gray-500 text-sm lg:text-base px-10">
                    Menjadi wadah belajar pegiat IT untuk bisa terus update mengenai tech industry saat ini.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="relative">
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
              {galery.map((item) => (
                <div className="w-full rounded hover:shadow-2xl flex items-center" key={item.details}>
                  <Image
                    src={item.image}
                    alt="image"
                    width={500}
                    height={500} className="w-full h-full object-cover"
                  />
                  {/* <img src={item.image} alt="image" /> */}
                </div>
              ))}
            </div>
          </section>

          {/* Teams */}
          <section>
            <div className="container mx-auto">
              <div className="text-center py-12 lg:py-24">
                <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl mb-5">
                  Teams
                </h2>
              </div>
              <div className="grid grid-cols md:grid-cols-5 gap-4">
                {teams.map((team) => (
                  <div className="flex flex-col border rounded-lg overflow-hidden bg-white" key={team.name}>
                    <Image
                      src={team.image}
                      width={400}
                      height={400}
                      className="object-fill hover:opacity-70"
                      alt={team.name + ' ' + team.role}
                    />
                    <div className="flex flex-column p-2 pb-6">
                      <div className="flex flex-col flex-grow pt-3 text-center">
                        <a
                          href={team.linkedin}
                          className="text-md mb-0 font-medium hover:opacity-70 line-clamp-2  text-green-600 hover:font-medium">
                          {team.name}
                        </a>
                        <span className="text-sm">
                          <span>{team.role}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* FAQ */}
          {/* <section>
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="text-center py-12 lg:py-24">
                <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl mb-5">
                  FAQ
                </h2>

                <p className="font-normal text-gray-500 text-base lg:text-xl mb-16">
                  Semua yang mungkin ingin kamu tanyakan tentang Surabayadev
                </p>

                <div className="relative text-left">
                  <ul className="ml-10">
                    <li>
                      <Accordion title="Accordion Title" active={false}>
                        <p>Accordion Content</p>
                      </Accordion>
                    </li>
                    <li>
                      <Accordion title="Accordion Title" active={false}>
                        <p>Accordion Content</p>
                      </Accordion>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section> */}


        </div>
      </section>
    </Layout>
  );
}
