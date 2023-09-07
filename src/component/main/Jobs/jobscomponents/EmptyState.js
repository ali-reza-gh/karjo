import {LegacyCard, EmptyState} from '@shopify/polaris';
import React from 'react';

 const EmptyStateComponent=()=> {
  return (
    <LegacyCard sectioned>
      <EmptyState
        heading="Enter a job to get started"
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        fullWidth
      >
        <p>
          You can use the Files section to upload images, videos, and other
          documents. This example shows the content with a centered layout and
          full width.
        </p>
      </EmptyState>
    </LegacyCard>
  );
}
export default EmptyStateComponent;