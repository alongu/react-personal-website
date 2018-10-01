import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectPreviewContent from './ProjectPreviewContent';

const svgLogoStyle = {
    width: "100%",
    height: "100%",
}

const ProjectPreview = ({ item }) => (
    <div>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="content-container">
                <div className="done-so-far-item">
                    <div className="done-so-far-item__imageblock__wrapper">
                        <div className="done-so-far-item__imageblock">
                            <div className="square">
                                <div className="content">
                                    <img src={item.imageLink} style={svgLogoStyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProjectPreviewContent {...item} />
                </div>
            </div>
        </ScrollAnimation>
    </div>
);

export default ProjectPreview;
