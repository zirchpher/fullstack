const cats = ['Coludo', 30, 'Silvestre', 30];

const mixed: (string | boolean | number)[] = [];
mixed.push('Café'); // ✅
mixed.push(3); // ✅
mixed.push(true); // ✅
// mixed.push(['otra', 'cadena'], 20); // ❌

const withObjects: Object[] = [];
withObjects.push(['Esto es', 'Un', 'Array']);
withObjects.push({
  ahora: 'Un objeto',
});
