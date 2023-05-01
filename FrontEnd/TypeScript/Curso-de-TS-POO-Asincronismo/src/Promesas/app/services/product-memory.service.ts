import { faker } from '@faker-js/faker';

import { Product } from '../model/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import ProductService from '../model/product-service.model';

class ProductMemoryService implements ProductService {
    private products: Product[] = [];

    getAll() {
        return this.products;
    }

    create(data: CreateProductDto): Product {
        const newProduct = {
            ...data,
            id: faker.datatype.number(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.imageUrl(),
            },
        };

        return this.add(newProduct);
    }

    protected add(product: Product) {
        this.products.push(product);
        return product;
    }

    update(id: Product['id'], changes: UpdateProductDto): Product {
        const index = this.products.findIndex((item) => item.id === id);
        const prevData = this.products[index];
        this.products[index] = {
            ...prevData,
            ...changes,
        };
        return this.products[index];
    }

    findOne(id: Product['id']) {
        return this.products.find((product) => {
            product.id === id;
        });
    }
}

export default ProductMemoryService;
