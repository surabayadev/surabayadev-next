import { useState } from 'react';
export const metadata = {
  title: 'Event - Surabayadev',
  description: 'Page description',
};

import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import { eventbriteAPIKey } from '@/constant/env';
import Head from 'next/head';
import event_list from '@/api/event_list';
import { Event } from '@/types/event';


export async function getStaticProps() {
  const API_URL = "https://www.eventbriteapi.com/v3/organizations/54649742978/events?order_by=start_desc";
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': 'Bearer 3KRZDGMP2VHUUVW2XHCG',
    }
  });
  const result = await response.json()
  const posts = result.events;


  return {
    props: {
      posts,
    },
  }
}

export default function Event({ posts }: { posts: Event[] }) {
  return (
    <Layout>
      <Head>
        <title>Event List</title>
      </Head>
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-green-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>

        <div className="container max-w-screen-xl mx-auto px-4 pt-32 pb-12">
          <section className="relative">
            <div className="text-center py-0 lg:py-12">
              <h2 className="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl mb-5">
                Event
              </h2>

              <p className="font-normal text-gray-500 text-base md:text-lg lg:text-xl mb-16">
                List event terbaru Surabayadev
              </p>
            </div>
          </section>

          <section className="my-5">
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 items-start md:max-w-2xl lg:max-w-none ">
              {/* 1st item */}

              {posts.map((post) => (
                <div key={post.id} className="relative flex flex-col md:flex-row items-center md:items-start bg-white rounded shadow-xl mb-8">
                  <div className="basis-2/5 md:h-72">
                    <Image src={(post.logo != null) ? post.logo.original.url : 'https://iili.io/HPGls5u.md.png'}
                      alt="Poster Image"
                      className="sm:w-full h-full object-cover mb-6 md:mb-0 md:mr-6 rounded"
                      width={500}
                      height={500}
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        height: '100%',
                      }}
                    />
                  </div>
                  <div className="md:text-left p-4 basis-3/5">
                    <div className="mt-2">
                      <a className="btn outline mr-3 outline-offset-1 outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        {
                          (post.online_event) ? (
                            <span className="">Online Event</span>
                          ) : (
                            <span className="">Offline Event</span>
                          )
                        }
                      </a>

                      <a className="btn outline mr-3 outline-offset-1 outline-green-700 text-green-700 py-1 px-2 rounded inline-flex text-xs items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
                        </svg>

                        {
                          (post.is_free) ? (
                            <span className="">Gratis</span>
                          ) : (
                            <span className="">Offline Event</span>
                          )
                        }
                      </a>

                    </div>

                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-0 mt-3">
                      {post.name.text}
                    </h4>
                    <h4 className="text-sm text-gray-400 leading-snug tracking-tight mb-3">
                      {new Date(post.start.local).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </h4>
                    <p className="text-gray-600">
                      {(post.description.text != null) ? post.description.text.split(' ').slice(0, 40).join(' ') : post.name.text}
                    </p>

                    <Link
                      href={post.url}
                      target="_blank"
                      className="btn text-sm md:mt-15 mt-5 py-2 px-6 text-white bg-green-600 hover:bg-green-800 rounded-full">
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
