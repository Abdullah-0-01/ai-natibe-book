import React from 'react';
import Layout from '@theme/Layout';
import HomeHero from '../components/custom/HomeHero';
import BookPreview from '../components/custom/BookPreview';

function HomePage() {
  return (
    <Layout
      title="Home"
      description="AI-Native Driven Development - Premium Book Website">
      <main>
        <HomeHero />
        <BookPreview />
      </main>
    </Layout>
  );
}

export default HomePage;