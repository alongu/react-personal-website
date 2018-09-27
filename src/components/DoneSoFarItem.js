import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import DoneSoFarItemContent from '../components/DoneSoFarItemContent';

const svgLogoStyle = {
    width: "100%",
    height: "100%",
}

class DoneSoFarItem extends React.Component {
    render() {
        return (
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="content-container">
                        <div className="done-so-far-item">
                            <div className="done-so-far-item__imageblock__wrapper">
                                <div className="done-so-far-item__imageblock">
                                    <div className="square">
                                        <div className="content">
                                            <img src={this.props.item.imageLink} style={svgLogoStyle} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DoneSoFarItemContent {...this.props.item} />
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default DoneSoFarItem;