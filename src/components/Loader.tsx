import React from "react";
import ContentLoader from "react-content-loader";

export const Loader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={185}
        height={290}
        viewBox="0 0 185 290"
        backgroundColor="#ebeaea"
        foregroundColor="#ecebeb"
    >
        <circle cx="73" cy="57" r="55" />
        <rect x="23" y="121" rx="0" ry="0" width="102" height="22" />
        <rect x="24" y="154" rx="0" ry="0" width="43" height="18" />
        <rect x="84" y="154" rx="0" ry="0" width="43" height="18" />
    </ContentLoader>
)
