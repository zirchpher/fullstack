import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from './product.model';

type PromiseOfProduct = Promise<Product[]> | Promise<Product>;

interface ProductService {
    getAll(): Product[] | PromiseOfProduct;

    update(
        id: Product['id'],
        changes: UpdateProductDto
    ): Product | PromiseOfProduct;

    create(dto: CreateProductDto): Product | PromiseOfProduct;

    findOne(id: Product['id']): Product | undefined | PromiseOfProduct;
}

export default ProductService;
