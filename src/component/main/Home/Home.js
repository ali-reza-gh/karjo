import { LegacyCard, Layout, Page } from '@shopify/polaris';
import React from 'react';

export default function Home() {
  return (
    <div className='mt-8 min-w-[900px]' >
      <Page fullWidth>
        <Layout sectioned>
          <LegacyCard title="Home" sectioned>
            <p>Welcome Home ;)</p>
          </LegacyCard>
        </Layout>
      </Page>
    </div>
  );
}