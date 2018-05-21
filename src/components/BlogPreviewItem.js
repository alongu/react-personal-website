import React from 'react';

const BlogPreviewItem = ({ title, subtitle, summary, link }) => (
    <div className="post-container">
        <div className="post-preview">
            <h1 className="post-preview__title">{title}</h1>
            <h2 className="post-preview__subtitle">{subtitle}</h2>
            <p className="post-preview__summary">{summary}</p>
            <button>Read</button>
        </div>
    </div>
);

export default BlogPreviewItem;