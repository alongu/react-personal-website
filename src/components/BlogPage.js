import React from 'react';
import BlogPreviewItem from './BlogPreviewItem';
import CI from '../articles/ContinousIntegration';
import OtherArticle from '../articles/OtherArticle';

const BlogPage = () => (
    <div className="content-container">
        <BlogPreviewItem {...CI}/>
        <BlogPreviewItem {...OtherArticle}/>
    </div>
);

export default BlogPage;