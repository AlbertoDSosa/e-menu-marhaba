import { Info, Menu, Product } from 'definitions/models';

export const items: { [key: string]: Info | Product | Menu } = {
  ///// meals->starters->

  'item->product->meals->starters->pan-arabe-1': {
    id: 'item->product->meals->starters->pan-arabe-1',
    type: 'product',
    images: ['image->item->product->pan-arabe-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->pan-arabe-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pan árabe',
        slug: 'pan-arabe'
      },
      en: {
        description: '',
        title: 'Arab bread',
        slug: 'arab-bread'
      },
      de: {
        description: '',
        title: 'Arabische Brot',
        slug: 'arabische-brot'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Pain',
        slug: 'pain'
      },
      nl: {
        description: '',
        title: 'Brood',
        slug: 'brood'
      }
    },
    price: { amount: '1,50' },
    number: '1'
  } as Product,
  'item->product->meals->starters->pan-con-alioli-2': {
    id: 'item->product->meals->starters->pan-con-alioli-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pan con alioli',
        slug: 'pan-con-alioli'
      },
      en: {
        description: '',
        title: 'Bread with alioli',
        slug: 'bread-with-alioli'
      },
      de: {
        description: '',
        title: 'Brot mit alioli',
        slug: 'brot-mit-alioli'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Pain aux alioli',
        slug: 'pain-aux-alioli'
      },
      nl: {
        description: '',
        title: 'Brood met alioli',
        slug: 'brood-met-alioli'
      }
    },
    price: { amount: '2,50' },
    number: '2'
  } as Product,
  'item->product->meals->starters->vegetable-and-meat-soup-3': {
    id: 'item->product->meals->starters->vegetable-and-meat-soup-3',
    type: 'product',
    images: ['image->item->product->sopa-harera-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->sopa-harera-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Sopa Harera',
        slug: 'sopa-harera'
      },
      en: {
        description: '',
        title: 'Vegetable and meat soup',
        slug: 'vegetable-and-meat-soup'
      },
      de: {
        description: '',
        title: 'Gremüsesuppe it Fleisch',
        slug: 'gremusesuppe-it-fleisch'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '(soupe marocaine)',
        title: 'Harira',
        slug: 'harira'
      },
      nl: {
        description: '(soupe marocaine)',
        title: 'Harira',
        slug: 'harira'
      }
    },
    price: { amount: '4,50' },
    number: '3'
  } as Product,
  'item->product->meals->starters->arab-patty-with-cheese-and-honey-4': {
    id: 'item->product->meals->starters->arab-patty-with-cheese-and-honey-4',
    type: 'product',
    images: ['image->item->product->briwat-queso-miel-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->briwat-queso-miel-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Briwat de Queso y Miel',
        slug: 'briwat-de-queso-y-miel'
      },
      en: {
        description: '',
        title: 'Arab Patty with Cheese and Honey',
        slug: 'arab-patty-with-cheese-and-honey'
      },
      de: {
        description: '',
        title: 'Arabische Teigtasche mit Kase und Honig',
        slug: 'arabische-teigtasche-mit-kase-und-honig'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Briouate au fromage et au miel',
        slug: 'briouate-au-fromage-et-au-miel'
      },
      nl: {
        description: '',
        title: 'Briwat pasteitje met kaas en honing',
        slug: 'briwat-pasteitje-met-kaas-en-honing'
      }
    },
    price: { amount: '6,50' },
    number: '4'
  } as Product,
  'item->product->meals->starters->arab-patty-with-vegetables-5': {
    id: 'item->product->meals->starters->arab-patty-with-vegetables-5',
    type: 'product',
    images: ['image->item->product->briwat-verduras-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->briwat-verduras-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Briwat de Verduras',
        slug: 'briwat-de-verduras'
      },
      en: {
        description: '',
        title: 'Arab Patty with Vegetables',
        slug: 'arab-patty-with-vegetables'
      },
      de: {
        description: '',
        title: 'Arabische Teigtasche mit Gemüse',
        slug: 'arabische-teigtasche-mit-gemuse'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Briouate aux légumes',
        slug: 'briouate-aux-legumes'
      },
      nl: {
        description: '',
        title: 'Briwat pasteitje met groenten',
        slug: 'briwat-pasteitje-met-groenten'
      }
    },
    price: { amount: '6,50' },
    number: '5'
  } as Product,
  'item->product->meals->starters->arab-patty-with-spinach-6': {
    id: 'item->product->meals->starters->arab-patty-with-spinach-6',
    type: 'product',
    images: ['image->item->product->briwat-espinacas-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->briwat-espinacas-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Briwat de Espinacas con Langostinos y Champiñones',
        slug: 'briwat-de-espinacas'
      },
      en: {
        description: '',
        title: 'Arab Patty with Spinach, Prawns and Mushrooms',
        slug: 'arab-patty-with-spinach'
      },
      de: {
        description: '',
        title:
          'Arabische Teigpastete gefüllt mit Spinat, Garnelen uns Champignons',
        slug: 'arabische-teigpastete-gefullt-mit-spinat'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Briouate aux épinards, avec crevettes et champignons',
        slug: 'briouate-aux-epinards'
      },
      nl: {
        description: '',
        title: 'Briwat pasteitjes van spinazie, met garnalen en champignons',
        slug: 'briwat-pasteitjes-van-spinazie'
      }
    },
    price: { amount: '6,50' },
    number: '6'
  } as Product,
  'item->product->meals->starters->arab-patty-with-chicken-and-spices-7': {
    id: 'item->product->meals->starters->arab-patty-with-chicken-and-spices-7',
    type: 'product',
    images: ['image->item->product->briwat-pollo-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->briwat-pollo-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Briwat de Pollo',
        slug: 'briwat-de-pollo'
      },
      en: {
        description: '',
        title: 'Arab Patty with Chicken and Spices',
        slug: 'arab-patty-with-chicken-and-spices'
      },
      de: {
        description: '',
        title: 'Arabische Teigpastete mit Hähnchenfleisch',
        slug: 'arabische-teigpastete-mit-hahnchenfleisch'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Briouate au poulet',
        slug: 'briouate-au-poulet'
      },
      nl: {
        description: '',
        title: 'Briwat pasteitje van kip',
        slug: 'briwat-pasteitje-van-kip'
      }
    },
    price: { amount: '6,50' },
    number: '7'
  } as Product,
  'item->product->meals->starters->arab-patty-with-meat-and-pinions-8': {
    id: 'item->product->meals->starters->arab-patty-with-meat-and-pinions-8',
    type: 'product',
    images: ['image->item->product->briwat-carne-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->briwat-carne-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Briwat de Carne con Piñones',
        slug: 'briwat-de-carne-con-pinones'
      },
      en: {
        description: '',
        title: 'Arab Patty with Meat and Pinions',
        slug: 'arab-patty-with-meat-and-pinions'
      },
      de: {
        description: '',
        title: 'Arabische Partei mit Fleisch und Pinions',
        slug: 'arabische-partei-mit-fleisch-und-pinions'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Briouate à la viande avec pignons',
        slug: 'briouate-a-la-viande-avec-pignons'
      },
      nl: {
        description: '',
        title: 'Briwat pasteitje van vlees met pijnboompitten',
        slug: 'briwat-pasteitje-van-vlees'
      }
    },
    price: { amount: '6,50' },
    number: '8'
  } as Product,
  'item->product->meals->starters->chickpeas-croquettes-9': {
    id: 'item->product->meals->starters->chickpeas-croquettes-9',
    type: 'product',
    images: ['image->item->product->falafel-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->falafel-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Falafel (Croquetas de Garbanzos)',
        slug: 'falafel'
      },
      en: {
        description: '',
        title: 'Falafel (Chickpeas Croquettes)',
        slug: 'chickpeas-croquettes'
      },
      de: {
        description: '',
        title: 'Falafel (Kichererbsen Krokette mit Gewürzen)',
        slug: 'kichererbsen-krokette-mit-gewurzen'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Falafel',
        slug: 'falafel'
      },
      nl: {
        description: '',
        title: 'Falafel',
        slug: 'falafel'
      }
    },
    price: { amount: '6,90' },
    number: '9'
  } as Product,
  'item->product->meals->starters->arab-patty-with-seadfood-10': {
    id: 'item->product->meals->starters->arab-patty-with-seadfood-10',
    type: 'product',
    images: ['image->item->product->pastelas-marisco-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->pastelas-marisco-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pastela de Marisco',
        slug: 'pastela-de-marisco'
      },
      en: {
        description: '',
        title: 'Arab Patty with Seadfood',
        slug: 'arab-patty-with-seadfood'
      },
      de: {
        description: '',
        title: 'Arabische Teigpastete mit Meeresfrüchten',
        slug: 'arabische-teigpastete-mit-meeresfruchten'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Pastilla aux fruits de mer',
        slug: 'pastilla-aux-fruits-de-mer'
      },
      nl: {
        description: '',
        title: 'Zeevruchtentaart',
        slug: 'zeevruchtentaart'
      }
    },
    price: { amount: '6,90' },
    number: '10'
  } as Product,
  'item->product->meals->starters->pastela-de-pollo-con-almendra-11': {
    id: 'item->product->meals->starters->pastela-de-pollo-con-almendra-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pastela de pollo con almendra',
        slug: 'pastela-de-pollo-con-almendra'
      },
      en: {
        description: '',
        title: 'Chicken and almond pie',
        slug: 'chicken-and-almond-pie'
      },
      de: {
        description: '',
        title: 'Hähnchen pastete mit mandeln',
        slug: 'hahnchen-pastete-mit-mandeln'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Pastilla de poulet aux amandes',
        slug: 'pastilla-de-poulet-aux-amandes'
      },
      nl: {
        description: '',
        title: 'Kippentaart met amandelen',
        slug: 'kippentaart-met-amandelen'
      }
    },
    price: { amount: '6,95' },
    number: '11'
  } as Product,
  'item->product->meals->starters->spinachs-croquettes-12': {
    id: 'item->product->meals->starters->spinachs-croquettes-12',
    type: 'product',
    images: ['image->item->product->croqueta-espinacas-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->croqueta-espinacas-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Croquetas de Espinacas',
        slug: 'croquetas-de-espinacas'
      },
      en: {
        description: '',
        title: 'Spinachs Croquettes',
        slug: 'spinachs-croquettes'
      },
      de: {
        description: '',
        title: 'Spinatkroketten',
        slug: 'spinatkroketten'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: `Croquettes d'épinards`,
        slug: 'croquettes-d-epinards'
      },
      nl: {
        description: '',
        title: 'Kroketten van spinazie',
        slug: 'kroketten-van-spinazie'
      }
    },
    price: { amount: '6,90' },
    number: '12'
  } as Product,
  'item->product->meals->starters->lamb-croquettes-13': {
    id: 'item->product->meals->starters->lamb-croquettes-13',
    type: 'product',
    images: ['image->item->product->croqueta-cordero-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->croqueta-cordero-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Croquetas de Cordero',
        slug: 'croquetas-de-cordero'
      },
      en: {
        description: '',
        title: 'Lamb Croquettes',
        slug: 'lamb-croquettes'
      },
      de: {
        description: '',
        title: 'Lammkroketten',
        slug: 'lammkroketten'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: `Croquettes d'agneau`,
        slug: 'croquettes-d-agneau'
      },
      nl: {
        description: '',
        title: 'Lamskroketten',
        slug: 'lamskroketten'
      }
    },
    price: { amount: '7,90' },
    number: '13'
  } as Product,
  'item->product->meals->starters->croquetas-de-datiles-con-pera-14': {
    id: 'item->product->meals->starters->croquetas-de-datiles-con-pera-14',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Croquetas de dátiles con pera',
        slug: 'croquetas-de-datiles-con-pera'
      },
      en: {
        description: '',
        title: 'Date croquettes with pear',
        slug: 'date-croquettes-with-pear'
      },
      de: {
        description: '',
        title: 'Dattel-Kroketten mit birne',
        slug: 'dattel-kroketten-mit-birne'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Croquettes de dattes à la poire',
        slug: 'croquettes-de-dattes-a-la-poire'
      },
      nl: {
        description: '',
        title: 'Dadelkroketten met peer',
        slug: 'dadelkroketten-met-peer'
      }
    },
    price: { amount: '7,90' },
    number: '14'
  } as Product,
  'item->product->meals->starters->hummus-15': {
    id: 'item->product->meals->starters->hummus-15',
    type: 'product',
    images: ['image->item->product->hummus-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->hummus-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Hummus (Crema de Garbanzos)',
        slug: 'hummus'
      },
      en: {
        description: '',
        title: 'Hummus (Chickpeas Cream)',
        slug: 'hummus'
      },
      de: {
        description: '',
        title: 'Hummus (Kichererbsen Brei mit Gewürzen)',
        slug: 'hummus'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Houmous',
        slug: 'houmous'
      },
      nl: {
        description: '',
        title: 'Hummus',
        slug: 'hummus'
      }
    },
    price: { amount: '5,95' },
    number: '15'
  } as Product,
  'item->product->meals->starters->hummus-lenteja-16': {
    id: 'item->product->meals->starters->hummus-lenteja-16',
    type: 'product',
    images: ['image->item->product->hummus-lentejas-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->hummus-lentejas-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Hummus de lentejas con trufa',
        slug: 'hummus-de-lentejas-con-trufa'
      },
      en: {
        description: '',
        title: 'Lentil and Truffle Hummus',
        slug: 'lentil-and-truffle-hummus'
      },
      de: {
        description: '',
        title: 'Linsen-Hummus mit Trüffle',
        slug: 'linsen-hummus-mit-truffle'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Houmous de lentilles à la truffe',
        slug: 'houmous-de-lentilles-a-la-truffe'
      },
      nl: {
        description: '',
        title: 'Hummus met linzen en truffel',
        slug: 'hummus-met-linzen-en-truffel'
      }
    },
    price: { amount: '6,90' },
    number: '16'
  } as Product,
  'item->product->meals->starters->zaaluk-17': {
    id: 'item->product->meals->starters->zaaluk-17',
    type: 'product',
    images: ['image->item->product->zaaluk-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->zaaluk-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zaaluk (Crema de Berenjena)',
        slug: 'zaaluk'
      },
      en: {
        description: '',
        title: 'Zaaluk (Aubergine Creams)',
        slug: 'zaaluk'
      },
      de: {
        description: '',
        title: 'Zaaluk (Auberginen Bre)',
        slug: 'zaaluk'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: `Zaaluk caviar d'aubergine`,
        slug: 'zaaluk-caviar-d-aubergine'
      },
      nl: {
        description: '',
        title: 'Zaaluk crème van aubergines',
        slug: 'zaaluk-creme-van-aubergines'
      }
    },
    price: { amount: '6,95' },
    number: '17'
  } as Product,
  'item->product->meals->starters->ensalada-cous-cous-18': {
    id: 'item->product->meals->starters->ensalada-cous-cous-18',
    type: 'product',
    images: ['image->item->product->ensalada-cous-cous-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->ensalada-cous-cous-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Tabule (Ensalada con Cous Cous)',
        slug: 'tabule'
      },
      en: {
        description: '',
        title: 'Tabule (Cous Cous Salad)',
        slug: 'tabule'
      },
      de: {
        description: '',
        title: 'Tabule (Kuskus Salat mit Tomate und Gewürzen)',
        slug: 'tabule'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Tabulé (salade avec semoule de blé)',
        slug: 'tabule'
      },
      nl: {
        description: '',
        title: 'Tabulé (Cous cous salade)',
        slug: 'tabule'
      }
    },
    price: { amount: '8,50' },
    number: '18'
  } as Product,
  'item->product->meals->starters->ensalada-pollo-crujiente-19': {
    id: 'item->product->meals->starters->ensalada-pollo-crujiente-19',
    type: 'product',
    images: ['image->item->product->ensalada-pollo-crujiente-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->ensalada-pollo-crujiente-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Ensalada de Pollo Crujiente',
        slug: 'ensalada-de-pollo-crujiente'
      },
      en: {
        description: '',
        title: 'Crunchy Chicken Salad',
        slug: 'crunchy-chicken-salad'
      },
      de: {
        description: '',
        title: 'Knuspriger Hühnersalat',
        slug: 'knuspriger-huhnersalat'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Salade de poulet croustillant',
        slug: 'salade-de-poulet-croustillant'
      },
      nl: {
        description: '',
        title: 'Salade van krokante kip',
        slug: 'salade-van-krokante-kip'
      }
    },
    price: { amount: '11,90' },
    number: '19'
  } as Product,
  'item->product->meals->starters->ensalada-marroqui-20': {
    id: 'item->product->meals->starters->ensalada-marroqui-20',
    type: 'product',
    images: ['image->item->product->ensalada-marroqui-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->ensalada-marroqui-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con aguacate',
        title: 'Ensalada marroquí',
        slug: 'ensalada-marroqui'
      },
      en: {
        description: '',
        title: 'Moroccan salad with avocado',
        slug: 'moroccan-salad'
      },
      de: {
        description: '',
        title: 'Marokkanischer salat mit avocado',
        slug: 'marokkanischer-salat'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Salade marocaine avec avocat',
        slug: 'salade-marocaine'
      },
      nl: {
        description: '',
        title: 'Marokkaanse salade met avocado',
        slug: 'marokkaanse-salade'
      }
    },
    price: { amount: '10,95' },
    number: '20'
  } as Product,
  'item->product->meals->starters->ensalada-gourmet-21': {
    id: 'item->product->meals->starters->ensalada-gourmet-21',
    type: 'product',
    images: ['image->item->product->ensalada-gourmet-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->ensalada-gourmet-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Ensalada Gourmet (Queso de Cabra)',
        slug: 'ensalada-gourmet'
      },
      en: {
        description: '',
        title: 'Gourmet Salad (Goat Cheese)',
        slug: 'gourmet-salad'
      },
      de: {
        description: '',
        title: 'Ziegenkäse Salat und Obst',
        slug: 'ziegenkase-salat-und-obst'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Salade gourmande (fromage de chèvre)',
        slug: 'salade-gourmande'
      },
      nl: {
        description: '',
        title: 'Salade Gourmet (Geitenkaas)',
        slug: 'salade-gourmet'
      }
    },
    price: { amount: '11,90' },
    number: '21'
  } as Product,
  'item->product->meals->starters->berengenas-miel-22': {
    id: 'item->product->meals->starters->berengenas-miel-22',
    type: 'product',
    images: ['image->item->product->berengenas-miel-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->berengenas-miel-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Berenjenas Fritas con Miel',
        slug: 'berenjenas-fritas-con-miel'
      },
      en: {
        description: '',
        title: 'Fried Aubergine with Honey',
        slug: 'fried-aubergine-with-honey'
      },
      de: {
        description: '',
        title: 'Frittierte Aubergine mit Honig',
        slug: 'frittierte-aubergine-mit-honig'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Aubergines frites au miel',
        slug: 'aubergines-frites-au-miel'
      },
      nl: {
        description: '',
        title: 'Gebakken aubergines met honing',
        slug: 'gebakken-aubergines'
      }
    },
    price: { amount: '7,50' },
    number: '22'
  } as Product,
  'item->product->meals->starters->berenjenas-rellenas-de-ternera-23': {
    id: 'item->product->meals->starters->berenjenas-rellenas-de-ternera-23',
    type: 'product',
    images: ['image->item->product->berengena-rellena-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->berengena-rellena-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Berenjenas rellenas de Ternera',
        slug: 'berenjenas-rellenas-de-ternera'
      },
      en: {
        description: '',
        title: 'Veal stuffed Aubergine',
        slug: 'veal-stuffed-aubergine'
      },
      de: {
        description: '',
        title: 'Aubergine Gefüllt mit Kalbfleisch',
        slug: 'aubergine-gefüllt-mit-kalbfleisch'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Aubergines farcies à la viande de bœuf',
        slug: 'aubergines-farcies'
      },
      nl: {
        description: '',
        title: 'Aubergines gevuld met kalfsvlees',
        slug: 'aubergines-gevuld'
      }
    },
    price: { amount: '10,95' },
    number: '23'
  } as Product,
  'item->product->meals->starters->pulpo-brasa-24': {
    id: 'item->product->meals->starters->pulpo-brasa-24',
    type: 'product',
    images: ['image->item->product->pulpo-brasa-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->pulpo-brasa-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con crema de batata',
        title: 'Pulpo a la brasa con crema de batata',
        slug: 'pulpo-brasa'
      },
      en: {
        description: '',
        title: 'Grilled octopus with sweet potato cream',
        slug: 'grilled-octopus'
      },
      de: {
        description: '',
        title: 'Gegrillter Tintenfisch mit Kartoffelcreme',
        slug: 'gegrillter-tintenfisch'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: `Poulpe braisé accompagné d'une crème de patate douce`,
        slug: 'poulpe-braise'
      },
      nl: {
        description: '',
        title: 'Gegrilde octopus met zoete aardappelcrème',
        slug: 'gegrilde-octopus'
      }
    },
    price: { amount: '13,95' },
    number: '24'
  } as Product,
  'item->product->meals->starters->queso-ahumado-25': {
    id: 'item->product->meals->starters->queso-ahumado-25',
    type: 'product',
    images: ['image->item->product->queso-ahumado-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->queso-ahumado-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Queso Ahumado con Crema de Higo',
        slug: 'queso-ahumado-con-crema-de-higo'
      },
      en: {
        description: '',
        title: 'Skomed Cheese with Fig Cream',
        slug: 'skomed-cheese-with-fig-cream'
      },
      de: {
        description: '',
        title: 'Geräucherter Käse mit Feigencreme',
        slug: 'geraucherter-käse-mit-feigencreme'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Fromage fumé avec crème de figues',
        slug: 'fromage-fume'
      },
      nl: {
        description: '',
        title: 'Gerookte kaas met zoete aardappelcrème',
        slug: 'gerookte-kaas'
      }
    },
    price: { amount: '9,55' },
    number: '25'
  } as Product,
  'item->product->meals->starters->chistorras-morunas-26': {
    id: 'item->product->meals->starters->chistorras-morunas-26',
    type: 'product',
    images: ['image->item->product->chistorras-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->chistorras-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Chistorras Morunas',
        slug: 'chistorras-morunas'
      },
      en: {
        description: '',
        title: 'Moroccan Spicy Sausage',
        slug: 'moroccan-spicy-sausage'
      },
      de: {
        description: '',
        title: 'Chistorra auf Marokkanische Art',
        slug: 'chistorra-auf-marokkanische-art'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Saucisses chistorras',
        slug: 'saucisses-chistorras'
      },
      nl: {
        description: '',
        title: 'Chistorra op Marokkaanse wijze',
        slug: 'chistorra-op-marokkaanse-wijze'
      }
    },
    price: { amount: '10,95' },
    number: '26'
  } as Product,
  'item->product->meals->starters->marchica-27': {
    id: 'item->product->meals->starters->marchica-27',
    type: 'product',
    images: ['image->item->product->marchica-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->marchica-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Marchica (Calabacín y Langostinos con Salsa de Marisco)',
        slug: 'marchica'
      },
      en: {
        description: '',
        title: 'Marchica (Zucchini, Prawns with Seafood Sauce)',
        slug: 'marchica'
      },
      de: {
        description: '',
        title: 'Marchica (Zucchini und Langusten mit Meeresfrüchtesoße)',
        slug: 'marchica'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Marchica courgettes et crevettes avec sauce aux fruits de mer',
        slug: 'marchica-courgettes'
      },
      nl: {
        description: '',
        title: 'Marchica courgette en garnalen in zeevruchtensaus',
        slug: 'marchica-courgette'
      }
    },
    price: { amount: '11,95' },
    number: '27'
  } as Product,
  'item->product->meals->starters->gambas-al-pil-pil-28': {
    id: 'item->product->meals->starters->gambas-al-pil-pil-28',
    type: 'product',
    images: ['image->item->product->gambas-pil-pil-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->gambas-pil-pil-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Gambas al Pil Pil',
        slug: 'gambas-al-pil-pil'
      },
      en: {
        description: '',
        title: 'Fried Shrimps with Spices',
        slug: 'fried-shrimps-with-spices'
      },
      de: {
        description: '',
        title: 'Garnelen Pil Pil',
        slug: 'garnelen-pil-pil'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Crevettes à la sauce pil-pil',
        slug: 'crevettes-a-la-sauce-pil-pil'
      },
      nl: {
        description: '',
        title: 'Gambas Pil Pil met chilikruiden',
        slug: 'gambas-pil-pil'
      }
    },
    price: { amount: '10,50' },
    number: '28'
  } as Product,

  //// meals->skewers->
  'item->product->meals->skewers->pinchitos-de-pollo-1': {
    id: 'item->product->meals->skewers->pinchitos-de-pollo-1',
    type: 'product',
    images: ['image->item->product->pinchos-pollo-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->pinchos-pollo-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pinchitos de Pollo',
        slug: 'pinchitos-de-pollo'
      },
      en: {
        description: '',
        title: 'Chicken Skewers',
        slug: 'chicken-skewers'
      },
      de: {
        description: '',
        title: 'Kalbs Spieb',
        slug: 'kalbs-spieb'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Poulet',
        slug: 'poulet'
      },
      nl: {
        description: '',
        title: 'Kip',
        slug: 'kip'
      }
    },
    price: { amount: '11.50' },
    number: '29'
  } as Product,
  'item->product->meals->skewers->pinchitos-de-ternera-2': {
    id: 'item->product->meals->skewers->pinchitos-de-ternera-2',
    type: 'product',
    images: ['image->item->product->pinchos-ternera-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->pinchos-ternera-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pinchitos de Ternera',
        slug: 'pinchitos-de-ternera'
      },
      en: {
        description: '',
        title: 'Veal Skewers',
        slug: 'veal-skewers'
      },
      de: {
        description: '',
        title: 'Hähnchen Spieb',
        slug: 'hahnchen-spieb'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Bœuf',
        slug: 'bœuf'
      },
      nl: {
        description: '',
        title: 'Kalfsvlees',
        slug: 'kalfsvlees'
      }
    },
    price: { amount: '12,95' },
    number: '30'
  } as Product,
  'item->product->meals->skewers->pinchitos-de-cordero-3': {
    id: 'item->product->meals->skewers->pinchitos-de-cordero-3',
    type: 'product',
    images: ['image->item->product->pinchos-cordero-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->pinchos-cordero-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pinchitos de Cordero',
        slug: 'pinchitos-de-cordero'
      },
      en: {
        description: '',
        title: 'Lamb Skewers',
        slug: 'lamb-skewers'
      },
      de: {
        description: '',
        title: 'Lamm Spieb',
        slug: 'lamm-spieb'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Agneau',
        slug: 'agneau'
      },
      nl: {
        description: '',
        title: 'Lamsvlees',
        slug: 'lamsvlees'
      }
    },
    price: { amount: '13,95' },
    number: '31'
  } as Product,
  'item->product->meals->skewers->pinchitos-vegetarianos-4': {
    id: 'item->product->meals->skewers->pinchitos-vegetarianos-4',
    type: 'product',
    images: ['image->item->product->default-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pinchitos vegetarianos',
        slug: 'pinchitos-vegetarianos'
      },
      en: {
        description: '',
        title: 'Vegetarian meat substitute skewers',
        slug: 'vegetarian-meat-substitute-skewers'
      },
      de: {
        description: '',
        title: 'Vegetarischer fleischpieß',
        slug: 'vegetarischer-fleischpieß'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Végétariennes',
        slug: 'vegetariennes'
      },
      nl: {
        description: '',
        title: 'Vegetarische',
        slug: 'vegetarische'
      }
    },
    price: { amount: '12,50' },
    number: '32'
  } as Product,
  'item->product->meals->skewers->mar-y-tierra-5': {
    id: 'item->product->meals->skewers->mar-y-tierra-5',
    type: 'product',
    images: ['image->item->product->pinchos-mar-tierra-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->pinchos-mar-tierra-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'Brocheta con gambón y solomillo',
        title: 'Mar y Tierra',
        slug: 'mar-y-tierra'
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'Brochette de gambon écarlate et de steak',
        title: 'Terre et mer',
        slug: 'terre-et-mer'
      },
      nl: {
        description: 'Spies met garnalen en entrecote',
        title: 'Zee en Land',
        slug: 'zee-en-land'
      }
    },
    price: { amount: '20,95' },
    number: '33'
  } as Product,

  //// meals->cous-cous->
  'item->product->meals->cous-cous->cous-cous-de-verduras-1': {
    id: 'item->product->meals->cous-cous->cous-cous-de-verduras-1',
    type: 'product',
    images: ['image->item->product->cous-cous-verduras-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->cous-cous-verduras-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Cous Cous de Verduras',
        slug: 'cous-cous-de-verduras'
      },
      en: {
        description: '',
        title: 'Original Cous Cous with vegetables',
        slug: 'original-cous-cous-with-vegetables'
      },
      de: {
        description: '',
        title: 'Original Cous Cous mit Gemuse',
        slug: 'original-cous-cous-mit-gemuse'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Couscous de légumes',
        slug: 'couscous-de-legumes'
      },
      nl: {
        description: '',
        title: 'Couscous met groenten',
        slug: 'couscous-met-groenten'
      }
    },
    price: { amount: '9,50' },
    number: '34'
  } as Product,
  'item->product->meals->cous-cous->cous-cous-de-pollo-2': {
    id: 'item->product->meals->cous-cous->cous-cous-de-pollo-2',
    type: 'product',
    images: ['image->item->product->cous-cous-pollo-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->cous-cous-pollo-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->dairy-products-10',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: 'con verduras y cebolla caramelizada',
        title: 'Cous Cous de Pollo',
        slug: 'cous-cous-de-pollo'
      },
      en: {
        description: 'with vegetables and caramelized onion',
        title: 'Chicken Cous Cous',
        slug: 'chicken-cous-cous'
      },
      de: {
        description: 'Gemüse und karamellisiertem zwiebel',
        title: 'Cous Cous mit Fleisch',
        slug: 'cous-cous-mit-fleisch'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'avec légumes et oignon caramélisé',
        title: 'Couscous de poulet',
        slug: 'couscous-de-poulet'
      },
      nl: {
        description: 'groenten en gekarameliseerde ui',
        title: 'Couscous met kip',
        slug: 'couscous-met-ki'
      }
    },
    price: { amount: '11,95' },
    number: '35'
  } as Product,
  'item->product->meals->cous-cous->cous-cous-de-ternera-3': {
    id: 'item->product->meals->cous-cous->cous-cous-de-ternera-3',
    type: 'product',
    images: ['image->item->product->default-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con verduras y cebolla caramelizada',
        title: 'Cous Cous de Ternera',
        slug: 'cous-cous-de-ternera'
      },
      en: {
        description: 'with vegetables and caramelized onion',
        title: 'Beef Cous Cous',
        slug: 'beef-cous-cous'
      },
      de: {
        description: 'Gemüse und karamellisiertem zwiebel',
        title: 'Original Cous Cous mit Kalbsfleisch',
        slug: 'original-cous-cous-mit-kalbsfleisch'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'avec légumes et oignon caramélisé',
        title: 'Couscous de bœuf',
        slug: 'couscous-de-bœuf'
      },
      nl: {
        description: 'groenten en gekaramelliseerde ui',
        title: 'Couscous met kalfsvlees',
        slug: 'couscous-met-kalfsvlees'
      }
    },
    price: { amount: '12.95' },
    number: '36'
  } as Product,
  'item->product->meals->cous-cous->cous-cous-de-cordero-4': {
    id: 'item->product->meals->cous-cous->cous-cous-de-cordero-4',
    type: 'product',
    images: ['image->item->product->cous-cous-cordero-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->cous-cous-cordero-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con verduras y cebolla caramelizada',
        title: 'Cous Cous de Cordero',
        slug: 'cous-cous-de-cordero'
      },
      en: {
        description: 'vegetables and caramelized onion',
        title: 'Original Cous Cous with Lamb',
        slug: 'original-cous-cous-with-lamb'
      },
      de: {
        description: 'Gemüse und karamellisiertem zwiebel',
        title: 'Cous Cous mit Lamm',
        slug: 'cous-cous-mit-lamm'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'avec légumes et oignon caramélisé',
        title: `Couscous d'agneau`,
        slug: 'couscous-d-agneau'
      },
      nl: {
        description: 'groenten en gekaramelliseerde ui',
        title: 'Couscous met lamsvlees',
        slug: 'couscous-met-lamsvlees'
      }
    },
    price: { amount: '13,95' },
    number: '37'
  } as Product,
  'item->product->meals->cous-cous->cous-cous-de-marisco-5': {
    id: 'item->product->meals->cous-cous->cous-cous-de-marisco-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title:
          'Cous Cous de Marisco con merluza fresca, langostinos, almejas y cebolla caramelizada',
        slug: 'cous-cous-de-marisco'
      },
      en: {
        description: '',
        title:
          'Seafood Cous Cous with fresh hake, langoustines, clams and caramelized onion',
        slug: 'seafood-cous-cous'
      },
      de: {
        description: '',
        title:
          'Meeresfrüchte-Cous Cous mit Garnelen, Muscheln, Frischem Seehecht und karamellisierten Zwiebeln',
        slug: 'meeresfruchte-cous-cous'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description:
          'avec merlu frais, crevettes, palourdes et oignon caramélisé',
        title: 'Couscous de fruits de mer',
        slug: 'couscous-de-fruits-de-mer'
      },
      nl: {
        description:
          'met heek, garnalen, venusschelpen en gekaramelliseerde ui',
        title: 'Couscous van zeevruchten',
        slug: 'couscous-van-zeevruchten'
      }
    },
    price: { amount: '16,50' },
    number: '38'
  } as Product,
  'item->product->meals->cous-cous->cous-cous-de-carne-vegetal-6': {
    id: 'item->product->meals->cous-cous->cous-cous-de-carne-vegetal-6',
    type: 'product',
    images: ['image->item->product->cous-cous-verduras-tofu-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->cous-cous-verduras-tofu-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con verdura, tofu y cebolla caramelizada',
        title: 'Cous Cous de carne vegetal',
        slug: 'cous-cous-de-carne-vegetal'
      },
      en: {
        description: 'with vegetables, tofu and caramelized onion',
        title: 'Vegetarian meat substitute Cous Cous ',
        slug: 'vegetarian-meat-substitute-cous-cous'
      },
      de: {
        description: 'mit Tofu und Gemüse',
        title: 'Vegetarischer cous cous',
        slug: 'cous-cous-aus-gemusefleisch'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'aux légumes, tofu et oignon caramélisé',
        title: 'Couscous de viande végétale',
        slug: 'couscous-de-viande-vegetale'
      },
      nl: {
        description: 'groenten en gekaramelliseerde ui',
        title: 'Vegetarische couscous',
        slug: 'vegetarische-couscous'
      }
    },
    price: { amount: '12.95' },
    number: '39'
  } as Product,

  //// meals->tajin->
  'item->product->meals->tajin->tajin-de-ternera-1': {
    id: 'item->product->meals->tajin->tajin-de-ternera-1',
    type: 'product',
    images: ['image->item->product->tajin-ternera-huevo-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->tajin-ternera-huevo-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con ciruela, almendra y huevo duro',
        title: 'Tajin de Ternera con verdura',
        slug: 'tajin-de-ternera'
      },
      en: {
        description:
          'with vegetables or with plums, almonds and hard-boiled egg',
        title: 'Beef Tagine',
        slug: 'beef-tagine'
      },
      de: {
        description: 'mit gemüse oder pflaume, mandel und gekochtes ei',
        title: 'Rindfleisch-Tajine',
        slug: 'rindfleisch-tajine'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'avec légumes ou prunes, amandes et œufs durs',
        title: 'Tajine de bœuf',
        slug: 'tajine-de-bœuf'
      },
      nl: {
        description: 'met groenten of pruim, amandel en hardgekookte eieren',
        title: 'Tajine van kalfsvlees',
        slug: 'tajine-van-kalfsvlees'
      }
    },
    price: { amount: '12,95' },
    number: '1'
  } as Product,
  'item->product->meals->tajin->tajin-de-pollo-2': {
    id: 'item->product->meals->tajin->tajin-de-pollo-2',
    type: 'product',
    images: ['image->item->product->tajin-pollo-verduras-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->tajin-pollo-verduras-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con Verdura o al Limón',
        title: 'Tajin de Pollo ',
        slug: 'tajin-de-pollo'
      },
      en: {
        description: 'with vegetables or lemon chicken',
        title: 'Chicken Tagine ',
        slug: 'chicken-tagine'
      },
      de: {
        description: 'Zitronen oder mit gemüse',
        title: 'Hähnchen-Tajine',
        slug: 'hahnchen-tajine'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'avec légumes ou au citron',
        title: 'Tajine de poulet',
        slug: 'tajine-de-poulet'
      },
      nl: {
        description: 'met groenten of citroen',
        title: 'Tajine van kip',
        slug: 'tajine-van-kip'
      }
    },
    price: { amount: '10.95' },
    number: '41'
  } as Product,
  'item->product->meals->tajin->tajin-de-cordero-3': {
    id: 'item->product->meals->tajin->tajin-de-cordero-3',
    type: 'product',
    images: ['image->item->product->tajin-cordero-verduras-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->tajin-cordero-verduras-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con verdura o con ciruela, almendra y huevo duro',
        title: 'Tajin de Cordero',
        slug: 'tajin-de-cordero'
      },
      en: {
        description:
          'with vegetables or with plums, almonds and hard-boiled egg',
        title: 'Lamb Tagine ',
        slug: 'lamb-tagine'
      },
      de: {
        description: 'mit gemüse oder pflaume, mandel und gekochtes ei',
        title: 'Lamm-Tajine ',
        slug: 'lamm-tajine'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'avec légumes ou prunes, amandes et œufs durs',
        title: `Tajine d'agneau`,
        slug: 'tajine-d-agneau'
      },
      nl: {
        description: 'met groenten of pruim, amandel en hardgekookte eieren',
        title: 'Tajine van lamsvlees',
        slug: 'tajine-van-lamsvlees'
      }
    },
    price: { amount: '14,95' },
    number: '42'
  } as Product,
  'item->product->meals->tajin->tajin-de-kafta-4': {
    id: 'item->product->meals->tajin->tajin-de-kafta-4',
    type: 'product',
    images: ['image->item->product->tajin-albondigas-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->tajin-albondigas-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'albóndigas de ternera con huevo roto',
        title: 'Tajin de kafta',
        slug: 'tajin-de-kafta'
      },
      en: {
        description: 'beef meatballs tagine with scrambled eggs',
        title: 'Kafka Tagine',
        slug: 'kafka-tagine'
      },
      de: {
        description: 'mit hackfleisch und ei',
        title: 'Tajine dyal kefta',
        slug: 'tajine-dyal-kefta'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'boulettes de viande de bœuf avec œuf cassé',
        title: 'Tajine de kefta',
        slug: 'tajine-de-kefta'
      },
      nl: {
        description: '(kalfsballetjes) met roereieren',
        title: 'Tajine van kefta',
        slug: 'tajine-van-kefta'
      }
    },
    price: { amount: '12,50' },
    number: '43'
  } as Product,
  'item->product->meals->tajin->tajin-con-carne-vegetal-5': {
    id: 'item->product->meals->tajin->tajin-con-carne-vegetal-5',
    type: 'product',
    images: ['image->item->product->tajin-verduras-tofu-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->tajin-verduras-tofu-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: 'con verdura y tofu',
        title: 'Tajin con carne vegetal ',
        slug: 'tajin-con-carne-vegetal'
      },
      en: {
        description: 'with vegetables and tofu',
        title: 'Vegetarian meat substitute tagine',
        slug: 'vegetarian-meat-substitute-tagine'
      },
      de: {
        description: 'mit Tofu und Gemüse',
        title: 'Vegetarischer Tajine',
        slug: 'vegetarischer-tajine'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: 'avec légumes et tofu',
        title: 'Tajine de viande végétale',
        slug: 'tajine-de-viande-vegetale'
      },
      nl: {
        description: 'groenten en tofu',
        title: 'Tajine met vegetarisch vlee',
        slug: 'tajine-met-vegetarisch-vlee'
      }
    },
    price: { amount: '12,95' },
    number: '44'
  } as Product,

  'item->product->meals->specials->chuletas-de-cordero-1': {
    id: 'item->product->meals->specials->chuletas-de-cordero-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Chuletas de cordero',
        slug: 'chuletas-de-cordero'
      },
      en: {
        description: '',
        title: 'Lamb chops',
        slug: 'lamb-chops'
      },
      de: {
        description: '',
        title: 'Lammkoteletts',
        slug: 'lammkoteletts'
      },
      fr: {
        description: '',
        title: `Côtelettes d'agneau`,
        slug: 'cotelettes-d-agneau'
      },
      nl: {
        description: '',
        title: 'Lamskoteletjes',
        slug: 'lamskoteletjes'
      }
    },
    price: { amount: '23,50' },
    number: '45'
  } as Product,
  'item->product->meals->specials->calamar-a-la-brasa-2': {
    id: 'item->product->meals->specials->calamar-a-la-brasa-2',
    type: 'product',
    images: ['image->item->product->calamar-brasa-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->calamar-brasa-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Calamar a la brasa',
        slug: 'calamar-a-la-brasa'
      },
      en: {
        description: '',
        title: 'Grilled squid',
        slug: 'grilled-squid'
      },
      de: {
        description: '',
        title: 'Gegrillter Kalmar',
        slug: 'gegrillter-kalmar'
      },
      fr: {
        description: '',
        title: 'Calmars braisés',
        slug: 'calmars-braises'
      },
      nl: {
        description: '',
        title: 'Gegrilde inktvis',
        slug: 'gegrilde-inktvis'
      }
    },
    price: { amount: '21,00' },
    number: '46'
  } as Product,
  'item->product->meals->specials->atun-rojo-a-la-brasa-3': {
    id: 'item->product->meals->specials->atun-rojo-a-la-brasa-3',
    type: 'product',
    images: ['image->item->product->atun-brasa-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->atun-brasa-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Atún rojo a la brasa',
        slug: 'atun-rojo-a-la-brasa'
      },
      en: {
        description: '',
        title: 'Grilled red tuna',
        slug: 'grilled-red-tuna'
      },
      de: {
        description: '',
        title: 'Gegrillter roter Thunfisch',
        slug: 'gegrillter-roter-thunfisch'
      },
      fr: {
        description: '',
        title: 'Thon rouge braisé',
        slug: 'thon-rouge-braise'
      },
      nl: {
        description: '',
        title: 'Gegrilde blauwvintonijn',
        slug: 'gegrilde-blauwvintonijn'
      }
    },
    price: { amount: '21,00' },
    number: '47'
  } as Product,
  'item->product->meals->specials->t-bone-a-la-brasa-4': {
    id: 'item->product->meals->specials->t-bone-a-la-brasa-4',
    type: 'product',
    images: ['image->item->product->t-bone-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->t-bone-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'T-Bone a la brasa',
        slug: 't-bone-a-la-brasa'
      },
      en: {
        description: '',
        title: 'Grilled T-bone steak',
        slug: 'grilled-t-bone-steak'
      },
      de: {
        description: '',
        title: 'T-Bone-Steak vom Grill',
        slug: 't-bone-steak-vom-grill'
      },
      fr: {
        description: '',
        title: 'Requin braisé',
        slug: 'requin-braise'
      },
      nl: {
        description: '',
        title: 'Gegrilde haai',
        slug: 'gegrilde-haai'
      }
    },
    price: { amount: '28,95' },
    number: '48'
  } as Product,
  'item->product->meals->specials->solomillo-a-la-brasa-5': {
    id: 'item->product->meals->specials->solomillo-a-la-brasa-5',
    type: 'product',
    images: ['image->item->product->solomillo-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->solomillo-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Solomillo a la brasa',
        slug: 'solomillo-a-la-brasa'
      },
      en: {
        description: '',
        title: 'Grilled sirloin steak',
        slug: 'grilled-sirloin-steak'
      },
      de: {
        description: '',
        title: 'Filet vom Grill',
        slug: 'filet-vom-grill'
      },
      fr: {
        description: '',
        title: 'Steak braisé',
        slug: 'steak-braise'
      },
      nl: {
        description: '',
        title: 'Gegrilde entrecote',
        slug: 'gegrilde-entrecote'
      }
    },
    price: { amount: '21,95' },
    number: '49'
  } as Product,
  'item->product->meals->specials->hamburguesa-atun-rojo-6': {
    id: 'item->product->meals->specials->hamburguesa-atun-rojo-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Hamburguesa atún rojo',
        slug: 'hamburguesa-atun-rojo'
      },
      en: {
        description: '',
        title: 'Red Tuna burger',
        slug: 'red-tuna-burger'
      },
      de: {
        description: '',
        title: 'Roter-Thunfisch-Burger',
        slug: 'roter-thunfisch-burger'
      },
      fr: {
        description: '',
        title: 'Burger de thon rouge',
        slug: 'burger-de-thon-rouge'
      },
      nl: {
        description: '',
        title: 'Burger van blauwvintonijn',
        slug: 'burger-van-blauwvintonijn'
      }
    },
    price: { amount: '16,95' },
    number: '50'
  } as Product,
  'item->product->meals->specials->hamburguesa-de-pollo-7': {
    id: 'item->product->meals->specials->hamburguesa-de-pollo-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Hamburguesa de pollo',
        slug: 'hamburguesa-de-pollo'
      },
      en: {
        description: '',
        title: 'Chicken burger',
        slug: 'chicken-burger'
      },
      de: {
        description: '',
        title: 'Hähnchen-Burger',
        slug: 'hahnchen-burger'
      },
      fr: {
        description: '',
        title: 'Burger de poulet',
        slug: 'burger-de-poulet'
      },
      nl: {
        description: '',
        title: 'Burger van kip',
        slug: 'burger-van-kip'
      }
    },
    price: { amount: '11,95' },
    number: '51'
  } as Product,
  'item->product->meals->specials->hamburguesa-de-ternera-8': {
    id: 'item->product->meals->specials->hamburguesa-de-ternera-8',
    type: 'product',
    images: ['image->item->product->hamburguesa-ternera-1'],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->hamburguesa-ternera-1',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Hamburguesa de ternera',
        slug: 'hamburguesa-de-ternera'
      },
      en: {
        description: '',
        title: 'Beef burger',
        slug: 'beef-burger'
      },
      de: {
        description: '',
        title: 'Kalbs-Burger',
        slug: 'kalbs-burger'
      },
      fr: {
        description: '',
        title: 'Burger de bœuf',
        slug: 'burger-de-boeuf'
      },
      nl: {
        description: '',
        title: 'Burger van kalfsvlees',
        slug: 'burger-van-kalfsvlees'
      }
    },
    price: { amount: '12,95' },
    number: '52'
  } as Product,

  // Marhaba wines
  'item->product->wines->-1': {
    id: 'item->product->wines->-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      },
      en: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      },
      de: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      },
      nb: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      },
      da: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      },
      sv: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      },
      fr: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      },
      nl: {
        description: 'Malvasía aromática. D.O Islas Canarias (Piñero)',
        title: 'Vinátigo afrutado',
        slug: 'vinatigo-afrutado'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',

    price: { amount: '21.95' },
    number: '1'
  } as Product,
  'item->product->wines->-2': {
    id: 'item->product->wines->-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      },
      en: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      },
      de: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      },
      nb: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      },
      da: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      },
      sv: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      },
      fr: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      },
      nl: {
        description: 'D.O Lanzarote Malvasía volcánico (Piñero)',
        title: 'El Grifo Colección',
        slug: 'el-grifo-coleccion'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: '',
    price: { amount: '21.00' },
    number: '2'
  } as Product,
  'item->product->wines->-3': {
    id: 'item->product->wines->-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      },
      en: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      },
      de: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      },
      nb: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      },
      da: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      },
      sv: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      },
      fr: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      },
      nl: {
        description: 'Listán Blanco. D.O Islas Canarias',
        title: 'Plaza Perdida',
        slug: 'plaza-perdida'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '21.00' },
    number: '3'
  } as Product,
  'item->product->wines->-4': {
    id: 'item->product->wines->-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      en: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      de: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      nb: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      da: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      sv: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      fr: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      nl: {
        description: 'Verdejo. D.O Rueda',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '18.00' },
    number: '4'
  } as Product,
  'item->product->wines->-5': {
    id: 'item->product->wines->-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      en: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      de: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      nb: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      da: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      sv: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      fr: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      },
      nl: {
        description: 'Albariño. D.O Rías Baixas',
        title: 'Montecillo Singladuras',
        slug: 'montecillo-singladuras'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '19.95' },
    number: '5'
  } as Product,
  'item->product->wines->-6': {
    id: 'item->product->wines->-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      },
      en: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      },
      de: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      },
      nb: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      },
      da: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      },
      sv: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      },
      fr: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      },
      nl: {
        description: 'Tierra de Castilla',
        title: 'Solaz Chardonnay',
        slug: 'solaz-chardonnay'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '16.00' },
    number: '6'
  } as Product,
  'item->product->wines->-7': {
    id: 'item->product->wines->-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      },
      en: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      },
      de: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      },
      nb: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      },
      da: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      },
      sv: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      },
      fr: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      },
      nl: {
        description: 'Tempranillo y Garnacha. D.O.La Rioja',
        title: 'Montecillo Rosado',
        slug: 'montecillo-rosado'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '18.00' },
    number: '7'
  } as Product,
  'item->product->wines->-8': {
    id: 'item->product->wines->-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      },
      en: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      },
      de: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      },
      nb: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      },
      da: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      },
      sv: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      },
      fr: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      },
      nl: {
        description:
          'Listán Negro y Baboso Negro, D.O Gran Canaria (Vinófilos)',
        title: 'Agala Joven',
        slug: 'agala-joven'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '17.00' },
    number: '8'
  } as Product,
  'item->product->wines->-9': {
    id: 'item->product->wines->-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      },
      en: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      },
      de: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      },
      nb: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      },
      da: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      },
      sv: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      },
      fr: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      },
      nl: {
        description: 'Listán Negro y tintilla D.O. Gran Canaria',
        title: 'Mondalón Tinto',
        slug: 'mondalon-tinto'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '21.00' },
    number: '9'
  } as Product,
  'item->product->wines->-10': {
    id: 'item->product->wines->-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      },
      en: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      },
      de: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      },
      nb: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      },
      da: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      },
      sv: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      },
      fr: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      },
      nl: {
        description: 'Tempranillo y Garnacha D.O.La Rioja',
        title: 'Montecillo Crianza',
        slug: 'montecillo-crianza'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '17.00' },
    number: '10'
  } as Product,
  'item->product->wines->-11': {
    id: 'item->product->wines->-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      },
      en: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      },
      de: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      },
      nb: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      },
      da: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      },
      sv: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      },
      fr: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      },
      nl: {
        description: 'Tempranillo y Graciano D.O.La Rioja',
        title: 'Montecillo Edición Limitada',
        slug: 'montecillo-edicion-limitada'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '17.00' },
    number: '11'
  } as Product,
  'item->product->wines->-12': {
    id: 'item->product->wines->-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      },
      en: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      },
      de: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      },
      nb: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      },
      da: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      },
      sv: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      },
      fr: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      },
      nl: {
        description: '100% Graciano D.O.Ca Rioja',
        title: 'Viña Monty Reserva',
        slug: 'vina-monty-reserva'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '43.00' },
    number: '12'
  } as Product,
  'item->product->wines->-13': {
    id: 'item->product->wines->-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      },
      en: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      },
      de: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      },
      nb: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      },
      da: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      },
      sv: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      },
      fr: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      },
      nl: {
        description: 'Tempranillo, Graciano, Garnacha y Mazuelo D.O.Ca Rioja',
        title: 'Montecillo 22 barricas Gran Reserva',
        slug: 'montecillo-22-barricas-gran-reserva'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '43.00' },
    number: '13'
  } as Product,
  'item->product->wines->-14': {
    id: 'item->product->wines->-14',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      },
      en: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      },
      de: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      },
      nb: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      },
      da: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      },
      sv: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      },
      fr: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      },
      nl: {
        description: '100% Tinta del País D.O Ribera del Duero',
        title: 'Montecillo Tinto Roble',
        slug: 'montecillo-tinto-roble'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '20.00' },
    number: '14'
  } as Product,
  'item->product->wines->-15': {
    id: 'item->product->wines->-15',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      },
      en: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      },
      de: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      },
      nb: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      },
      da: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      },
      sv: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      },
      fr: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      },
      nl: {
        description: 'Mencía y Sousón. D.O Ribera Sacra',
        title: 'Massimo',
        slug: 'massimo'
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '21.00' },
    number: '15'
  } as Product,
  'item->product->wines->-16': {
    id: 'item->product->wines->-16',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '00.00' },
    number: '16'
  } as Product,
  'item->product->wines->-17': {
    id: 'item->product->wines->-17',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '00.00' },
    number: '17'
  } as Product,
  'item->product->wines->-18': {
    id: 'item->product->wines->-18',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '00.00' },
    number: '18'
  } as Product,
  'item->product->wines->-19': {
    id: 'item->product->wines->-19',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '00.00' },
    number: '19'
  } as Product,
  'item->product->wines->-20': {
    id: 'item->product->wines->-20',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    hasVariants: false,
    hasAllergens: false,
    variants: '',
    price: { amount: '00.00' },
    number: '20'
  } as Product,

  //// meals->desserts->
  'item->product->desserts->-1': {
    id: 'item->product->desserts->-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Yogur con Almendra, Pasas y Miel de Palma',
        slug: 'yogur-con-almendra-pasas-y-miel-de-palma'
      },
      en: {
        description: '',
        title: 'Yogurt with Almond, Raisins and Palm Honey',
        slug: 'yogurt-with-almond-raisins-and-palm-honey'
      },
      de: {
        description: '',
        title: 'Joghurt mit Mandeln, Rosinen und Palmhonig',
        slug: 'joghurt-mit-mandeln-rosinen-und-palmhonig'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Yaourt aux amandes, raisins secs et miel de palme',
        slug: 'yaourt-aux-amandes-raisins-secs-et-miel-de-palme'
      },
      nl: {
        description: '',
        title: 'Yoghurt met amandel, rozijnen en palmhoning',
        slug: 'yoghurt-met-amandel-rozijnen-en-palmhoning'
      }
    },
    price: { amount: '0.00' },
    number: '1'
  } as Product,
  'item->product->desserts->-2': {
    id: 'item->product->desserts->-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Flan de Dátiles',
        slug: 'flan-de-datiles'
      },
      en: {
        description: '',
        title: 'Date Flan',
        slug: 'date-flan'
      },
      de: {
        description: '',
        title: 'Dattelflan',
        slug: 'aattelflan'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Flan aux dattes',
        slug: 'flan-aux-dattes'
      },
      nl: {
        description: '',
        title: 'Datum vlaai',
        slug: 'datum-vlaai'
      }
    },
    price: { amount: '0.00' },
    number: '2'
  } as Product,
  'item->product->desserts->-3': {
    id: 'item->product->desserts->-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '(Bizcocho Casero con Helado)',
        title: 'Volcán de Chocolate',
        slug: 'volcan-de-chocolate'
      },
      en: {
        description: '(Homemade Cake with Ice Cream)',
        title: 'Chocolate volcano',
        slug: 'chocolate-volcano'
      },
      de: {
        description: '(Hausgemachter Kuchen mit Eis)',
        title: 'Schokoladenvulkan',
        slug: 'schokoladenvulkan'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '(Gâteau fait maison avec glace)',
        title: 'Volcan de chocolat',
        slug: 'volcan-de-chocolat'
      },
      nl: {
        description: '(Zelfgemaakte taart met ijs)',
        title: 'Chocolade vulkaan',
        slug: 'chocolade-vulkaan'
      }
    },
    price: { amount: '0.00' },
    number: '3'
  } as Product,
  'item->product->desserts->-4': {
    id: 'item->product->desserts->-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Tarta de Queso con Higo',
        slug: 'tarta-de-queso-con-higo'
      },
      en: {
        description: '',
        title: 'Cheesecake with Fig',
        slug: 'cheesecake-with-fig'
      },
      de: {
        description: '',
        title: 'Käsekuchen mit Feige',
        slug: 'kasekuchen-mit-feige'
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: 'Cheesecake aux Figue',
        slug: 'cheesecake-aux-figue'
      },
      nl: {
        description: '',
        title: 'Cheesecake met vijg',
        slug: 'cheesecake-met-vijg'
      }
    },
    price: { amount: '0.00' },
    number: '4'
  } as Product,
  'item->product->desserts->-5': {
    id: 'item->product->desserts->-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      en: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      de: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      nb: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      da: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      sv: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      fr: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      nl: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      }
    },
    price: { amount: '0.00' },
    number: '5'
  } as Product,
  'item->product->desserts->-6': {
    id: 'item->product->desserts->-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    variants: '',
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      en: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      de: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      nb: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      da: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      sv: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      fr: {
        description: '',
        title: 'Desert 5',
        slug: 'desert-5'
      },
      nl: {
        description: '',
        title: 'Desert 6',
        slug: 'desert-6'
      }
    },
    price: { amount: '0.00' },
    number: '6'
  } as Product,

  ///// menu->
  'item->menu->meals': {
    id: 'item->menu->meals',
    type: 'menu',
    images: ['image->menus->meals-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->meals-1',
    hasVariants: false,
    variants: '',
    active: true,
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
    }
  } as Menu,
  'item->menu->desserts': {
    id: 'item->menu->desserts',
    type: 'menu',
    images: ['image->menus->desserts-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->desserts-1',
    hasVariants: false,
    variants: '',
    active: false,
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
  } as Menu,
  'item->menu->wines': {
    id: 'item->menu->wines',
    type: 'menu',
    images: ['image->menus->wines-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->wines-1',
    hasVariants: false,
    variants: '',
    active: true,
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
  } as Menu,
  'item->menu->info->allergens': {
    id: 'item->menu->info->allergens',
    type: 'menu',
    images: ['image->menus->allergens-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->allergens-1',
    hasVariants: false,
    variants: '',
    active: false,
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
    }
  } as Menu,
  'item->menu->info->gallery': {
    id: 'item->menu->info->gallery',
    type: 'menu',
    images: ['image->menus->gallery-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->gallery-1',
    hasVariants: false,
    variants: '',
    active: true,
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
  } as Menu,
  'item->menu->meals->starters': {
    id: 'item->menu->meals->starters',
    type: 'menu',
    images: ['image->menus->starters-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->starters-1',
    hasVariants: false,
    variants: '',
    active: true,
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
  } as Menu,
  'item->menu->meals->skewers': {
    id: 'item->menu->meals->skewers',
    type: 'menu',
    images: ['image->menus->skewers-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->skewers-1',
    hasVariants: false,
    variants: '',
    active: true,
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
        slug: 'brochettes'
      },
      nl: {
        title: 'Sjasliek',
        slug: 'sjasliek'
      }
    }
  } as Menu,
  'item->menu->meals->cous-cous': {
    id: 'item->menu->meals->cous-cous',
    type: 'menu',
    images: ['image->menus->cous-cous-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->cous-cous-1',
    hasVariants: false,
    variants: '',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->tajin': {
    id: 'item->menu->meals->tajin',
    type: 'menu',
    images: ['image->menus->tajin-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->tajin-1',
    hasVariants: false,
    variants: '',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->specials': {
    id: 'item->menu->meals->specials',
    type: 'menu',
    images: ['image->menus->specials-1'],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->specials-1',
    hasVariants: false,
    variants: '',
    active: true,
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
    }
  } as Menu
};
