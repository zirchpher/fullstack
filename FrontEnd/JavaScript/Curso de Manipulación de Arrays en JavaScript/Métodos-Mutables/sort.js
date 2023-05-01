// * Sort() => Lo que hace sort es ordenar los elementos en cuestión a un función
// * Si no le pasamos ningún parámetro, sort automática lo va a ordenar en cuestión 
// * al código ASCI
const ages = [63, 84, 3, 53, 512, 35, 3, 5, 23, 5, 62, 4];

ages.sort(comparacion);

function comparacion(itemA, itemB) {
    // Comparación es restar itemA - itemB => orden Ascendente
    // o restar itemB - itemA Desscendente

    // Si da -1 => itemA se sitúa en un índice menor a itemB
    // Si da 0 => No ocurren cambios
    // Si da 1 => itemB se sitúa en un índice menor a itemA

    if (itemA > itemB) return 1;
    else if (itemA < itemB) return -1;

    return 0;
}

console.log(ages);