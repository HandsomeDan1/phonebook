import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width={500}
        height={340}
        viewBox="0 0 500 340"
        backgroundColor="#f3f3f3"
        foregroundColor="#b8b6b6"
        {...props}
    >
        <rect x="12" y="12" rx="0" ry="0" width="500" height="340" />
    </ContentLoader>
);

export default MyLoader

