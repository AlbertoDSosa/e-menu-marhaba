import { InfoCategory, ProductCategory } from 'definitions/models';

export const categories: { [key: string]: ProductCategory | InfoCategory } = {
  // 'category->desserts': {
  //   id: 'category->desserts',
  //   type: 'product',
  //   active: false,
  //   hasVariants: false,
  //   variants: '',
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
  //     'item->product->desserts->-1',
  //     'item->product->desserts->-2',
  //     'item->product->desserts->-3',
  //     'item->product->desserts->-4',
  //     'item->product->desserts->-5',
  //     'item->product->desserts->-6'
  //   ]
  // },
  'category->meals->starters': {
    id: 'category->meals->starters',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->meals->starters->pan-arabe-1',
      'item->product->meals->starters->pan-con-alioli-2',
      'item->product->meals->starters->vegetable-and-meat-soup-3',
      'item->product->meals->starters->arab-patty-with-cheese-and-honey-4',
      'item->product->meals->starters->arab-patty-with-vegetables-5',
      'item->product->meals->starters->arab-patty-with-spinach-6',
      'item->product->meals->starters->arab-patty-with-chicken-and-spices-7',
      'item->product->meals->starters->arab-patty-with-meat-and-pinions-8',
      'item->product->meals->starters->chickpeas-croquettes-9',
      'item->product->meals->starters->arab-patty-with-seadfood-10',
      'item->product->meals->starters->pastela-de-pollo-con-almendra-11',
      'item->product->meals->starters->spinachs-croquettes-12',
      'item->product->meals->starters->lamb-croquettes-13',
      'item->product->meals->starters->croquetas-de-datiles-con-pera-14',
      'item->product->meals->starters->hummus-15',
      'item->product->meals->starters->hummus-lenteja-16',
      'item->product->meals->starters->zaaluk-17',
      'item->product->meals->starters->ensalada-cous-cous-18',
      'item->product->meals->starters->ensalada-pollo-crujiente-19',
      'item->product->meals->starters->ensalada-marroqui-20',
      'item->product->meals->starters->ensalada-gourmet-21',
      'item->product->meals->starters->berengenas-miel-22',
      'item->product->meals->starters->berenjenas-rellenas-de-ternera-23',
      'item->product->meals->starters->pulpo-brasa-24',
      'item->product->meals->starters->queso-ahumado-25',
      'item->product->meals->starters->chistorras-morunas-26',
      'item->product->meals->starters->marchica-27',
      'item->product->meals->starters->gambas-al-pil-pil-28'
    ]
  },
  'category->meals->skewers': {
    id: 'category->meals->skewers',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
        title: 'Brochettes',
        extraInfo: '(Garniture de pommes de terre et de légumes)',
        slug: ''
      },
      nl: {
        title: 'Sjasliek',
        extraInfo: '(Geserveerd met frieten en groenten)',
        slug: ''
      }
    },
    items: [
      'item->product->meals->skewers->pinchitos-de-pollo-1',
      'item->product->meals->skewers->pinchitos-de-ternera-2',
      'item->product->meals->skewers->pinchitos-de-cordero-3',
      'item->product->meals->skewers->pinchitos-vegetarianos-4',
      'item->product->meals->skewers->mar-y-tierra-5'
    ]
  },
  'category->meals->cous-cous': {
    id: 'category->meals->cous-cous',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->meals->cous-cous->cous-cous-de-verduras-1',
      'item->product->meals->cous-cous->cous-cous-de-pollo-2',
      'item->product->meals->cous-cous->cous-cous-de-ternera-3',
      'item->product->meals->cous-cous->cous-cous-de-cordero-4',
      'item->product->meals->cous-cous->cous-cous-de-marisco-5',
      'item->product->meals->cous-cous->cous-cous-de-carne-vegetal-6'
    ]
  },
  'category->meals->tajin': {
    id: 'category->meals->tajin',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->meals->tajin->tajin-de-ternera-1',
      'item->product->meals->tajin->tajin-de-pollo-2',
      'item->product->meals->tajin->tajin-de-cordero-3',
      'item->product->meals->tajin->tajin-de-kafta-4',
      'item->product->meals->tajin->tajin-con-carne-vegetal-5'
    ]
  },
  'category->meals->specials': {
    id: 'category->meals->specials',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Especialidades',
        slug: 'especialidades'
      },
      en: {
        title: 'Specials',
        slug: 'specials'
      },
      de: {
        title: 'Spezialitäten',
        slug: 'spezialitaten'
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
        title: 'Spécialité',
        slug: 'specialite'
      },
      nl: {
        title: 'Specialiteit',
        slug: 'specialiteit'
      }
    },
    items: [
      'item->product->meals->specials->chuletas-de-cordero-1',
      'item->product->meals->specials->calamar-a-la-brasa-2',
      'item->product->meals->specials->atun-rojo-a-la-brasa-3',
      'item->product->meals->specials->t-bone-a-la-brasa-4',
      'item->product->meals->specials->solomillo-a-la-brasa-5',
      'item->product->meals->specials->hamburguesa-atun-rojo-6',
      'item->product->meals->specials->hamburguesa-de-pollo-7',
      'item->product->meals->specials->hamburguesa-de-ternera-8'
    ]
  },
  'category->wines->wines': {
    id: 'category->wines->wines',
    active: true,
    type: 'product',
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
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'item->product->wines->-1',
      'item->product->wines->-2',
      'item->product->wines->-3',
      'item->product->wines->-4',
      'item->product->wines->-5',
      'item->product->wines->-6',
      'item->product->wines->-7',
      'item->product->wines->-8',
      'item->product->wines->-9',
      'item->product->wines->-10',
      'item->product->wines->-11',
      'item->product->wines->-12',
      'item->product->wines->-13',
      'item->product->wines->-14',
      'item->product->wines->-15'
    ]
  }
};
