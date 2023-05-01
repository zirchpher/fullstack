(function () {
  // Datos de entrada
  type ShirtSizes = 'S' | 'M' | 'L' | 'XL';

  // Forma 1: Función Corriente
  function convertToObject(
    title: string,
    price: number,
    isAvailabe: boolean,
    size: ShirtSizes
  ) {
    return {
      title,
      price,
      isAvailabe,
      size,
    };
  }
  const product1 = convertToObject('Camisa', 100, true, 'S');
  console.log(product1);

  // Forma 2: Arrow Function
  const convertToObjectV2 = (
    title: string,
    price: number,
    isAvailabe: boolean,
    size?: ShirtSizes // Parámetro opcional
  ) => {
    const newObject = { title, price, isAvailabe, size };
    return newObject;
  };

  const product2 = convertToObjectV2('Blusa', 200, false);
  console.log(product2);
})();
