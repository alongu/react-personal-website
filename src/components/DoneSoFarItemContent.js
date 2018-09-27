import React from 'react';

const DoneSoFarItemContent = ({ pageName, hrefLink, title, location, description }) => (
    <div className="done-so-far-item-content">
        <a className="done-so-far-item-content--link" href={hrefLink}>{pageName}</a>
        <p className="done-so-far-item-content--title">{title}</p>
        <p className="done-so-far-item-content--location">{location}</p>
        <p className="done-so-far-item-content--empty-line" >&nbsp;</p>
        {description}
    </div>
);

export default DoneSoFarItemContent;