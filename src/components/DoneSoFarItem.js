import React from 'react';
import DoneSoFarItemContent from '../components/DoneSoFarItemContent';

const svgLogoStyle = {
    width: "100%",
    height: "100%",
}

const DoneSoFarItem = ({ item }) => (
    <div className="content-container">
    <div className="done-so-far-item">
        <div className="square">
            <div className="content"> 
                <img src={item.imageLink} style={svgLogoStyle} />
            </div>
        </div>
        <DoneSoFarItemContent {...item}/>
    </div>
    </div>
);

export default DoneSoFarItem;