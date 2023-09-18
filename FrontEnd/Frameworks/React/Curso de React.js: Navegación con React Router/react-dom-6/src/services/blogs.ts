import { Blog } from '../model/blog.model';

export const blogs: Blog[] = [
  {
    id: 1,
    title: '¿Qué es React?',
    path: 'que-es-react',
    content: 'React es el mejor framework de JavaScript.',
    author: 'remmian',
  },
  {
    id: 2,
    title: '¿Qué es Angular?',
    path: 'que-es-angular',
    content: 'Angular es el mejor framework de JavaScript.',
    author: 'NicoBytes',
  },
  {
    id: 3,
    title: '¿Qué es Vue?',
    path: 'que-es-vue',
    content: 'Vue es el mejor framework de JavaScript.',
    author: 'Diannerd',
  },
  {
    id: 4,
    title: 'Libros recomendados',
    path: 'libros-recomendados',
    content:
      'Algunos libros recomendados: Padre rico, padre pobre y Tus zonas erróneas',
    author: 'remmian',
  },
];
