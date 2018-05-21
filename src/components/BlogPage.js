import React from 'react';
import BlogPreviewItem from './BlogPreviewItem';
import CI from '../articles/ContinousIntegration';

const BlogPage = () => (
    <div className="content-container">
        <BlogPreviewItem {...CI}/>
    </div>
);

export default BlogPage;