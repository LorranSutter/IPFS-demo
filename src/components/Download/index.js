import React from 'react';
import { Layout, Card } from '@shopify/polaris';

import ipfs from '../../ipfs';

const Download = () => {

    (async () => {
        for await (const fileIPFS of ipfs.get('QmWW8VUDVYmLAEP2rDJSUmLLjzhYBPAzgxD7kUkpj3bTaq')) {
            console.log(fileIPFS);
        }
    })();

    return (
        <Layout.Section>
            <Card sectioned title="Download file">
            </Card>
        </Layout.Section>
    );
}

export default Download;