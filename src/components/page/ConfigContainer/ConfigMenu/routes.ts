import {
  informationCircle,
  pricetags,
  // pricetag,
  list,
  grid,
  imagesOutline
} from 'ionicons/icons';
export const routes = {
  configPages: [
    {
      title: 'Información General',
      path: '/config',
      icon: informationCircle
    },
    { title: 'Categorías', path: '/config/categories', icon: pricetags },
    // { title: 'Artículos', path: '/config/items', icon: pricetag },
    { title: 'Listas', path: '/config/lists', icon: list },
    { title: 'Menus', path: '/config/menus', icon: grid },
    {
      title: 'Salvapantallas',
      path: '/config/screensaver',
      icon: imagesOutline
    }
  ]
};

export interface IPage {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}
