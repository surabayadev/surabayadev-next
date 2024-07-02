import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import TeamsSection from './components/teams_section';

import galery from '@/api/galery';

export default function AboutUs() {

  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <section className='bg-gradient-to-b from-gray-100 to-white'>
        <div className='absolute inset-x-0 -bottom-80 -top-48 overflow-hidden bg-green-50 lg:-bottom-14'>
          <div className='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white'></div>
          <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white'></div>
        </div>

        <div className='container mx-auto max-w-screen-xl px-4 pb-12 pt-32'>
          <section className='relative'>
            <div className='py-0 text-center lg:py-12'>
              <h2 className='mb-5 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
                Tentang Kami
              </h2>

              <p className='mb-16 text-base font-normal text-gray-500 md:text-lg lg:text-xl'>
                SurabayaDev merupakan komunitas teknologi yang dibentuk sejak
                tahun 2014 <br /> dan merupakan wadah untuk belajar dan
                kolaborasi di Kota Surabaya
              </p>
            </div>

            <div className='mb-12 grid grid-cols-1 lg:mb-24 lg:grid-cols-3'>
              <div className='card'>
                <div className='mb-20 text-center lg:mb-0'>
                  <div className='mb-5 flex justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                        stroke='#3B82F6'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </div>

                  <h3 className='mb-2 text-lg font-medium text-gray-900 lg:text-xl'>
                    Memperluas Koneksi
                  </h3>

                  <p className='px-12 text-sm font-normal text-gray-500 lg:text-base'>
                    Memperluas relasi melalui komunitas untuk menjalin
                    kebermanfaatan.
                  </p>
                </div>
              </div>

              <div className='card'>
                <div className='mb-20 text-center lg:mb-0'>
                  <div className='mb-5 flex justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
                        stroke='#3B82F6'
                      />
                    </svg>
                  </div>

                  <h3 className='mb-2 text-lg font-medium text-gray-900 lg:text-xl'>
                    Berbagi Ilmu
                  </h3>

                  <p className='px-10 text-sm font-normal text-gray-500 lg:text-base'>
                    Menjadi wadah yang tepat untuk bisa saling berbagi ilmu,
                    pengalaman maupun wawasantentang update teknologi.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='mb-20 text-center lg:mb-0'>
                  <div className='mb-5 flex justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                        stroke='#3B82F6'
                      />
                    </svg>
                  </div>

                  <h3 className='mb-2 text-lg font-medium text-gray-900 lg:text-xl'>
                    Wadah Belajar
                  </h3>

                  <p className='px-10 text-sm font-normal text-gray-500 lg:text-base'>
                    Menjadi wadah belajar pegiat IT untuk bisa terus update
                    mengenai tech industry saat ini.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className='relative'>
            <div className='container mx-auto space-y-2 lg:grid lg:grid-cols-3 lg:gap-2 lg:space-y-0'>
              {galery.map((item, index) => (
                <div
                  className='flex w-full items-center rounded hover:shadow-2xl'
                  key={index}
                >
                  <Image
                    src={item.image}
                    alt='image'
                    width={500}
                    height={500}
                    className='h-full w-full object-cover'
                    priority={true}
                  />
                  {/* <img src={item.image} alt="image" /> */}
                </div>
              ))}
            </div>
          </section>

          {/* Teams */}
          <TeamsSection />

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
