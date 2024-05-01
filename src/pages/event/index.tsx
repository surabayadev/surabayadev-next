export const metadata = {
  title: 'Event - Surabayadev',
  description: 'Page description',
};

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import { Event as EventType } from '@/types/event';

// export async function getStaticProps() {
//   const API_URL = "https://www.eventbriteapi.com/v3/organizations/54649742978/events?order_by=start_desc";
//   const response = await fetch(API_URL, {
//     headers: {
//       'Authorization': 'Bearer 3KRZDGMP2VHUUVW2XHCG',
//     }
//   });
//   const result = await response.json()
//   const posts = result.events;

//   return {
//     props: {
//       posts,
//     },
//   }
// }

export async function getStaticProps() {
  const API_URL =
    'https://www.eventbriteapi.com/v3/organizations/54649742978/events?order_by=start_desc';
  const response = await fetch(API_URL, {
    headers: {
      Authorization: 'Bearer 3KRZDGMP2VHUUVW2XHCG',
    },
  });
  const result = await response.json();
  const posts = result.events;

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60,
  };
}

export default function Event({ posts }: { posts: EventType[] }) {
  return (
    <Layout>
      <Head>
        <title>Event List</title>
      </Head>
      <section className='bg-gradient-to-b from-gray-100 to-white'>
        <div className='absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-green-50'>
          <div className='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white'></div>
          <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white'></div>
        </div>

        <div className='container mx-auto max-w-screen-xl px-4 pb-12 pt-32'>
          <section className='relative'>
            <div className='py-0 text-center lg:py-12'>
              <h2 className='mb-5 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
                Event
              </h2>

              <p className='mb-16 text-base font-normal text-gray-500 md:text-lg lg:text-xl'>
                List event terbaru Surabayadev
              </p>
            </div>
          </section>

          <section className='my-5'>
            {/* Items */}
            <div className='mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-1 lg:max-w-none '>
              {/* 1st item */}

              {posts.map((post) => (
                <div
                  key={post.id}
                  className='relative mb-8 flex flex-col items-center rounded bg-white shadow-xl md:flex-row md:items-start'
                >
                  <div className='basis-2/5 md:h-72'>
                    <Image
                      src={
                        post.logo != null
                          ? post.logo.original.url
                          : 'https://iili.io/HPGls5u.md.png'
                      }
                      alt='Poster Image'
                      className='mb-6 h-full rounded object-cover sm:w-full md:mb-0 md:mr-6'
                      width={500}
                      height={500}
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        height: '100%',
                      }}
                    />
                  </div>
                  <div className='basis-3/5 p-4 md:text-left'>
                    <div className='mt-2'>
                      <a className='btn mr-3 inline-flex items-center rounded px-2 py-1 text-xs text-green-700 outline outline-offset-1 outline-green-700'>
                        <svg
                          className='mr-2 h-4 w-4'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                          ></path>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                          ></path>
                        </svg>
                        {post.online_event ? (
                          <span className=''>Online Event</span>
                        ) : (
                          <span className=''>Offline Event</span>
                        )}
                      </a>

                      <a className='btn mr-3 inline-flex items-center rounded px-2 py-1 text-xs text-green-700 outline outline-offset-1 outline-green-700'>
                        <svg
                          className='mr-2 h-4 w-4'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z'
                          ></path>
                        </svg>

                        {post.is_free ? (
                          <span className=''>Gratis</span>
                        ) : (
                          <span className=''>Offline Event</span>
                        )}
                      </a>
                    </div>

                    <h4 className='mb-0 mt-3 text-xl font-bold leading-snug tracking-tight'>
                      {post.name.text}
                    </h4>
                    <h4 className='mb-3 text-sm leading-snug tracking-tight text-gray-400'>
                      {new Date(post.start.local).toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </h4>
                    <p className='text-gray-600'>
                      {post.description.text != null
                        ? post.description.text
                            .split(' ')
                            .slice(0, 40)
                            .join(' ')
                        : post.name.text}
                    </p>

                    <Link
                      href={post.url}
                      target='_blank'
                      className='btn md:mt-15 mt-5 rounded-full bg-green-600 px-6 py-2 text-sm text-white hover:bg-green-800'
                    >
                      Detail Event
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
