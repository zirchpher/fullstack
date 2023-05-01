import ProductHttpService from './services/product-http.service';

(async () => {
    try {
        const productService = new ProductHttpService();

        const allProducts = await productService.getAll();
        // console.log(products.length);
        // console.log(products.map((product) => product.price));

        // update
        const firstProductId = allProducts[0].id;
        await productService.update(firstProductId, {
            title: 'Papel Higiénico',
            description: 'New Papel Higiénico suavecitoooo',
            price: 2000000,
        });
        const firstProduct = await productService.findOne(firstProductId);
        console.log(firstProduct);
    } catch (error) {
        console.error(error);
    }
})();
