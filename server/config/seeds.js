const db = require('./connection');
const { Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { title: 'Original Collage Art' },
        { title: 'Restored Furniture' }
    ]);


    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            title: 'Original Collage Art',
            description:
                'Original collage made with new and vintage magazines - Matte finish.',
            image: 'art1.jpg',
            category: categories[0]._id,
            price: 100.00,
        },
        {
            title: 'Restored furniture',
            description:
                'Bedside drawers restored in the colour black - Gloss finish.',
            image: 'furniture1.jpg',
            category: categories[1]._id,
            price: 65.00,
        },
        {
            title: 'Orignal Collage 2',
            description:
                'Original magazine collage - Matte finish.',
            image: 'art2.jpg',
            category: categories[0]._id,
            price: 80.00,
        },
        {
            title: 'Restored furniture 2',
            description:
                'Step stool restored in the colour black featuring floral decoupage - Matte finish.',
            image: 'furniture2.jpg',
            category: categories[0]._id,
            price: 60.00,
        }
    ]);

    console.log('products seeded');

    process.exit();
});