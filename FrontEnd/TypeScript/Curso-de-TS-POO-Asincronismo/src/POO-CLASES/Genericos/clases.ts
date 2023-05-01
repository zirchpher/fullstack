// Usando los genéricos en clase obtendremos la flexibilidad, es decir que podemos decirle qué tipado nos debe regresar por cada instancia que creémos de la clase
import axios from 'axios';
import { Category } from '../../Promesas/app/model/category.model';
import { Product } from '../../Promesas/app/model/product.model';

export class BaseHttpService<T> {
    constructor(private url: string) {}

    async getAll(): Promise<T[]> {
        const { data } = await axios.get<T[]>(this.url);
        return data;
    }
}

const baseAPI = 'https://api.escuelajs.co/api/v1';

// Primera instancia, Tipos Products <Product>
const productService = new BaseHttpService<Product>(`${baseAPI}/products`);

(async () => {
    const allProducts = await productService.getAll();
    console.log('Products', allProducts.length);
})();

// Segunda instancia, Tipos Category <Category>
const categoryService = new BaseHttpService<Category>(`${baseAPI}/categories`);

(async () => {
    const allCategories = await categoryService.getAll();
    console.log('Categories', allCategories.length);
})();
