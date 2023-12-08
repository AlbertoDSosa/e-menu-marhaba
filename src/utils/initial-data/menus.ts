import { PageMenu, PageMenuItem } from 'definitions/models';

export const pageMenus: { [key: string]: PageMenu } = {
  'pageMenu->main-menu': {
    id: 'pageMenu->main-menu',
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    active: true,
    template: '',
    maxItems: 8,
    displayInfo: {
      es: {
        title: 'Menú Principal',
        slug: 'menu-principal'
      },
      en: {
        title: 'Main Menu',
        slug: 'main-menu'
      },
      de: {
        title: 'Hauptmenü',
        slug: 'hauptmenu'
      },
      nb: {
        title: 'Hovedmeny',
        slug: 'hovedmeny'
      },
      da: {
        title: 'Hovedmenu',
        slug: 'hovedmenu'
      },
      sv: {
        title: 'Huvudmeny',
        slug: 'huvudmeny'
      },
      fr: {
        title: 'Menu principal',
        slug: 'menu-principal'
      },
      nl: {
        title: 'Hoofdmenu',
        slug: 'hoofdmenu'
      }
    },
    selectableItems: ['menuItem->info->gallery'],
    items: [
      'menuItem->meals->starters',
      'menuItem->meals->skewers',
      'menuItem->meals->cous-cous',
      'menuItem->meals->tajin',
      'menuItem->wines'
    ]
  },
  'pageMenu->meals': {
    id: 'pageMenu->meals',
    active: true,
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    template: '',
    maxItems: 8,
    displayInfo: {
      es: {
        title: 'Comidas',
        slug: 'comidas'
      },
      en: {
        title: 'Meals',
        slug: 'meals'
      },
      de: {
        title: 'Lebensmittel',
        slug: 'lebensmittel'
      },
      nb: {
        title: 'Matvarer',
        slug: 'matvarer'
      },
      da: {
        title: 'Fødevarer',
        slug: 'fødevarer'
      },
      sv: {
        title: 'Livsmedel',
        slug: 'livsmedel'
      },
      fr: {
        title: 'Nourriture',
        slug: 'nourriture'
      },
      nl: {
        title: 'Voedsel',
        slug: 'voedsel'
      }
    },
    selectableItems: ['menuItem->meals->extra-menu'],
    items: [
      'menuItem->meals->starters',
      'menuItem->meals->salads',
      'menuItem->meals->garnishes-or-side-dishes'
    ]
  },
  'pageMenu->drinks': {
    id: 'pageMenu->drinks',
    active: true,
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    template: '',
    maxItems: 8,
    displayInfo: {
      es: {
        title: 'Bebidas',
        slug: 'bebidas'
      },
      en: {
        title: 'Drinks',
        slug: 'drinks'
      },
      de: {
        title: 'Getränke',
        slug: 'getranke'
      },
      nb: {
        title: 'Drikker',
        slug: 'drikker'
      },
      da: {
        title: 'Drikkevarer',
        slug: 'drikkevarer'
      },
      sv: {
        title: 'Drycker',
        slug: 'drycker'
      },
      fr: {
        title: 'Boissons',
        slug: 'boissons'
      },
      nl: {
        title: 'Drankjes',
        slug: 'drankjes'
      }
    },
    selectableItems: [],
    items: [
      'menuItem->drinks->appetizers',
      'menuItem->drinks->smoothies',
      'menuItem->drinks->refreshments',
      'menuItem->drinks->beers',
      'menuItem->drinks->coffee-shop',
      'menuItem->drinks->bar'
    ]
  },
  'pageMenu->wines': {
    id: 'pageMenu->wines',
    active: false,
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    template: '',
    maxItems: 8,
    displayInfo: {
      es: {
        title: 'Vinos',
        slug: 'vinos'
      },
      en: {
        title: 'Wines',
        slug: 'wines'
      },
      de: {
        title: 'Wein',
        slug: 'wein'
      },
      nb: {
        title: 'Viner',
        slug: 'viner'
      },
      da: {
        title: 'Vine',
        slug: 'vine'
      },
      sv: {
        title: 'Viner',
        slug: 'viner'
      },
      fr: {
        title: 'Vins ',
        slug: 'vins'
      },
      nl: {
        title: 'Wijn',
        slug: 'wijn'
      }
    },
    selectableItems: [],
    items: [
      'menuItem->wines->red-wines',
      'menuItem->wines->rose-wines',
      'menuItem->wines->white-wines',
      'menuItem->wines->sweet-wines',
      'menuItem->wines->sangrias-and-champagnes'
    ]
  }
};

export const pageMenuItems: { [key: string]: PageMenuItem } = {
  'menuItem->meals': {
    id: 'menuItem->meals',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    itemId: 'item->menu->meals',
    isModalMode: false,
    href: '',
    template: '',
    page: '',
    modal: '',
    isSubMenu: false,
    hasSubMenu: true,
    subMenu: 'pageMenu->meals'
  },
  'menuItem->desserts': {
    id: 'menuItem->desserts',
    itemId: 'item->menu->desserts',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->desserts',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->drinks': {
    id: 'menuItem->drinks',
    itemId: 'item->menu->drinks',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->drinks',
    modal: '',
    isSubMenu: false,
    hasSubMenu: true,
    subMenu: 'pageMenu->drinks'
  },
  'menuItem->drinks->refreshments': {
    id: 'menuItem->drinks->refreshments',
    itemId: 'item->menu->drinks->refreshments',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->drinks->refreshments',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->drinks->beers': {
    id: 'menuItem->drinks->beers',
    itemId: 'item->menu->drinks->beers',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->drinks->beers',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->drinks->coffee-shop': {
    id: 'menuItem->drinks->coffee-shop',
    itemId: 'item->menu->drinks->coffee-shop',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->drinks->coffee-shop',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->drinks->smoothies': {
    id: 'menuItem->drinks->smoothies',
    itemId: 'item->menu->drinks->smoothies',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->drinks->smoothies',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->drinks->appetizers': {
    id: 'menuItem->drinks->appetizers',
    itemId: 'item->menu->drinks->appetizers',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->drinks->appetizers',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->drinks->bar': {
    id: 'menuItem->drinks->bar',
    itemId: 'item->menu->drinks->bar',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->bar',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->wines': {
    id: 'menuItem->wines',
    itemId: 'item->menu->wines',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->wines',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->info->allergens': {
    id: 'menuItem->info->allergens',
    itemId: 'item->menu->info->allergens',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->allergens',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->info->sanitary-measures': {
    id: 'menuItem->info->sanitary-measures',
    itemId: 'item->menu->info->sanitary-measures',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->sanitary-measures',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->information': {
    id: 'menuItem->information',
    itemId: 'item->menu->info->information',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->information',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->info->gallery': {
    id: 'menuItem->info->gallery',
    itemId: 'item->menu->info->gallery',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->gallery',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->starters': {
    id: 'menuItem->meals->starters',
    itemId: 'item->menu->meals->starters',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->meals->starters',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->salads': {
    id: 'menuItem->meals->salads',
    itemId: 'item->menu->meals->salads',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->meals->salads',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->breakfasts': {
    id: 'menuItem->meals->breakfasts',
    itemId: 'item->menu->meals->breakfasts',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: '',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->sandwich': {
    id: 'menuItem->meals->sandwich',
    itemId: 'item->menu->meals->sandwich',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: '',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->childrens': {
    id: 'menuItem->meals->childrens',
    itemId: 'item->menu->meals->childrens',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    template: '',
    href: '',
    page: 'page->meals->childrens',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->garnishes-or-side-dishes': {
    id: 'menuItem->meals->garnishes-or-side-dishes',
    itemId: 'item->menu->meals->garnishes-or-side-dishes',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: true,
    template: '',
    href: '',
    page: '',
    modal: 'modal->blackboard-list->1',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->skewers': {
    id: 'menuItem->meals->skewers',
    itemId: 'item->menu->meals->skewers',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    template: '',
    href: '',
    page: 'page->meals->skewers',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->cous-cous': {
    id: 'menuItem->meals->cous-cous',
    itemId: 'item->menu->meals->cous-cous',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    template: '',
    href: '',
    page: 'page->meals->cous-cous',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->meals->tajin': {
    id: 'menuItem->meals->tajin',
    itemId: 'item->menu->meals->tajin',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    template: '',
    href: '',
    page: 'page->meals->tajin',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  }
};
