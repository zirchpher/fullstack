import ProductMemoryService from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
    title: 'Producto Random',
    price: 200,
    description: 'The best product of the web',
    categoryId: 2,
    images: [],
});

const allProducts = productService.getAll();
const productId = allProducts[0].id;

productService.update(productId, {
    title: 'Nuevo título bien cabrón :v',
});

productService.findOne(productId);

console.log(allProducts);
