import * as React from 'react';

import Features from '@/components/Features';
import FeaturesBlocks from '@/components/FeaturesBlocks';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Testimonials from '@/components/Testimonials';

import { Event } from '@/types/event';


export async function getStaticProps() {
  const API_URL = "https://www.eventbriteapi.com/v3/organizations/54649742978/events?order_by=start_desc";
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': 'Bearer 3KRZDGMP2VHUUVW2XHCG',
    }
  });
  const result = await response.json();
  const posts = result.events;

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60, // Revalidate every hour
  };
}


export default function HomePage({ posts }: { posts: Event[] }) {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Hero />
      <Features />
      <FeaturesBlocks posts={posts} />
      <Testimonials />
    </Layout>
  );
}
