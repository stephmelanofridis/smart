const db = require('./connection');
const { Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { title: 'Collage' },
        { title: 'Furniture' }
    ]);


    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            title: 'Original Collage Art',
            description:
                'Original collage art created by myself',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 50.00,
        },
        {
            title: 'Restored furniture',
            description:
                'Antique furniture restored by myself',
            image: 'canned-coffee.jpg',
            category: categories[1]._id,
            price: 100.00,
        }
    ]);

    console.log('products seeded');

    process.exit();
});