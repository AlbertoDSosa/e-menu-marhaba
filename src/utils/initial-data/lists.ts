import { ProductList, InfoList } from 'definitions/models';

export const lists: { [key: string]: ProductList | InfoList } = {
  // 'list->desserts': {
  //   id: 'list->desserts',
  //   type: 'product',
  //   active: true,
  //   defaultImg: '',
  //   mainImg: '',
  //   sortable: true,
  //   hasVariants: false,
  //   variants: '',
  //   show: true,
  //   showExtraInfo: false,
  //   showDescription: false,
  //   showTitle: false,
  //   template: 'template->list->meals->short-title',
  //   selectableItems: [],
  //   editable: false,
  //   maxItems: 12,
  //   categories: ['category->desserts'],
  //   displayInfo: {
  //     es: {
  //       title: 'Postres',
  //       slug: 'postres'
  //     },
  //     en: {
  //       title: 'Desserts',
  //       slug: 'desserts'
  //     },
  //     de: {
  //       title: 'Nachspeisen',
  //       slug: 'nachspeisen'
  //     },
  //     nb: {
  //       title: 'Desserter',
  //       slug: 'desserter'
  //     },
  //     da: {
  //       title: 'Desserter',
  //       slug: 'desserter'
  //     },
  //     sv: {
  //       title: 'Efterrätter',
  //       slug: 'efterratter'
  //     },
  //     fr: {
  //       title: 'Desserts',
  //       slug: 'desserts'
  //     },
  //     nl: {
  //       title: 'Desserts',
  //       slug: 'desserts'
  //     }
  //   },
  //   items: [
  //     'listItem->product->desserts->our-creamy-cheesecake-1',
  //     'listItem->product->desserts->homemade-sweets-from-tejeda-2',
  //     'listItem->product->desserts->trompe-l-oeil-ferrero-rocher-3',
  //     'listItem->product->desserts->banana-ice-cream-4',
  //     'listItem->product->desserts->homemade-ice-cream-5',
  //     'listItem->product->desserts->our-chef-s-suggested-sweet-6'
  //   ]
  // } as ProductList,
  'list->meals->starters-1': {
    id: 'list->meals->starters-1',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->starters'],
    displayInfo: {
      es: {
        title: 'Entrantes 1',
        slug: 'entrantes-1'
      },
      en: {
        title: 'Starters 1',
        slug: 'starters-1'
      },
      de: {
        title: 'Vorspeisen 1',
        slug: 'vorspeisen-1'
      },
      nb: {
        title: 'Forretter 1',
        slug: 'forretter-1'
      },
      da: {
        title: 'Forretter 1',
        slug: 'forretter-1'
      },
      sv: {
        title: 'Förrätter 1',
        slug: 'forratter-1'
      },
      fr: {
        title: 'Entrées 1',
        slug: 'entrees-1'
      },
      nl: {
        title: 'Voorgerechten 1',
        slug: 'voorgerechten-1'
      }
    },
    items: [
      'listItem->product->meals->starters->pan-arabe-1',
      'listItem->product->meals->starters->pan-con-alioli-2',
      'listItem->product->meals->starters->vegetable-and-meat-soup-3',
      'listItem->product->meals->starters->arab-patty-with-cheese-and-honey-4',
      'listItem->product->meals->starters->arab-patty-with-vegetables-5',
      'listItem->product->meals->starters->arab-patty-with-spinach-6',
      'listItem->product->meals->starters->arab-patty-with-chicken-and-spices-7',
      'listItem->product->meals->starters->arab-patty-with-meat-and-pinions-8',
      'listItem->product->meals->starters->chickpeas-croquettes-9',
      'listItem->product->meals->starters->arab-patty-with-seadfood-10'
    ]
  } as ProductList,
  'list->meals->starters-2': {
    id: 'list->meals->starters-2',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->starters'],
    displayInfo: {
      es: {
        title: 'Entrantes 2',
        slug: 'entrantes-2'
      },
      en: {
        title: 'Starters 2',
        slug: 'starters-2'
      },
      de: {
        title: 'Vorspeisen 2',
        slug: 'vorspeisen-2'
      },
      nb: {
        title: 'Forretter 2',
        slug: 'forretter-2'
      },
      da: {
        title: 'Forretter 2',
        slug: 'forretter-2'
      },
      sv: {
        title: 'Förrätter 2',
        slug: 'forratter-2'
      },
      fr: {
        title: 'Entrées',
        slug: 'entrees'
      },
      nl: {
        title: 'Voorgerechten 2',
        slug: 'voorgerechten-2'
      }
    },
    items: [
      'listItem->product->meals->starters->pastela-de-pollo-con-almendra-11',
      'listItem->product->meals->starters->spinachs-croquettes-12',
      'listItem->product->meals->starters->lamb-croquettes-13',
      'listItem->product->meals->starters->croquetas-de-datiles-con-pera-14',
      'listItem->product->meals->starters->hummus-15',
      'listItem->product->meals->starters->hummus-lenteja-16',
      'listItem->product->meals->starters->zaaluk-17',
      'listItem->product->meals->starters->ensalada-cous-cous-18',
      'listItem->product->meals->starters->ensalada-pollo-crujiente-19'
    ]
  } as ProductList,
  'list->meals->starters-3': {
    id: 'list->meals->starters-3',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->starters'],
    displayInfo: {
      es: {
        title: 'Entrantes 3',
        slug: 'entrantes-3'
      },
      en: {
        title: 'Starters 3',
        slug: 'starters-3'
      },
      de: {
        title: 'Vorspeisen 3',
        slug: 'vorspeisen-3'
      },
      nb: {
        title: 'Forretter 3',
        slug: 'forretter-3'
      },
      da: {
        title: 'Forretter 3',
        slug: 'forretter-3'
      },
      sv: {
        title: 'Förrätter 3',
        slug: 'forratter-3'
      },
      fr: {
        title: 'Entrées 3',
        slug: 'entrees-3'
      },
      nl: {
        title: 'Voorgerechten 3',
        slug: 'voorgerechten-3'
      }
    },
    items: [
      'listItem->product->meals->starters->ensalada-marroqui-20',
      'listItem->product->meals->starters->ensalada-gourmet-21',
      'listItem->product->meals->starters->berengenas-miel-22',
      'listItem->product->meals->starters->berenjenas-rellenas-de-ternera-23',
      'listItem->product->meals->starters->pulpo-brasa-24',
      'listItem->product->meals->starters->queso-ahumado-25',
      'listItem->product->meals->starters->chistorras-morunas-26',
      'listItem->product->meals->starters->marchica-27',
      'listItem->product->meals->starters->gambas-al-pil-pil-28'
    ]
  } as ProductList,
  'list->meals->skewers': {
    id: 'list->meals->skewers',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: true,
    showExtraInfo: true,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->skewers'],
    displayInfo: {
      es: {
        title: 'Pinchitos',
        extraInfo: '(Guarnición de papas y verduras)',
        slug: 'pinchitos'
      },
      en: {
        title: 'Skewers',
        extraInfo: '(Chips and vegetables garnish)',
        slug: 'skewers'
      },
      de: {
        title: 'Spieße',
        extraInfo: '(Kartoffel Gemüse Beilage)',
        slug: 'spiebe'
      },
      nb: {
        title: '',
        extraInfo: '',
        slug: ''
      },
      da: {
        title: '',
        extraInfo: '',
        slug: ''
      },
      sv: {
        title: '',
        extraInfo: '',
        slug: ''
      },
      fr: {
        title: 'Brochettes',
        extraInfo: '(Garniture de pommes de terre et de légumes)',
        slug: 'brochettes'
      },
      nl: {
        title: 'Sjasliek',
        extraInfo: '(Geserveerd met frieten en groenten)',
        slug: 'sjasliek'
      }
    },
    items: [
      'listItem->product->meals->skewers->pinchitos-de-pollo-1',
      'listItem->product->meals->skewers->pinchitos-de-ternera-2',
      'listItem->product->meals->skewers->pinchitos-de-cordero-3',
      'listItem->product->meals->skewers->pinchitos-vegetarianos-4',
      'listItem->product->meals->skewers->mar-y-tierra-5'
    ]
  } as ProductList,
  'list->meals->cous-cous': {
    id: 'list->meals->cous-cous',
    type: 'product',
    active: false,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: false,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->cous-cous'],
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
        title: 'Cous Cous',
        slug: 'cous-cous'
      },
      nl: {
        title: 'Cous Cous',
        slug: 'cous-cous'
      }
    },
    items: [
      'listItem->product->meals->cous-cous->cous-cous-de-verduras-1',
      'listItem->product->meals->cous-cous->cous-cous-de-pollo-2',
      'listItem->product->meals->cous-cous->cous-cous-de-ternera-3',
      'listItem->product->meals->cous-cous->cous-cous-de-cordero-4',
      'listItem->product->meals->cous-cous->cous-cous-de-marisco-5',
      'listItem->product->meals->cous-cous->cous-cous-de-carne-vegetal-6'
    ]
  } as ProductList,
  'list->meals->tajin': {
    id: 'list->meals->tajin',
    type: 'product',
    active: false,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: false,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    editable: true,
    maxItems: 8,
    template: 'template->list->meals->short-title',
    categories: [],
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
        title: 'Tajine',
        slug: 'tajine'
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
        title: 'Tajine',
        slug: 'tajine'
      },
      nl: {
        title: 'Tajine',
        slug: 'tajine'
      }
    },
    selectableItems: [],
    items: [
      'listItem->product->meals->tajin->tajin-de-ternera-1',
      'listItem->product->meals->tajin->tajin-de-pollo-2',
      'listItem->product->meals->tajin->tajin-de-cordero-3',
      'listItem->product->meals->tajin->tajin-de-kafta-4',
      'listItem->product->meals->tajin->tajin-con-carne-vegetal-5'
    ]
  } as ProductList,
  'list->meals->specials': {
    id: 'list->meals->specials',
    type: 'product',
    active: false,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: false,
    showDescription: false,
    showExtraInfo: true,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->specials'],
    displayInfo: {
      es: {
        title: 'Especialidades',
        slug: 'especialidades',
        extraInfo: 'servidos con guarnición'
      },
      en: {
        title: 'Specials',
        slug: 'specials',
        extraInfo: 'served with garnish'
      },
      de: {
        title: 'Spezialitäten',
        slug: 'spezialitaten',
        extraInfo: 'mit Beilagen'
      },
      nb: {
        title: '',
        slug: '',
        extraInfo: ''
      },
      da: {
        title: '',
        slug: '',
        extraInfo: ''
      },
      sv: {
        title: '',
        slug: '',
        extraInfo: ''
      },
      fr: {
        title: 'Spécialité',
        slug: 'specialite',
        extraInfo: 'avec garniture'
      },
      nl: {
        title: 'Specialiteit',
        slug: 'specialiteit',
        extraInfo: 'met garnituur'
      }
    },
    items: [
      'listItem->product->meals->specials->chuletas-de-cordero-1',
      'listItem->product->meals->specials->calamar-a-la-brasa-2',
      'listItem->product->meals->specials->atun-rojo-a-la-brasa-3',
      'listItem->product->meals->specials->t-bone-a-la-brasa-4',
      'listItem->product->meals->specials->solomillo-a-la-brasa-5',
      'listItem->product->meals->specials->hamburguesa-atun-rojo-6',
      'listItem->product->meals->specials->hamburguesa-de-pollo-7',
      'listItem->product->meals->specials->hamburguesa-de-ternera-8'
    ]
  } as ProductList,
  'list->wines->white-wines-1': {
    id: 'list->wines->white-wines-1',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 6,
    categories: ['category->meals->white-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Blancos Canarios',
        slug: 'vinos-blancos-canarios'
      },
      en: {
        title: 'Canary White Wines',
        slug: 'canary-white-wines'
      },
      de: {
        title: 'Kanarische Weißweine',
        slug: 'kanarische-weibweine'
      },
      nb: {
        title: 'Hvite vine',
        slug: 'hvite-vine'
      },
      da: {
        title: 'Hvide vine',
        slug: 'hvide-vine'
      },
      sv: {
        title: 'Vita viner',
        slug: 'vita-viner'
      },
      fr: {
        title: 'Vins blancs',
        slug: 'vins-blancs'
      },
      nl: {
        title: 'Witte wijnen',
        slug: 'witte-wijnen'
      }
    },
    hasVariants: false,
    variants: '',
    items: [
      'listItem->product->wines->-1',
      'listItem->product->wines->-2',
      'listItem->product->wines->-3'
    ]
  } as ProductList,
  'list->wines->white-wines-2': {
    id: 'list->wines->white-wines-2',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 6,
    categories: [''],
    displayInfo: {
      es: {
        title: 'Vinos Blancos del Resto de España',
        slug: 'vinos-blancos-del-resto-de-espana'
      },
      en: {
        title: 'White Wines from the Rest of Spain',
        slug: 'white-wines-from-the-rest-of-spain'
      },
      de: {
        title: 'Weißweine aus dem rest von Spanien',
        slug: 'weibweine-aus-dem-rest-von-spanien'
      },
      nb: {
        title: 'Hvite vine',
        slug: 'hvite-vine'
      },
      da: {
        title: 'Hvide vine',
        slug: 'hvide-vine'
      },
      sv: {
        title: 'Vita viner',
        slug: 'vita-viner'
      },
      fr: {
        title: 'Vins blancs',
        slug: 'vins-blancs'
      },
      nl: {
        title: 'Witte wijnen',
        slug: 'witte-wijnen'
      }
    },
    hasVariants: false,
    variants: '',
    items: [
      'listItem->product->wines->-4',
      'listItem->product->wines->-5',
      'listItem->product->wines->-6'
    ]
  } as ProductList,
  'list->wines->red-wines-1': {
    id: 'list->wines->red-wines-1',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->red-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Tintos Canarios',
        slug: 'tintos'
      },
      en: {
        title: 'Canary Red Wines',
        slug: 'canary-red-wines'
      },
      de: {
        title: 'Kanarische Rotweine',
        slug: 'kanarische-rotweine'
      },
      nb: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      da: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      sv: {
        title: 'Röda viner',
        slug: 'roda-viner'
      },
      fr: {
        title: 'Vins rouges',
        slug: 'vins-rouges'
      },
      nl: {
        title: 'Rode wijnen',
        slug: 'rode-wijnen'
      }
    },
    hasVariants: false,
    variants: '',
    items: ['listItem->product->wines->-8', 'listItem->product->wines->-9']
  } as ProductList,
  'list->wines->red-wines-2': {
    id: 'list->wines->red-wines-2',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->red-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Tintos del resto de España',
        slug: 'vinos-tintos-del-resto-de-espana'
      },
      en: {
        title: 'Red Wines from the Rest of Spain',
        slug: 'red-wines-from-the-rest-of-spain'
      },
      de: {
        title: 'Rotweine aus dem rest von Spanien',
        slug: 'rotweine-aus-dem-rest-von-spanien'
      },
      nb: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      da: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      sv: {
        title: 'Röda viner',
        slug: 'roda-viner'
      },
      fr: {
        title: 'Vins rouges',
        slug: 'vins-rouges'
      },
      nl: {
        title: 'Rode wijnen',
        slug: 'rode-wijnen'
      }
    },
    hasVariants: false,
    variants: '',
    items: [
      'listItem->product->wines->-10',
      'listItem->product->wines->-11',
      'listItem->product->wines->-12',
      'listItem->product->wines->-13',
      'listItem->product->wines->-14',
      'listItem->product->wines->-15'
    ]
  } as ProductList,
  'list->wines->rose-wines-1': {
    id: 'list->wines->rose-wines-1',
    type: 'product',
    active: true,
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->meals->short-title',
    defaultImg: '',
    mainImg: '',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->rose-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Rosados',
        slug: 'vinos-rosados'
      },
      en: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      de: {
        title: 'Roséweine',
        slug: 'roseweine'
      },
      nb: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      da: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      sv: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      fr: {
        title: 'Vins rosés',
        slug: 'vins-roses'
      },
      nl: {
        title: 'Rosé wijnen',
        slug: 'rose-wijnen'
      }
    },
    hasVariants: false,
    variants: '',
    items: ['listItem->product->wines->-7']
  } as ProductList,
  'list->info->allergens': {
    id: 'list->info->allergens',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [],
    editable: false,
    maxItems: 50,
    categories: [],
    displayInfo: {
      es: {
        title: 'Alergénicos',
        slug: 'comidas-alergenicos'
      },
      en: {
        title: 'Allergens',
        slug: 'meals-allergens'
      },
      de: {
        title: 'Allergene',
        slug: 'allergene'
      },
      nb: {
        title: 'Allergener',
        slug: 'allergener'
      },
      da: {
        title: 'Allergener',
        slug: 'allergener'
      },
      sv: {
        title: 'Allergener',
        slug: 'allergener'
      },
      fr: {
        title: 'Allergènes',
        slug: 'allergenes'
      },
      nl: {
        title: 'Allergenen',
        slug: 'allergenen'
      }
    },
    items: []
  } as ProductList,
  'list->info->gallery': {
    id: 'list->info->gallery',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    variants: '',
    show: true,
    showTitle: false,
    showExtraInfo: false,
    showDescription: false,
    template: 'template->list->default',
    selectableItems: [],
    editable: false,
    maxItems: 50,
    categories: [],
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
    },
    items: []
  } as ProductList
};
