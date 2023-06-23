import * as React from 'react';

import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Testimonials from '@/components/testimonials';
import event_list from '@/api/event_list';


export async function getStaticProps() {
  const response = await fetch("https://www.eventbriteapi.com/v3/organizations/54649742978/events/?order_by=start_desc&page_size=3", {
    headers: {
      'Authorization': 'Bearer 3KRZDGMP2VHUUVW2XHCG'
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


export default function HomePage({ posts }) {
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
