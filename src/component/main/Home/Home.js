import {LegacyCard, Layout, Page } from '@shopify/polaris';
import React from 'react';

export default function Home() {
  return (
    <Page fullWidth>
    <Layout sectioned>
    <LegacyCard title="Home" sectioned>
      <p>Alireza home .</p>
    </LegacyCard>   
       </Layout>
    </Page>
  );
}