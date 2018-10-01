import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreviewContent = ({ title, subtitle, summary, readLink, githubLink, demoLink }) => (
    <div className="done-so-far-item-content">
        <a className="done-so-far-item-content--link" href={readLink}>{title}</a>
        <p className="done-so-far-item-content--location" style={{ paddingTop: "10px" }}>{subtitle}</p>
        <p className="done-so-far-item-content--empty-line" >&nbsp;</p>
        {summary}
        {
            readLink ? <Link className="button" to={readLink}>Read</Link> : null
        }
        {
            demoLink ? <a className="button" href={demoLink} target="_blank" >Demo</a> : null
        }
        {
            githubLink ? <a className="button" href={githubLink} target="_blank" >Github</a> : null
        }
    </div>
);

export default ProjectPreviewContent;