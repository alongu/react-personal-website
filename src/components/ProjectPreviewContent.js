import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreviewContent = ({ pageName, title, subtitle, summary, readLink, githubLink, demoLink }) => (
    <div className="done-so-far-item-content">
        <p className="done-so-far-item-content--link">{pageName}</p>
        <p className="done-so-far-item-content--title">{title}</p>
        <p className="done-so-far-item-content--location">{subtitle}</p>
        <p className="done-so-far-item-content--empty-line" >&nbsp;</p>
        {summary}
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
);

export default ProjectPreviewContent;