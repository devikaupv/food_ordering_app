const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://localhost://27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);
        let imageUrls = [
            'https://res.cloudinary.com/dm99ca13b/image/upload/v1688993404/breaky-dosa_z7lqcy.jpg',
            'https://res.cloudinary.com/dm99ca13b/image/upload/v1688993623/breaky-idly_pwp1qf.png',
            'https://res.cloudinary.com/dm99ca13b/image/upload/v1688993633/breaky-puri_fs0e8d.png',
            'https://res.cloudinary.com/dm99ca13b/image/upload/v1688993637/breaky-chai_vhysq7.png',
        ]
        let products = [];
        for (let i = 0; i < 10; i+=1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
