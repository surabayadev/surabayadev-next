import * as React from 'react';
import { ReactElement } from 'react';

import Features from '@/components/Features';
import FeaturesBlocks from '@/components/FeaturesBlocks';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Testimonials from '@/components/Testimonials';

import { Event } from '@/types/event';
import Anniversary11 from '@/components/Anniversary11';

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
    revalidate: 60 * 60,
  };
}

type HomePageProps = {
  posts: Event[];
};

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Features />
      <br /><br />
      <Anniversary11 />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;
