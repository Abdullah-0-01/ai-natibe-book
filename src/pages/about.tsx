import React from 'react';
import Layout from '@theme/Layout';

function AboutPage() {
  return (
    <Layout
      title="About"
      description="Learn more about the author and vision behind the AI-Native Book.">
      <main>
        <div className="container padding-top--md padding-bottom--lg">
          <h1>About the Author & Vision</h1>
          <p>
            Welcome to the world of AI-Native Driven Development. I am Qaimudin Khuwaja, a passionate Developer in the field of Artificial Intelligence and Cloud-Native technologies. With over 2 years of experience in architecting and implementing complex software systems, I've witnessed firsthand the transformative power of AI when integrated seamlessly into the development lifecycle.
          </p>
          <p>
            My vision for this book is to demystify AI-Native development, providing a clear roadmap for developers, architects, and organizations to build intelligent, adaptive, and autonomous systems from the ground up. It's about moving beyond simply "using" AI to fundamentally "thinking" in an AI-Native way. I believe that by embracing these principles, we can unlock unprecedented levels of innovation and create software that not only solves problems but intelligently evolves with them.
          </p>
          <p>
            This book is a culmination of extensive research, practical experience, and a deep dive into the evolving landscape of AI and cloud computing. I hope it serves as your comprehensive guide to mastering AI-Native Driven Development.
          </p>
          {/* Further content about author and vision will go here */}
        </div>
      </main>
    </Layout>
  );
}

export default AboutPage;
