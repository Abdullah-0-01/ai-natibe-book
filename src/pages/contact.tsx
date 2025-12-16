import React from 'react';
import Layout from '@theme/Layout';
import WaitlistForm from '../components/custom/WaitlistForm';

function ContactPage() {
  return (
    <Layout
      title="Contact"
      description="Get in touch or join our waitlist for the AI-Native Book.">
      <main>
        <div className="container padding-top--md padding-bottom--lg">
          <h1>Contact Us / Join Waitlist</h1>
          <p>
            We'd love to hear from you! You can reach out to us, or join our exclusive waitlist for updates on the AI-Native Book.
          </p>
          <WaitlistForm />
        </div>
      </main>
    </Layout>
  );
}

export default ContactPage;
