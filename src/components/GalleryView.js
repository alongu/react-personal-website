import React from 'react';
import Gallery from './Gallery';

const IMAGES = [
{
    src: "/images/nature/bulgaria-hiking2.jpg",
    orientation: "square",
    caption: "Ivan Vazov Hut, Bulgaria"
},
{
    src: "/images/nature/bulgaria-hiking1.jpeg",
    orientation: "square",
    caption: "Hiking, Bulgaria"
},

{
    src: "/images/nature/bulgaria-hiking3.jpg",
    orientation: "square",
    caption: "Hiking, Bulgaria"
},
{
    src: "/images/nature/calaniot.jpg",
    orientation: "square",
    caption: "Anemones, Israel"
},
{
    src: "/images/nature/sea-landscape2_1.jpg",
    orientation: "square",
    caption: "Hasharon Reserve, Israel"
},
{
    src: "/images/nature/over-ice-lake.jpg",
    orientation: "portrait",
    caption: "In the Mountains, Swiss"
},
{
    src: "/images/nature/swiss3.jpg",
    orientation: "square",
    caption: "In the Mountains, Swiss"
},
{
    src: "/images/nature/swiss9_1.jpg",
    orientation: "landscape",
    caption: "A Bench, Swiss"
},
{
    src: "/images/nature/swiss7.jpg",
    orientation: "landscape",
    caption: "Relaxing, Swiss"
},
{
    src: "/images/nature/swiss1.jpg",
    orientation: "portrait",
    caption: "In the Mountains, Swiss"
},
{
    src: "/images/nature/cortina.jpg",
    orientation: "square",
    caption: "Cortina de Imprezo, Italy"
},

{
    src: "/images/nature/swiss5.jpg",
    orientation: "square",
    caption: "In the Mountains, Swiss"
},
];

const GalleryView = () => (
    <div style={{ margin: "60px 0px" }}>
        <Gallery images={IMAGES.map(({ caption, src, thumbnailWidth, thumbnailHeight, orientation }) => ({
            src: src,
            orientation,
            thumbnailWidth,
            thumbnailHeight,
			caption
        }))} />
    </div>
);

export default GalleryView;