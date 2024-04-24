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
      'menuItem->meals->specials',
      'menuItem->wines',
      'menuItem->info->gallery'
    ]
  },
  'pageMenu->meals': {
    id: 'pageMenu->meals',
    active: false,
    type: 'menu',
    show: false,
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
    selectableItems: [],
    items: []
  }
};

export const pageMenuItems: { [key: string]: PageMenuItem } = {
  'menuItem->meals': {
    id: 'menuItem->meals',
    type: 'menu',
    active: false,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: false,
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
    active: false,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: false,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->desserts',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'menuItem->info->allergens': {
    id: 'menuItem->info->allergens',
    itemId: 'item->menu->info->allergens',
    type: 'menu',
    active: false,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: false,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->allergens',
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
  },
  'menuItem->meals->specials': {
    id: 'menuItem->meals->specials',
    itemId: 'item->menu->meals->specials',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    template: '',
    href: '',
    page: 'page->meals->specials',
    modal: '',
    isSubMenu: true,
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
    template: '',
    href: '',
    page: 'page->wines',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  }
};
