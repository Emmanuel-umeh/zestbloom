import React from 'react';
import { getCachedURL } from 'helpers/urls';

const LoadImage = ({ content_type, img, thumbnail }) => {
    return <>{getDataOfFile(content_type, img, thumbnail)}</>;
};

export default LoadImage;

function getDataOfFile(content_type, data, thumbnail) {
    const type = content_type?.split('/')[0];
    switch (type) {
        case 'audio':
        case 'application':
        case 'text':
            return (
                <img src={thumbnail} alt="asset-file" style={{ width: '100%', height: '100%' }} />
            );
        case 'image':
            return (
                <img
                    src={getCachedURL(data, '500x500')}
                    // src={data}
                    alt="asset-file"
                    style={{ width: '100%', height: '100%' }}
                />
            );
        case 'video':
            return (
                <video style={{ width: '100%' }} autoPlay="autoplay" muted loop>
                    <source src={data} type={content_type} />
                </video>
            );
        default:
    }
}
