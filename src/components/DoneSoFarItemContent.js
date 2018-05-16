import React from 'react';

const DoneSoFarItemContent = ({ pageName, hrefLink, title, location, description }) => (
    <div className="done-so-far-item-content">
        <a className="done-so-far-item-content__link" href={hrefLink}>{pageName}</a>
        <p className="done-so-far-item-content__title">{title}</p>
        <p className="done-so-far-item-content__location">{location}</p>
        <p className="done-so-far-item-content__empty-line" >&nbsp;</p>
        <p>{description}</p>
    </div>
);

export default DoneSoFarItemContent;