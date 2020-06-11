import React from 'react';

import { Page, Layout } from '@shopify/polaris';

import UploadDoc from './components/UploadDoc';
import DownloadDoc from './components/DownloadDoc';

function App() {
  return (
    <Page title="IPFS Demo">
      <Layout>
        <UploadDoc />
        <DownloadDoc />
      </Layout>
    </Page>
  );
}

export default App;