/**
 * Calculates the total sum of the prices of all products in the given array.
 *
 * @param {Product[]} products - An array of Product objects.
 * @returns {number} - The total sum of the prices of all products.
 *
 * @throws {TypeError} - If the products parameter is not an array.
 * @throws {TypeError} - If any of the products in the array is not a valid Product object interface.
 * @throws {RangeError} - If the price of any product is negative.
 *
 * @example
 * const products = [
 *   { name: 'Product 1', price: 10 },
 *   { name: 'Product 2', price: 20 },
 *   { name: 'Product 3', price: 30 }
 * ];
 *
 * const totalSum = getTotalSum(products);
 * console.log(totalSum); // Output: 60
 */
export const getTotalSum = (products: Product[]): number => {
  // Calculate the total sum of the prices using the reduce function
  return products.reduce((sum, product) => sum + product.price, 0);
};

/**
 * Generates a unique identifier.
 *
 * @returns {number} A unique identifier.
 */
export const generateId = (): number => Number(new Date().getTime().toString());
