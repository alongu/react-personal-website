import React from 'react';
import BlogPreviewItem from './BlogPreviewItem';
import RemoteControlledCar from '../projects/RemoteControlledCar';

const BlogPage = () => (
    <div className="content-container">
        <BlogPreviewItem {...RemoteControlledCar}/>
    </div>
);

export default BlogPage;