import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreviewItem = ({ title, subtitle, summary, link }) => (
    <div className="post-container">
        <div className="post-preview">
            <h1 className="post-preview__title">{title}</h1>
            <h2 className="post-preview__subtitle">{subtitle}</h2>
            <p className="post-preview__summary">{summary}</p>
            <Link style={{ marginRight: "5px" }} to={link}>Read</Link>
            <Link style={{ marginRight: "5px" }} to={link}>Github</Link>
            <Link style={{ marginRight: "5px" }} to={link}>Demo</Link>
        </div>
    </div>

);

export default BlogPreviewItem;