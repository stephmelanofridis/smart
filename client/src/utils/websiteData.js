/* eslint-disable import/no-anonymous-default-export */
export default {
    landingImage: require('../assets/landing-image.jpeg').default,
    announcementText: 'Free postage on orders over $50',
    carouselImage1: require('../assets/carousel-image-1.jpeg').default,
    carouselText1: require('../assets/carousel-text-collage.svg').default,
    carouselCombo1: require('../assets/carousel-combo-1.jpg').default,
    carouselCombo2: require('../assets/carousel-combo-2.jpg').default,

    categories: [
        {
            id: 1,
            img: require('../assets/collage-art.jpeg').default,
            title: 'Collage Art',
        },
        {
            id: 2,
            img: require('../assets/restored-furniture.jpeg').default,
            title: 'Restored Furniture',
        },
    ],

    popularProducts: [
        {
            id: 1,
            img: require('../assets/placeholder.jpg').default,
        },
        {
            id: 2,
            img: require('../assets/placeholder.jpg').default,
        },
        {
            id: 3,
            img: require('../assets/placeholder.jpg').default,
        },
        {
            id: 4,
            img: require('../assets/placeholder.jpg').default,
        },
    ],

    placeholder: require('../assets/placeholder.jpg').default,
}