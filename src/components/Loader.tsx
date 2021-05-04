import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={270}
        height={406}
        viewBox="0 0 270 406"
        backgroundColor="#645c5e"
        foregroundColor="#838383"
    >
        <rect x="-2" y="1" rx="5" ry="5" width="270" height="406" />
    </ContentLoader>
);

export default MyLoader;

// backgroundColor="#645c5e"
// foregroundColor="#838383"