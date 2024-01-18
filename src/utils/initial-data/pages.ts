import { Page } from 'definitions/models';

export const pages: { [key: string]: Page } = {
  'page->wines': {
    id: 'page->wines',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: ['pageSection->wines-4', 'pageSection->wines-5'],
    isPolySection: true,
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
    }
  },
  'page->drinks': {
    id: 'page->drinks',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [],
    isPolySection: true,
    displayInfo: {
      es: {
        title: 'Bebidas',
        slug: 'bebidas'
      },
      en: {
        title: 'Drinks',
        slug: 'category-drinks'
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
    }
  },
  'page->desserts': {
    id: 'page->desserts',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->desserts-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Postres',
        slug: 'postres'
      },
      en: {
        title: 'Desserts',
        slug: 'desserts'
      },
      de: {
        title: 'Nachspeisen',
        slug: 'nachspeisen'
      },
      nb: {
        title: 'Desserter',
        slug: 'desserter'
      },
      da: {
        title: 'Desserter',
        slug: 'desserter'
      },
      sv: {
        title: 'Efterrätter',
        slug: 'efterratter'
      },
      fr: {
        title: 'Desserts',
        slug: 'desserts'
      },
      nl: {
        title: 'Desserts',
        slug: 'desserts'
      }
    }
  },
  'page->meals->starters': {
    id: 'page->meals->starters',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->meals->starters-1',
      'pageSection->meals->starters-2',
      'pageSection->meals->starters-3'
    ],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Entrantes',
        slug: 'entrantes'
      },
      en: {
        title: 'Starters',
        slug: 'starters'
      },
      de: {
        title: 'Vorspeisen',
        slug: 'vorspeisen'
      },
      nb: {
        title: 'Forretter',
        slug: 'forretter'
      },
      da: {
        title: 'Forretter',
        slug: 'forretter'
      },
      sv: {
        title: 'Förrätter',
        slug: 'forratter'
      },
      fr: {
        title: 'Entrées',
        slug: 'entrees'
      },
      nl: {
        title: 'Voorgerechten',
        slug: 'voorgerechten'
      }
    }
  },
  'page->meals->salads': {
    id: 'page->meals->salads',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->salads-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Ensaladas',
        slug: 'ensaladas'
      },
      en: {
        title: 'Salads',
        slug: 'salads'
      },
      de: {
        title: 'Salate',
        slug: 'salate'
      },
      nb: {
        title: 'Salater',
        slug: 'salater'
      },
      da: {
        title: 'Salater',
        slug: 'salater'
      },
      sv: {
        title: 'Sallader',
        slug: 'sallader'
      },
      fr: {
        title: 'Salades',
        slug: 'salades'
      },
      nl: {
        title: 'Verfrissend',
        slug: 'verfrissend'
      }
    }
  },
  'page->meals->sandwich': {
    id: 'page->meals->sandwich',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->sandwich-1'],
    isPolySection: true,
    displayInfo: {
      es: {
        title: 'Bocadillos',
        slug: 'con-las-manos'
      },
      en: {
        title: 'Snacks',
        slug: 'snacks'
      },
      de: {
        title: 'Snacks',
        slug: 'snacks'
      },
      nb: {
        title: 'Snacks',
        slug: 'snacks'
      },
      da: {
        title: 'Snacks',
        slug: 'snacks'
      },
      sv: {
        title: 'Snacks',
        slug: 'snacks'
      },
      fr: {
        title: 'Collations',
        slug: 'collations'
      },
      nl: {
        title: 'Tussendoortjes',
        slug: 'tussendoortjes'
      }
    }
  },
  'page->meals->spoon-dishes': {
    id: 'page->meals->spoon-dishes',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->spoon-dishes-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Platos de Cuchara',
        slug: 'platos-de-cuchara'
      },
      en: {
        title: 'Spoon dishes',
        slug: 'spoon-dishes'
      },
      de: {
        title: 'Löffelgerichte',
        slug: 'loffelgerichte'
      },
      nb: {
        title: 'Skje retter',
        slug: 'skje-retter'
      },
      da: {
        title: 'Ske retter',
        slug: 'ske-retter'
      },
      sv: {
        title: 'Sked rätter',
        slug: 'sked-ratter'
      },
      fr: {
        title: 'Plats à la Cuillère',
        slug: 'plats-a-la-cuillere'
      },
      nl: {
        title: 'Lepel gerechten',
        slug: 'lepel-gerechten'
      }
    }
  },
  'page->meals->childrens': {
    id: 'page->meals->childrens',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->childrens-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Menú Infantil',
        slug: 'menu-infantil'
      },
      en: {
        title: `Children's Menu`,
        slug: 'children-s-menu'
      },
      de: {
        title: 'Kindermenü',
        slug: 'kindermenu'
      },
      nb: {
        title: 'Meny for de Små',
        slug: 'meny-for-de-sma'
      },
      da: {
        title: 'Børnemenu',
        slug: 'bornemenu'
      },
      sv: {
        title: 'Meny för Barnen',
        slug: 'meny-for-barnen'
      },
      fr: {
        title: 'Menu Enfant',
        slug: 'menu-enfant'
      },
      nl: {
        title: 'Kindermenu',
        slug: 'kindermenu'
      }
    }
  },
  'page->info->allergens': {
    id: 'page->info->allergens',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->info-allergens',
    sections: ['pageSection->info->allergens-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        description: 'Alergénicos',
        title: 'Alergénicos',
        slug: 'comidas-alergenicos'
      },
      en: {
        description: 'Allergens',
        title: 'Allergens',
        slug: 'meals-allergens'
      },
      de: {
        description: 'Allergene',
        title: 'Allergene',
        slug: 'allergene'
      },
      nb: {
        description: 'Allergener',
        title: 'Allergener',
        slug: 'allergener'
      },
      da: {
        description: 'Allergener',
        title: 'Allergener',
        slug: 'allergener'
      },
      sv: {
        description: 'Allergener',
        title: 'Allergener',
        slug: 'allergener'
      },
      fr: {
        description: 'Allergènes',
        title: 'Allergènes',
        slug: 'allergenes'
      },
      nl: {
        title: 'Allergenen',
        slug: 'allergenen'
      }
    }
  },
  'page->info->sanitary-measures': {
    id: 'page->info->sanitary-measures',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->info->sanitary-measures-1',
      'pageSection->info->sanitary-measures-2'
    ],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Medidas Sanitarias',
        slug: 'medidas-sanitarias'
      },
      en: {
        title: 'Sanitary measures',
        slug: 'sanitary-measures'
      },
      de: {
        title: 'Hygienemaßnahmen',
        slug: 'hygienemassnahmen'
      },
      nb: {
        title: 'Sanitære tiltak',
        slug: 'sanitaere-tiltak'
      },
      da: {
        title: 'Sanitære foranstaltninger',
        slug: 'sanitaere-foranstaltninger'
      },
      sv: {
        title: 'Sanitära åtgärder',
        slug: 'sanitara-atgarder'
      },
      fr: {
        title: 'Mesures sanitaires',
        slug: 'mesures-sanitaires'
      },
      nl: {
        title: 'Sanitaire maatregelen',
        slug: 'sanitaire-maatregelen'
      }
    }
  },
  'page->info->information': {
    id: 'page->info->information',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->information'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Información',
        slug: 'informacion'
      },
      en: {
        title: 'Information',
        slug: 'information'
      },
      de: {
        title: 'Information',
        slug: 'information'
      },
      nb: {
        title: 'Informasjon',
        slug: 'informasjon'
      },
      da: {
        title: 'Information',
        slug: 'information'
      },
      sv: {
        title: 'Information',
        slug: 'information'
      },
      fr: {
        title: 'Informations',
        slug: 'informations'
      },
      nl: {
        title: 'Informatie',
        slug: 'informatie'
      }
    }
  },
  'page->info->gallery': {
    id: 'page->info->gallery',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->info-gallery',
    sections: ['pageSection->info->gallery-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Galería',
        slug: 'galeria'
      },
      en: {
        title: 'Gallery',
        slug: 'gallery'
      },
      de: {
        title: 'Galerie',
        slug: 'galerie'
      },
      nb: {
        title: 'Galleri',
        slug: 'galleri'
      },
      da: {
        title: 'Galleri',
        slug: 'galleri'
      },
      sv: {
        title: 'Galleri',
        slug: 'galleri'
      },
      fr: {
        title: 'Galerie',
        slug: 'galerie'
      },
      nl: {
        title: 'Galerij',
        slug: 'galerij'
      }
    }
  },
  'page->drinks->refreshments': {
    id: 'page->drinks->refreshments',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->drinks->refreshments-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Refrescos',
        slug: 'refrescos'
      },
      en: {
        title: 'Refreshments',
        slug: 'refreshments'
      },
      de: {
        title: 'Erfrischungen',
        slug: 'erfrischungen'
      },
      nb: {
        title: 'Forfriskninger',
        slug: 'forfriskninger'
      },
      da: {
        title: 'Forfriskninger',
        slug: 'forfriskninger'
      },
      sv: {
        title: 'Förfriskningar',
        slug: 'forfriskningar'
      },
      fr: {
        title: 'Rafraîchissements',
        slug: 'rafraichissements'
      },
      nl: {
        title: 'Verfrissingen',
        slug: 'verfrissingen'
      }
    }
  },
  'page->drinks->beers': {
    id: 'page->drinks->beers',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->drinks->beers-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Cervezas',
        slug: 'cervezas'
      },
      en: {
        title: 'Beers',
        slug: 'beers'
      },
      de: {
        title: 'Biere',
        slug: 'biere'
      },
      nb: {
        title: 'Øl',
        slug: 'ol'
      },
      da: {
        title: 'Øl',
        slug: 'ol'
      },
      sv: {
        title: 'Öl',
        slug: 'ol'
      },
      fr: {
        title: 'Bières',
        slug: 'bieres'
      },
      nl: {
        title: 'Bieren',
        slug: 'bieren'
      }
    }
  },
  'page->drinks->coffee-shop': {
    id: 'page->drinks->coffee-shop',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->drinks->coffee-shop-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Cafetería',
        slug: 'cafeteria'
      },
      en: {
        title: 'Coffee Shop',
        slug: 'coffee-shop'
      },
      de: {
        title: 'Café',
        slug: 'cafe'
      },
      nb: {
        title: 'Kaffebutikk',
        slug: 'kaffebutikk'
      },
      da: {
        title: 'Kaffebar',
        slug: 'kaffebar'
      },
      sv: {
        title: 'Kafé',
        slug: 'kafe'
      },
      fr: {
        title: 'Café',
        slug: 'cafe'
      },
      nl: {
        title: 'Cafetaria',
        slug: 'cafetaria'
      }
    }
  },
  'page->drinks->bar': {
    id: 'page->drinks->bar',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->drinks->whiskies-1',
      'pageSection->drinks->rums-2',
      'pageSection->drinks->combined-3',
      'pageSection->drinks->gins-4',
      'pageSection->drinks->cognac-and-brandy-5',
      'pageSection->drinks->liqueurs-6',
      'pageSection->drinks->cocktails-7'
    ],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'El bar',
        slug: 'el-bar'
      },
      en: {
        title: 'The bar',
        slug: 'the-bar'
      },
      de: {
        title: 'Die Bar',
        slug: 'die-bar'
      },
      nb: {
        title: 'Baren',
        slug: 'baren'
      },
      da: {
        title: 'Baren',
        slug: 'baren'
      },
      sv: {
        title: 'Baren',
        slug: 'baren'
      },
      fr: {
        title: 'Le bar',
        slug: 'le-bar'
      },
      nl: {
        title: 'De bar',
        slug: 'de-bar'
      }
    }
  },
  'page->drinks->smoothies': {
    id: 'page->drinks->smoothies',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->drinks->smoothies-2'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      en: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      de: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      nb: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      da: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      sv: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      fr: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      nl: {
        title: 'Smoothies',
        slug: 'smoothies'
      }
    }
  },
  'page->drinks->appetizers': {
    id: 'page->drinks->appetizers',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->drinks->appetizers-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Aperitivos',
        slug: 'aperitivos'
      },
      en: {
        title: 'Appetizers',
        slug: 'appetizers'
      },
      de: {
        title: 'Vorspeisen',
        slug: 'Vorspeisen'
      },
      nb: {
        title: 'Forretter',
        slug: 'forretter'
      },
      da: {
        title: 'Forretter',
        slug: 'forretter'
      },
      sv: {
        title: 'Förrätter',
        slug: 'forratter'
      },
      fr: {
        title: 'Apéritifs',
        slug: 'aperitifs'
      },
      nl: {
        title: 'Voorgerechten',
        slug: 'voorgerechten'
      }
    }
  },
  'page->meals->skewers': {
    id: 'page->meals->skewers',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->skewers-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Pinchitos',
        slug: 'pinchitos'
      },
      en: {
        title: 'Skewers',
        slug: 'skewers'
      },
      de: {
        title: 'Spieße',
        slug: 'spiebe'
      },
      nb: {
        title: '',
        slug: ''
      },
      da: {
        title: '',
        slug: ''
      },
      sv: {
        title: '',
        slug: ''
      },
      fr: {
        title: '',
        slug: ''
      },
      nl: {
        title: '',
        slug: ''
      }
    }
  },
  'page->meals->cous-cous': {
    id: 'page->meals->cous-cous',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->cous-cous-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Cous Cous',
        slug: 'cous-cous'
      },
      en: {
        title: 'Cous Cous',
        slug: 'cous-cous'
      },
      de: {
        title: 'Cous Cous',
        slug: 'cous-cous'
      },
      nb: {
        title: '',
        slug: ''
      },
      da: {
        title: '',
        slug: ''
      },
      sv: {
        title: '',
        slug: ''
      },
      fr: {
        title: '',
        slug: ''
      },
      nl: {
        title: '',
        slug: ''
      }
    }
  },
  'page->meals->tajin': {
    id: 'page->meals->tajin',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->tajin-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Tajin',
        slug: 'tajin'
      },
      en: {
        title: 'Tajin',
        slug: 'tajin'
      },
      de: {
        title: 'Tajin',
        slug: 'tajin'
      },
      nb: {
        title: '',
        slug: ''
      },
      da: {
        title: '',
        slug: ''
      },
      sv: {
        title: '',
        slug: ''
      },
      fr: {
        title: '',
        slug: ''
      },
      nl: {
        title: '',
        slug: ''
      }
    }
  }
};
