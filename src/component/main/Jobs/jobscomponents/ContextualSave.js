import { ContextualSaveBar} from '@shopify/polaris';
import React from 'react';

export  function ContextualSave() {
  return (
    <div style={{height: '250px'}}>
        <ContextualSaveBar
          message="Unsaved changes"
          saveAction={{
            onAction: () => console.log('add form submit logic'),
            loading: false,
            disabled: false,
          }}
          discardAction={{
            onAction: () => console.log('add clear form logic'),
          }}
        />

    </div>
  );
}