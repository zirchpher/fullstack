import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import ProductService from '../model/product-service.model';
import { Product } from '../model/product.model';

class ProductHttpService implements ProductService {
    private API: string = 'https://api.escuelajs.co/api/v1/products';

    async getAll() {
        const { data } = await axios.get<Product[]>(this.API);
        return data;
    }

    async update(id: Product['id'], changes: UpdateProductDto) {
        const { data } = await axios.put(`${this.API}/${id}`, changes);
        return data;
    }

    async create(dto: CreateProductDto) {
        const { data } = await axios.post(this.API, dto);
        return data;
    }

    async findOne(id: Product['id']) {
        const { data } = await axios.get(`${this.API}/${id}`);
        return data;
    }
}

export default ProductHttpService;
