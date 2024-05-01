import event_list from '@/api/event_list';
import { Event } from '@/types/event';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturesBlocks({ posts }: { posts: Event[] }) {
  return (
    <section className='relative pt-12'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='pointer-events-none absolute inset-0 top-1/4 bg-green-600 md:mt-24 lg:mt-0'
        aria-hidden='true'
      ></div>
      <div className='absolute bottom-0 left-0 right-0 m-auto h-20 w-px translate-y-1/2 transform bg-gray-200 p-px'></div>

      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
            <h2 className='h2 mb-4'>Event Terbaru</h2>
            <p className='text-xl text-gray-600'>
              Lihat dan ikuti event terbaru dari SurabayaDev
            </p>
          </div>

          {/* Items */}
          <div className='mx-auto grid max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-1 lg:max-w-none'>
            {/* 1st item */}

            {posts.map(
              (post, index) =>
                index < 3 && (
                  <div
                    key={post.id}
                    className='relative mb-8 flex flex-col items-center rounded bg-white shadow-xl md:flex-row md:items-start'
                  >
                    <div className='basis-2/5 md:h-72 '>
                      <Image
                        className='rounded'
                        src={
                          post.logo != null
                            ? post.logo.original.url
                            : 'https://iili.io/HPGls5u.md.png'
                        }
                        alt='Poster Image'
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
                        {new Date(post.start.local).toLocaleDateString(
                          'id-ID',
                          {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          }
                        )}
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
                )
            )}

            <div className='mt-7 text-center'>
              <Link
                className='btn inline-flex items-center rounded bg-green-900 px-4 py-2 text-white hover:bg-gray-800'
                href='/event'
              >
                <span>Lihat Selengkapnya</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
