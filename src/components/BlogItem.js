import React from 'react';

const BlogItem = ({ title, subtitle, summary, article }) => (
    <div className="content-container">
        <h1 className="post-preview__title">{title}</h1>
        <h2 className="post-preview__subtitle">{subtitle}</h2>
        <p className="post-page">{summary}</p>
        {article}
    </div>
);

export default BlogItem;