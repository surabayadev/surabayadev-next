import Image from 'next/image';

import Layout from '@/components/layout/Layout';

import teams from './teams';

// import { useState } from "react";

export default function AboutUs() {
  // const [tab, setTab] = useState<number>(1);

  return (
    <Layout>

      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-green-50">
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
                tahun 2010 <br /> dan merupakan wadah untuk belajar dan kolaborasi
                di Kota Surabaya
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 lg:mb-24">

              <div className="card">
                <div className="text-center mb-20 lg:mb-0">
                  <div className="flex justify-center mb-5">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.59 14.0726L15.42 18.0526M15.41 7.07262L8.59 11.0526M21 5.56262C21 7.21948 19.6569 8.56262 18 8.56262C16.3431 8.56262 15 7.21948 15 5.56262C15 3.90577 16.3431 2.56262 18 2.56262C19.6569 2.56262 21 3.90577 21 5.56262ZM9 12.5626C9 14.2195 7.65685 15.5626 6 15.5626C4.34315 15.5626 3 14.2195 3 12.5626C3 10.9058 4.34315 9.56262 6 9.56262C7.65685 9.56262 9 10.9058 9 12.5626ZM21 19.5626C21 21.2195 19.6569 22.5626 18 22.5626C16.3431 22.5626 15 21.2195 15 19.5626C15 17.9058 16.3431 16.5626 18 16.5626C19.6569 16.5626 21 17.9058 21 19.5626Z"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    </svg>
                  </div>

                  <h3 className="font-medium text-gray-900 text-lg lg:text-xl mb-2">
                    Social Media Marketing
                  </h3>

                  <p className="font-normal text-gray-500 text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor incididunt <br /> ut labore et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="text-center">
                  <div className="flex justify-center mb-5">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 2.56262H6C5.46957 2.56262 4.96086 2.77334 4.58579 3.14841C4.21071 3.52348 4 4.03219 4 4.56262V20.5626C4 21.0931 4.21071 21.6018 4.58579 21.9768C4.96086 22.3519 5.46957 22.5626 6 22.5626H18C18.5304 22.5626 19.0391 22.3519 19.4142 21.9768C19.7893 21.6018 20 21.0931 20 20.5626V8.56262M14 2.56262L20 8.56262M14 2.56262V8.56262H20M16 13.5626H8M16 17.5626H8M10 9.56262H8"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    </svg>
                  </div>

                  <h3 className="font-medium text-gray-900 text-lg lg:text-xl mb-2">
                    Content Writing
                  </h3>

                  <p className="font-normal text-gray-500 text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor incididunt <br /> ut labore et
                    dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="relative">
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
              <div className="w-full rounded hover:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="w-full rounded hover:opacity-50">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="w-full rounded hover:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="w-full rounded hover:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="w-full rounded hover:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="w-full rounded hover:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
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
              <div className="grid grid-cols md:grid-cols-4 gap-4">
                {teams.map((team) => (
                  <div className="flex flex-col border rounded-lg overflow-hidden bg-white" key={team.name}>
                    <Image
                      src={team.image}
                      width={400}
                      height={400}
                      className="object-fill hover:opacity-70"
                      alt={team.name + ' ' + team.role}
                    />
                    <div className="flex flex-col p-2 pb-6">
                      <div className="flex justify-start">
                        <a
                          href={team.linkedin}
                          className="text-lg mb-4 font-medium hover:underline hover:opacity-70 line-clamp-2  text-green-600">
                          {team.name}
                        </a>
                      </div>
                      <div className="flex flex-col items-start space-y-2 text-sm">
                        <span className="flex items-center gap-2">
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
