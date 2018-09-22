import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreviewItem = ({ title, subtitle, summary, readLink, githubLink, demoLink }) => (
    <div className="post-container">
        <div className="post-preview">
            <h1 className="post-preview__title">{title}</h1>
            <h2 className="post-preview__subtitle">{subtitle}</h2>
            <p className="post-preview__summary">{summary}</p>
            {
                readLink ? <Link style={{ marginRight: "5px" }} to={readLink}>Read</Link> : null
            }
            {
                githubLink ? <a style={{ marginRight: "5px" }} href={githubLink} target="_blank" >Github</a> : null
            }
            {
                demoLink ? <a style={{ marginRight: "5px" }} href={demoLink} target="_blank" >Demo</a> : null
            }
        </div>
    </div>
);

export default BlogPreviewItem;