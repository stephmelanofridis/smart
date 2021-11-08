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
                'Original collage art created by myself',
            image: 'placeholder.jpg',
            category: categories[0]._id,
            price: 50.00,
        },
        {
            title: 'Restored furniture',
            description:
                'Antique furniture restored by myself',
            image: 'placeholder.jpg',
            category: categories[1]._id,
            price: 100.00,
        },
        {
            title: 'Orignal Collage 2',
            description:
                'Original collage art created by myself',
            image: 'placeholder.jpg',
            category: categories[0]._id,
            price: 200.00,
        },
        {
            title: 'Restored furniture 2',
            description:
                'Antique furniture restored by myself',
            image: 'placeholder.jpg',
            category: categories[0]._id,
            price: 200.00,
        }
    ]);

    console.log('products seeded');

    process.exit();
});