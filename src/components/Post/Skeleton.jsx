import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonPost = props => (
    <ContentLoader
        speed={1.7}
        width={350}
        height={330}
        viewBox="0 0 350 330"
        backgroundColor="#f0f0f0"
        foregroundColor="#d6d6d6"
        {...props}
    >
        <rect x="1" y="1" rx="12" ry="12" width="344" height="325" />
    </ContentLoader>
);

export default SkeletonPost;
