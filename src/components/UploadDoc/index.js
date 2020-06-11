import React, { useState } from 'react';
import { Layout, Card } from '@shopify/polaris';

import Dropzone from '../Dropzone';

const UploadDoc = () => {

    const [selectedFile, setSelectedFile] = useState();

    return (
        <Layout.Section>
            <Card sectioned title="Upload Doc">
                <Dropzone onFileUploaded={setSelectedFile} />
            </Card>
        </Layout.Section>
    );
}

export default UploadDoc;