import { CategoriesGroup, Category } from './types';
import images from './images';

export const CATEGORIES: CategoriesGroup[] = [
  {
    name: 'Magic Brush',
    categories: [
      { slug: 'navbars', name: 'Navbars', images: images.navbars },
      { slug: 'headers', name: 'Headers', images: images.headers },
      { slug: 'footers', name: 'Footers', images: images.footers },
      { slug: 'grids', name: 'Grids', images: images.grids },
      { slug: 'users', name: 'User info and controls', images: images.users },
      { slug: 'inputs', name: 'Inputs', images: images.inputs },
      { slug: 'buttons', name: 'Buttons', images: images.buttons },
      { slug: 'sliders', name: 'Sliders', images: images.sliders },
      { slug: 'dropzones', name: 'Dropzones', images: images.dropzones },
      { slug: 'app-cards', name: 'Application cards', images: images['app-cards'] },
      { slug: 'stats', name: 'Stats', images: images.stats },
      { slug: 'tables', name: 'Tables', images: images.tables },
      { slug: 'dnd', name: "Drag'n'Drop", images: images.dnd },
      { slug: 'carousels', name: 'Carousels', images: images.carousels },
    ],
  },
];

const ALL_CATEGORIES = CATEGORIES.reduce<Category[]>((acc, group) => {
  acc.push(...group.categories);
  return acc;
}, []);

export const CATEGORIES_SLUGS = ALL_CATEGORIES.map((item) => item.slug);

export const getCategoryData = (category: string) =>
  ALL_CATEGORIES.find((item) => item.slug === category);
