import { InfoCategory, ProductCategory } from 'definitions/models';

export const categories: { [key: string]: ProductCategory | InfoCategory } = {
  'category->desserts': {
    id: 'category->desserts',
    type: 'product',
    active: true,
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->desserts->our-creamy-cheesecake-1',
      'item->product->desserts->homemade-sweets-from-tejeda-2',
      'item->product->desserts->trompe-l-oeil-ferrero-rocher-3',
      'item->product->desserts->banana-ice-cream-4',
      'item->product->desserts->homemade-ice-cream-5',
      'item->product->desserts->our-chef-s-suggested-sweet-6'
    ]
  },
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
      'item->product->meals->starters->-1',
      'item->product->meals->starters->-2',
      'item->product->meals->starters->-3',
      'item->product->meals->starters->-4',
      'item->product->meals->starters->-5',
      'item->product->meals->starters->-6',
      'item->product->meals->starters->-7',
      'item->product->meals->starters->-8',
      'item->product->meals->starters->-9',
      'item->product->meals->starters->-10',
      'item->product->meals->starters->-11',
      'item->product->meals->starters->-12',
      'item->product->meals->starters->-13',
      'item->product->meals->starters->-14'
    ]
  },
  'category->meals->salads': {
    id: 'category->meals->salads',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->meals->salads->-1',
      'item->product->meals->salads->-2',
      'item->product->meals->salads->-3',
      'item->product->meals->salads->-4',
      'item->product->meals->salads->-5',
      'item->product->meals->salads->-6'
    ]
  },
  'category->meals->spoon-dishes': {
    id: 'category->meals->spoon-dishes',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->meals->spoon-dishes->-1',
      'item->product->meals->spoon-dishes->-2',
      'item->product->meals->spoon-dishes->-3',
      'item->product->meals->spoon-dishes->-4',
      'item->product->meals->spoon-dishes->-5',
      'item->product->meals->spoon-dishes->-6'
    ]
  },
  'category->meals->garnishes-or-side-dishes': {
    id: 'category->meals->garnishes-or-side-dishes',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        extraInfo: '(lleva un suplemento - 2,50 €)',
        title: 'Guarniciones',
        slug: 'guarniciones'
      },
      en: {
        extraInfo: '(carry a surcharge - 2,50 €)',
        title: 'Garnishes or Side Dishes',
        slug: 'garnishes-or-side-dishes'
      },
      de: {
        extraInfo: '(gegen Aufpreis - 2,50 €)',
        title: 'Beilagen',
        slug: 'beilagen'
      },
      nb: {
        extraInfo: '(supplement i pris - 2,50 €)',
        title: 'Garnityrer',
        slug: 'garnityrer'
      },
      da: {
        extraInfo: '(mod ekstra betaling - 2,50 €)',
        title: 'Garniture',
        slug: 'garniture'
      },
      sv: {
        extraInfo: '(bär ett tillägg - 2,50 €)',
        title: 'Garnering',
        slug: 'garnering'
      },
      fr: {
        extraInfo: '(avec supplément - 2,50 €)',
        title: 'Accompagnements',
        slug: 'accompagnements'
      },
      nl: {
        extraInfo: '(Met toeslag - 2,50 €)',
        title: 'Bijgerechten',
        slug: 'bijgerechten'
      }
    },
    items: [
      'item->product->meals->fittings->chips-1',
      'item->product->meals->fittings->wrinkled-potatoes-2',
      'item->product->meals->fittings->sweet-potato-fries-3',
      'item->product->meals->fittings->salad-4',
      'item->product->meals->fittings->basmati-rice-5',
      'item->product->meals->fittings->ratatouille-6'
    ]
  },
  'category->meals->breakfasts': {
    id: 'category->meals->breakfasts',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Desayunos',
        slug: 'desayunos'
      },
      en: {
        title: 'Breakfasts',
        slug: 'breakfasts'
      },
      de: {
        title: 'Frühstück',
        slug: 'fruhstuck'
      },
      nb: {
        title: 'Frokoster',
        slug: 'frokoster'
      },
      da: {
        title: 'Morgenmad',
        slug: 'morgenmad'
      },
      sv: {
        title: 'Frukostar',
        slug: 'frukostar'
      },
      fr: {
        title: 'Petits déjeuners',
        slug: 'petits-dejeuners'
      },
      nl: {
        title: 'Ontbijten',
        slug: 'ontbijten'
      }
    },
    items: [
      'item->product->meals->breakfasts->-1',
      'item->product->meals->breakfasts->-2',
      'item->product->meals->breakfasts->-3',
      'item->product->meals->breakfasts->-4',
      'item->product->meals->breakfasts->-5',
      'item->product->meals->breakfasts->-6'
    ]
  },
  'category->meals->sandwich': {
    id: 'category->meals->sandwich',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Bocadillos',
        slug: 'bocadillos'
      },
      en: {
        title: 'Sandwich',
        slug: 'sandwich'
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
    },
    items: [
      'item->product->meals->artisan-loaf-sandwich-with-squid-1',
      'item->product->meals->homemade-bread-with-black-pork-in-lard-2',
      'item->product->meals->homemade-bread-with-chicken-3',
      'item->product->meals->homemade-bread-with-chorizo-from-teror-4',
      'item->product->meals->new-york-sandwich-5',
      'item->product->meals->hamburger-with-chicken-6',
      'item->product->meals->beef-burger-7',
      'item->product->meals->mexican-iberian-pork-burger-8',
      'item->product->meals->angus-beef-burger-9'
    ]
  },
  'category->meals->childrens': {
    id: 'category->meals->childrens',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->meals->childrens->spaghetti-with-tomato-and-grated-cheese-1',
      'item->product->meals->childrens->-2',
      'item->product->meals->childrens->hamburger-with-tomato-and-cheese-3',
      'item->product->meals->childrens->pizza-4',
      'item->product->meals->childrens->nuggets-with-french-fries-5',
      'item->product->meals->childrens->ham-and-cheese-omelette-6'
    ]
  },
  'category->drinks->appetizers': {
    id: 'category->drinks->appetizers',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->drinks->appetizers->campari-1',
      'item->product->drinks->appetizers->tio-pepe-2',
      'item->product->drinks->appetizers->aperol-spritz-3',
      'item->product->drinks->appetizers->martini-bianco-4',
      'item->product->drinks->appetizers->martini-dry-5',
      'item->product->drinks->appetizers->martini-rosso-6',
      'item->product->drinks->appetizers->oporto-7',
      'item->product->drinks->appetizers->pernod-8',
      'item->product->drinks->appetizers->hugo-spritz-9'
    ]
  },
  'category->drinks->refreshments': {
    id: 'category->drinks->refreshments',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->drinks->refreshments->pepsi-1',
      'item->product->drinks->refreshments->pepsi-light-2',
      'item->product->drinks->refreshments->pepsi-max-3',
      'item->product->drinks->refreshments->schweppes-orange-4',
      'item->product->drinks->refreshments->schweppes-lemon-5',
      'item->product->drinks->refreshments->seven-up-6',
      'item->product->drinks->refreshments->appletiser-7',
      'item->product->drinks->refreshments->tonic-8',
      'item->product->drinks->refreshments->lipton-tea-9',
      'item->product->drinks->refreshments->peach-juice-10',
      'item->product->drinks->refreshments->orange-juice-11',
      'item->product->drinks->refreshments->multifruit-juice-12',
      'item->product->drinks->refreshments->apple-juice-13',
      'item->product->drinks->refreshments->pear-pineapple-juice-14',
      'item->product->drinks->refreshments->tomato-juice-15',
      'item->product->drinks->refreshments->mineral-water-16',
      'item->product->drinks->refreshments->soda-water-17',
      'item->product->drinks->refreshments->soda-jug-18'
    ]
  },
  'category->drinks->beers': {
    id: 'category->drinks->beers',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->drinks->beers->beer-cane-1',
      'item->product->drinks->beers->beer-jar-2',
      'item->product->drinks->beers->cruzcampo-especial-3',
      'item->product->drinks->beers->el-aguila-sin-filtrar-4',
      'item->product->drinks->beers->1906-reserva-especial-5',
      'item->product->drinks->beers->coronita-6',
      'item->product->drinks->beers->desperados-7',
      'item->product->drinks->beers->heineken-8',
      'item->product->drinks->beers->judas-9',
      'item->product->drinks->beers->mort-subite-10',
      'item->product->drinks->beers->paulaner-11',
      'item->product->drinks->beers->peroni-12',
      'item->product->drinks->beers->raddler-13',
      'item->product->drinks->beers->18-70-14',
      'item->product->drinks->beers->sin-gluten-15'
    ]
  },
  'category->drinks->coffee-shop': {
    id: 'category->drinks->coffee-shop',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->drinks->coffee-shop->black-coffe-or-expresso-1',
      'item->product->drinks->coffee-shop->cut-coffee-2',
      'item->product->drinks->coffee-shop->coffee-with-milk-3',
      'item->product->drinks->coffee-shop->coffee-with-condensed-milk-4',
      'item->product->drinks->coffee-shop->cola-cao-5',
      'item->product->drinks->coffee-shop->cappuccino-6',
      'item->product->drinks->coffee-shop->irish-coffee-7',
      'item->product->drinks->coffee-shop->french-coffee-8',
      'item->product->drinks->coffee-shop->infusion-9'
    ]
  },
  'category->drinks->rums': {
    id: 'category->drinks->rums',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Rones',
        slug: 'rones'
      },
      en: {
        title: 'Rums',
        slug: 'rums'
      },
      de: {
        title: 'Rum',
        slug: 'rum'
      },
      nb: {
        title: 'Rom',
        slug: 'rom'
      },
      da: {
        title: 'Rom',
        slug: 'rom'
      },
      sv: {
        title: 'Rum',
        slug: 'rum'
      },
      fr: {
        title: 'Rhums',
        slug: 'rhums'
      },
      nl: {
        title: 'Rum',
        slug: 'rum'
      }
    },
    items: [
      'item->product->drinks->rums->arehucas-1',
      'item->product->drinks->rums->bacardy-2',
      'item->product->drinks->rums->matusalem-3',
      'item->product->drinks->rums->zacapa-4',
      'item->product->drinks->rums->house-honey-rum-5',
      'item->product->drinks->rums->artemi-6',
      'item->product->drinks->rums->shot-7',
      'item->product->drinks->rums->havana-club-3-8',
      'item->product->drinks->rums->havana-club-7-9',
      'item->product->drinks->rums->flor-de-cana-7-10',
      'item->product->drinks->rums->diplomatico-11'
    ]
  },
  'category->drinks->whiskies': {
    id: 'category->drinks->whiskies',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Whiskies',
        slug: 'whiskies'
      },
      en: {
        title: 'Whiskeys',
        slug: 'whiskeys'
      },
      de: {
        title: 'Whiskys',
        slug: 'whiskys'
      },
      nb: {
        title: 'Whisky',
        slug: 'whisky'
      },
      da: {
        title: 'Whisky',
        slug: 'whisky'
      },
      sv: {
        title: 'Whisky',
        slug: 'whisky'
      },
      fr: {
        title: 'Whiskies',
        slug: 'whiskies'
      },
      nl: {
        title: 'Whisky',
        slug: 'whisky'
      }
    },
    items: [
      'item->product->drinks->whiskies->tullamore-dew-1',
      'item->product->drinks->whiskies->red-label-2',
      'item->product->drinks->whiskies->black-label-3',
      'item->product->drinks->whiskies->lagavulin-16-4',
      'item->product->drinks->whiskies->jhon-haig-5',
      'item->product->drinks->whiskies->house-whisky-6',
      'item->product->drinks->whiskies->100-pipers-7',
      'item->product->drinks->whiskies->ballantines-8',
      'item->product->drinks->whiskies->chanceler-9',
      'item->product->drinks->whiskies->chivas-regal-12-10',
      'item->product->drinks->whiskies->j-and-b-11',
      'item->product->drinks->whiskies->jack-daniels-12'
    ]
  },
  'category->drinks->gins': {
    id: 'category->drinks->gins',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Ginebras',
        slug: 'ginebras'
      },
      en: {
        title: 'Gins',
        slug: 'gins'
      },
      de: {
        title: 'Gins',
        slug: 'gins'
      },
      nb: {
        title: 'Gins',
        slug: 'gins'
      },
      da: {
        title: 'Gins',
        slug: 'gins'
      },
      sv: {
        title: 'Gins',
        slug: 'gins'
      },
      fr: {
        title: 'Gins',
        slug: 'gins'
      },
      nl: {
        title: 'Gin',
        slug: 'gin'
      }
    },
    items: [
      'item->product->drinks->gins->gordons-1',
      'item->product->drinks->gins->beefeater-2',
      'item->product->drinks->gins->bombay-sapphire-3',
      'item->product->drinks->gins->hendricks-4',
      'item->product->drinks->gins->tanqueray-5',
      'item->product->drinks->gins->martin-millers-6',
      'item->product->drinks->gins->bulldog-7',
      'item->product->drinks->gins->gvine-8',
      'item->product->drinks->gins->house-gin-9',
      'item->product->drinks->macaronesian-10',
      'item->product->drinks->royal-kingston-11'
    ]
  },
  'category->drinks->cognac-and-brandy': {
    id: 'category->drinks->cognac-and-brandy',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Coñac y Brandy',
        slug: 'cognac'
      },
      en: {
        title: 'Cognac and Brandy',
        slug: 'cognac-and-brandy'
      },
      de: {
        title: 'Cognac und Brandy',
        slug: 'cognac-und-brandy'
      },
      nb: {
        title: 'Cognac og konjakk',
        slug: 'cognac-og-konjakk'
      },
      da: {
        title: 'Cognac og brandy',
        slug: 'cognac-og-brandy'
      },
      sv: {
        title: 'Cognac och konjak',
        slug: 'cognac-och-konjak'
      },
      fr: {
        title: 'Cognac et eau-de-vie',
        slug: 'cognac-et-eau-de-vie'
      },
      nl: {
        title: 'Cognac en Brandy',
        slug: 'cognac-en-brandy'
      }
    },
    items: [
      'item->product->drinks->cognac-and-brandy->veterano-1',
      'item->product->drinks->cognac-and-brandy->carlos-1-2',
      'item->product->drinks->cognac-and-brandy->gran-duque-de-alba-3',
      'item->product->drinks->cognac-and-brandy->pedro-3-4',
      'item->product->drinks->cognac-and-brandy->magno-5',
      'item->product->drinks->cognac-and-brandy->103-etiqueta-blanca-6',
      'item->product->drinks->cognac-and-brandy->alma-de-magno-7',
      'item->product->drinks->cognac-and-brandy->brandy-local-8',
      'item->product->drinks->cognac-and-brandy->cardenal-de-mendoza-9',
      'item->product->drinks->cognac-and-brandy->carlos-3-10',
      'item->product->drinks->cognac-and-brandy->remy-martin-vsop-11',
      'item->product->drinks->cognac-and-brandy->torres-5-12'
    ]
  },
  'category->drinks->vodkas': {
    id: 'category->drinks->vodkas',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Vodkas',
        slug: 'vodkas'
      },
      en: {
        title: 'Vodkas',
        slug: 'vodkas'
      },
      de: {
        title: 'Wodkas',
        slug: 'wodkas'
      },
      nb: {
        title: 'Vodkaer',
        slug: 'vodkaer'
      },
      da: {
        title: 'Vodkaer',
        slug: 'vodkaer'
      },
      sv: {
        title: 'Vodka',
        slug: 'vodka'
      },
      fr: {
        title: 'Vodkas',
        slug: 'vodkas'
      },
      nl: {
        title: 'Wodka',
        slug: 'wodka'
      }
    },
    items: [
      'item->product->drinks->vodkas->smirnoff-red-1',
      'item->product->drinks->vodkas->absolut-2',
      'item->product->drinks->vodkas->aniuska-3',
      'item->product->drinks->vodkas->moskovskaya-4',
      'item->product->drinks->vodkas->house-vodka-5'
    ]
  },
  'category->drinks->ciders': {
    id: 'category->drinks->ciders',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Sidras',
        slug: 'sidras'
      },
      en: {
        title: 'Ciders',
        slug: 'ciders'
      },
      de: {
        title: 'Apfelwein',
        slug: 'apfelwein'
      },
      nb: {
        title: 'Cider',
        slug: 'cider'
      },
      da: {
        title: 'Cider',
        slug: 'cider'
      },
      sv: {
        title: 'Cider',
        slug: 'cider'
      },
      fr: {
        title: 'Cidres',
        slug: 'cidres'
      },
      nl: {
        title: 'Cider',
        slug: 'cider'
      }
    },
    items: [
      'item->product->drinks->ciders->ladron-de-manzanas-1',
      'item->product->drinks->ciders->strongbow-2'
    ]
  },
  'category->drinks->liqueurs': {
    id: 'category->drinks->liqueurs',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Licores',
        slug: 'licores'
      },
      en: {
        title: 'Liqueurs',
        slug: 'liqueurs'
      },
      de: {
        title: 'Spirituosen',
        slug: 'spirituosen'
      },
      nb: {
        title: 'Brennevin',
        slug: 'brennevin'
      },
      da: {
        title: 'Spiritus',
        slug: 'spiritus'
      },
      sv: {
        title: 'Sprit',
        slug: 'sprit'
      },
      fr: {
        title: 'Esprits',
        slug: 'esprits'
      },
      nl: {
        title: 'Geesten',
        slug: 'geesten'
      }
    },
    items: [
      'item->product->drinks->liqueurs->aquavit-gammel-opland-1',
      'item->product->drinks->liqueurs->gammel-dansk-2',
      'item->product->drinks->liqueurs->jagermeister-3',
      'item->product->drinks->liqueurs->fernet-branca-4',
      'item->product->drinks->liqueurs->baileys-5',
      'item->product->drinks->liqueurs->cointreau-6',
      'item->product->drinks->liqueurs->frangelico-7',
      'item->product->drinks->liqueurs->limoncello-8',
      'item->product->drinks->liqueurs->drambuie-9',
      'item->product->drinks->liqueurs->triple-seco-10',
      'item->product->drinks->liqueurs->malibu-11',
      'item->product->drinks->liqueurs->linie-aquavit-12',
      'item->product->drinks->liqueurs->archers-peach-schnapps-13',
      'item->product->drinks->liqueurs->banana-liqueur-14',
      'item->product->drinks->liqueurs->benedictine-15',
      'item->product->drinks->liqueurs->cynar-16',
      'item->product->drinks->liqueurs->tequila-17',
      'item->product->drinks->liqueurs->grand-marnier-cordon-jaune-18',
      'item->product->drinks->liqueurs->grand-marnier-cordon-rouge-19',
      'item->product->drinks->liqueurs->galliano-20',
      'item->product->drinks->liqueurs->grappa-21',
      'item->product->drinks->liqueurs->licor-43-22',
      'item->product->drinks->liqueurs->herbal-liquor-23',
      'item->product->drinks->liqueurs->marie-brizard-24',
      'item->product->drinks->liqueurs->ramazzotti-25',
      'item->product->drinks->liqueurs->ricard-26',
      'item->product->drinks->liqueurs->peppermint-27',
      'item->product->drinks->liqueurs->sambuca-28',
      'item->product->drinks->liqueurs->tia-maria-29',
      'item->product->drinks->liqueurs->amaretto-30'
    ]
  },
  'category->drinks->cocktails': {
    id: 'category->drinks->cocktails',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Cócteles',
        slug: 'cocteles'
      },
      en: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      de: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      nb: {
        title: 'Cocktailer',
        slug: 'cocktailer'
      },
      da: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      sv: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      fr: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      nl: {
        title: 'Cocktails',
        slug: 'cocktails'
      }
    },
    items: [
      'item->product->drinks->cocktails->margarita-1',
      'item->product->drinks->cocktails->moscow-mule-2',
      'item->product->drinks->cocktails->cosmopolitan-3',
      'item->product->drinks->cocktails->mojito-4',
      'item->product->drinks->cocktails->pina-colada-5',
      'item->product->drinks->cocktails->caipirihnha-6',
      'item->product->drinks->cocktails->cocktails->long-island-ice-tea-7'
    ]
  },
  'category->drinks->smoothies': {
    id: 'category->drinks->smoothies',
    active: true,
    type: 'product',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->product->drinks->smoothies->berry-burst-1',
      'item->product->drinks->smoothies->canarian-kiss-2',
      'item->product->drinks->smoothies->mango-heaven-3',
      'item->product->drinks->smoothies->strawberry-split-4',
      'item->product->drinks->smoothies->green-machine-5',
      'item->product->drinks->smoothies->tropical-colada-6'
    ]
  },
  'category->wines->red-wines': {
    id: 'category->wines->red-wines',
    active: true,
    type: 'product',
    displayInfo: {
      es: {
        title: 'Vinos Tintos',
        slug: 'tintos'
      },
      en: {
        title: 'Red Wines',
        slug: 'red-wines'
      },
      de: {
        title: 'Rotweine',
        slug: 'rotweine'
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
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'item->product->wines->wine-from-the-house-1',
      'item->product->wines->erial-2',
      'item->product->wines->agala-1175-3',
      'item->product->wines->carmelo-rodero-9-meses-24',
      'item->product->wines->tierra-fundida-4',
      'item->product->wines->rodriguez-de-vera-5',
      'item->product->wines->vizcarra-15-meses-6',
      'item->product->wines->ostatu-7',
      'item->product->wines->artillero-8'
    ]
  },
  'category->wines->white-wines': {
    id: 'category->wines->white-wines',
    active: true,
    type: 'product',
    displayInfo: {
      es: {
        title: 'Vinos Blancos',
        slug: 'vinos-blancos'
      },
      en: {
        title: 'White Wines',
        slug: 'white-wines'
      },
      de: {
        title: 'Weißweine',
        slug: 'weibweine'
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
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'item->product->wines->wine-from-the-house-9',
      'item->product->wines->rubicon-10',
      'item->product->wines->paco-and-lola-11',
      'item->product->wines->paisaje-de-las-islas-12',
      'item->product->wines->tajinaste-13',
      'item->product->wines->godelia-godello-14',
      'item->product->wines->belondrade-quinta-apolonia-15',
      'item->product->wines->limite-norte-24',
      'item->product->wines->chivite-legardeta-25'
    ]
  },
  'category->wines->rose-wines': {
    id: 'category->wines->rose-wines',
    active: true,
    type: 'product',
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
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'item->product->wines->wine-from-the-house-16',
      'item->product->wines->ochoa-lagrima-rosa-17',
      'item->product->wines->chivite-las-fincas-18'
    ]
  },
  'category->wines->sweet-wines': {
    id: 'category->wines->sweet-wines',
    active: true,
    type: 'product',
    displayInfo: {
      es: {
        title: 'Vinos Dulces',
        slug: 'vinos-duces'
      },
      en: {
        title: 'Sweet Wines',
        slug: 'sweet-wines'
      },
      de: {
        title: 'Süße Weine',
        slug: 'sube-weine'
      },
      nb: {
        title: 'Søte viner',
        slug: 'sote-viner'
      },
      da: {
        title: 'Søde vine',
        slug: 'sode-vine'
      },
      sv: {
        title: 'Söta viner',
        slug: 'sota-viner'
      },
      fr: {
        title: 'Vins doux',
        slug: 'vins-doux'
      },
      nl: {
        title: 'Zoete wijnen',
        slug: 'zoete-wijnen'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: ['item->product->wines->don-px-2018-19']
  },
  'category->wines->sangrias-and-champagnes': {
    id: 'category->wines->sangrias-and-champagnes',
    active: true,
    type: 'product',
    displayInfo: {
      es: {
        title: 'Sangrías y Champagnes',
        slug: 'sangrias-y-champagnes'
      },
      en: {
        title: 'Sangrias and Champagnes',
        slug: 'sangrias-and-champagnes'
      },
      de: {
        title: 'Sangrías und Champagner',
        slug: 'sangrias-und-champagner'
      },
      nb: {
        title: 'Sangrías og Champagnes',
        slug: 'sangrias-og-champagnes'
      },
      da: {
        title: 'Sangrías og Champagnes',
        slug: 'sangrias-og-champagnes'
      },
      sv: {
        title: 'Sangrías och champagner',
        slug: 'sangrias-och-champagner'
      },
      fr: {
        title: 'Sangrias et champagnes',
        slug: 'sangrias-et-champagnes'
      },
      nl: {
        title: 'Sangrías en champagnes',
        slug: 'sangrias-en-champagnes'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'item->product->wines->raventos-i-blanc-de-nit-20',
      'item->product->wines->raventos-de-nit-rose-21',
      'item->product->wines->taittinger-brut-reserve-22',
      'item->product->wines->sangria-23'
    ]
  },
  'category->info->sanitary-measures': {
    id: 'category->info->sanitary-measures',
    active: true,
    type: 'info',
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->info->sanitary-measures->1',
      'item->info->sanitary-measures->2',
      'item->info->sanitary-measures->3',
      'item->info->sanitary-measures->4',
      'item->info->sanitary-measures->5',
      'item->info->sanitary-measures->6',
      'item->info->sanitary-measures->7',
      'item->info->sanitary-measures->8',
      'item->info->sanitary-measures->9',
      'item->info->sanitary-measures->10',
      'item->info->sanitary-measures->11',
      'item->info->sanitary-measures->12'
    ]
  },
  'category->info->information': {
    id: 'category->info->information',
    type: 'info',
    active: true,
    hasVariants: false,
    variants: '',
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
    },
    items: [
      'item->info->information-1',
      'item->info->information-2',
      'item->info->information-3',
      'item->info->information-4',
      'item->info->information-5',
      'item->info->information-6'
    ]
  },
  'category->meals->extra-menu': {
    id: 'category->meals->extra-menu',
    active: false,
    type: 'product',
    hasVariants: false,
    variants: '',
    displayInfo: {
      es: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      en: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      de: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      nb: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      da: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      sv: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      fr: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      nl: {
        title: 'Extra menu',
        slug: 'extra-menu'
      }
    },
    items: [
      'item->product->meals->extra-menu->-1',
      'item->product->meals->extra-menu->-2',
      'item->product->meals->extra-menu->-3',
      'item->product->meals->extra-menu->-4',
      'item->product->meals->extra-menu->-5',
      'item->product->meals->extra-menu->-6',
      'item->product->meals->extra-menu->-7',
      'item->product->meals->extra-menu->-8',
      'item->product->meals->extra-menu->-9',
      'item->product->meals->extra-menu->-10',
      'item->product->meals->extra-menu->-11',
      'item->product->meals->extra-menu->-12',
      'item->product->meals->extra-menu->-13',
      'item->product->meals->extra-menu->-14',
      'item->product->meals->extra-menu->-15',
      'item->product->meals->extra-menu->-16',
      'item->product->meals->extra-menu->-17',
      'item->product->meals->extra-menu->-18',
      'item->product->meals->extra-menu->-19',
      'item->product->meals->extra-menu->-20'
    ]
  }
};
