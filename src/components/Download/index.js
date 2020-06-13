import React, { useState, useCallback } from 'react';
import { Layout, Card, TextField, FormLayout, Button } from '@shopify/polaris';

const Download = () => {

    const [hash, setHash] = useState();

    const handleChange = useCallback(hash => setHash(hash), []);

    return (
        <Layout.Section>
            <Card sectioned title="Download file">
                <FormLayout>
                    <TextField label="Input hash" placeholder="Hash" value={hash} onChange={handleChange} />
                    <a
                        href={`http://127.0.0.1:8080/ipfs/${hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                        download
                    >
                        <Button primary>Download</Button>
                    </a>
                </FormLayout>
            </Card>
        </Layout.Section>
    );
}

export default Download;