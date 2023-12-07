import { Page } from 'definitions/models';

export const pages: { [key: string]: Page } = {
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
  'page->starters': {
    id: 'page->starters',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->meals->starters-1',
      'pageSection->meals->starters-2'
    ],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Para Compartir o Picar',
        slug: 'para-compartir-o-picar'
      },
      en: {
        title: 'To share or snack',
        slug: 'to-share-or-snack'
      },
      de: {
        title: 'Zum Teilen Oder Kleinigkeit Essen',
        slug: 'zum-teilen-oder-kleinigkeit-essen'
      },
      nb: {
        title: 'Å Dele Eller Som Snack',
        slug: 'a-dele-eller-som-snack'
      },
      da: {
        title: 'Til at Dele Eller Til at Nippe Til',
        slug: 'til-at-dele-eller-til-at-nippe-til'
      },
      sv: {
        title: 'Att Dela Eller Mellanmål',
        slug: 'att-dela-eller-mellanmal'
      },
      fr: {
        title: 'Entrées à Partager',
        slug: 'entrees-a-partager'
      },
      nl: {
        title: 'Om te Delen of Happen',
        slug: 'om-te-delen-of-happen'
      }
    }
  },
  'page->salads': {
    id: 'page->salads',
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
        title: 'Algo Fresco',
        slug: 'algo-fresco'
      },
      en: {
        title: 'Cool Dishes',
        slug: 'cool-dishes'
      },
      de: {
        title: 'Etwas Frisches',
        slug: 'etwas-frisches'
      },
      nb: {
        title: 'Noe Friskt',
        slug: 'noe-friskt'
      },
      da: {
        title: 'Lidt Frisk Til Ganen',
        slug: 'lidt-frisk-til-ganen'
      },
      sv: {
        title: 'Något Fräscht',
        slug: 'nagot-frascht'
      },
      fr: {
        title: 'Quelque Chose de Frais',
        slug: 'quelque-chose-de-frais'
      },
      nl: {
        title: 'Verfrissend',
        slug: 'verfrissend'
      }
    }
  },
  'page->spoon-dishes': {
    id: 'page->spoon-dishes',
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
        title: 'Cuchara de la Tierra',
        slug: 'cuchara-de-la-tierra'
      },
      en: {
        title: 'Soups and Stews',
        slug: 'soups-and-stews'
      },
      de: {
        title: 'Löffelgerichte aus Örtlichen Gefilden',
        slug: 'loffelgerichteaus-ortlichen-gefilden'
      },
      nb: {
        title: 'Jordens Skje',
        slug: 'jordens-skje'
      },
      da: {
        title: 'Lokale Supper',
        slug: 'lokale-supper'
      },
      sv: {
        title: 'Jordens Sked',
        slug: 'jordens-sked'
      },
      fr: {
        title: 'À la Cuillère',
        slug: 'a-la-cuillere'
      },
      nl: {
        title: 'Van het Land',
        slug: 'van-het-land'
      }
    }
  },
  'page->sea-and-mountains-1': {
    id: 'page->sea-and-mountains-1',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->sea-and-mountains'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Mar y Montaña',
        slug: 'mar-y-montana'
      },
      en: {
        title: 'Surf & Turf',
        slug: 'surf-turf'
      },
      de: {
        title: 'Berge und Meer',
        slug: 'berge-und-meer'
      },
      nb: {
        title: 'Hav og Fjell',
        slug: 'hav-og-fjell'
      },
      da: {
        title: 'Hav og Bjerge',
        slug: 'hav-og-bjerge'
      },
      sv: {
        title: 'Hav och Berg',
        slug: 'hav-och-berg'
      },
      fr: {
        title: 'Mer et Montagne',
        slug: 'mer-et-montagne'
      },
      nl: {
        title: 'Uit de Zee en de Bergen',
        slug: 'uit-de-zee-en-de-bergen'
      }
    }
  },
  'page->sea-and-mountains-2': {
    id: 'page->sea-and-mountains-2',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->meals->sea-and-mountains-1',
      'pageSection->meals->sea-and-mountains-2'
    ],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Mar y Montaña',
        slug: 'mar-y-montana'
      },
      en: {
        title: 'Surf & Turf',
        slug: 'surf-turf'
      },
      de: {
        title: 'Berge und Meer',
        slug: 'berge-und-meer'
      },
      nb: {
        title: 'Hav og Fjell',
        slug: 'hav-og-fjell'
      },
      da: {
        title: 'Hav og Bjerge',
        slug: 'hav-og-bjerge'
      },
      sv: {
        title: 'Hav och Berg',
        slug: 'hav-och-berg'
      },
      fr: {
        title: 'Mer et Montagne',
        slug: 'mer-et-montagne'
      },
      nl: {
        title: 'Uit de Zee en de Bergen',
        slug: 'uit-de-zee-en-de-bergen'
      }
    }
  },
  'page->our-chef-s-suggestions': {
    id: 'page->our-chef-s-suggestions',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->our-chef-s-suggestions-1'],
    isPolySection: false,
    displayInfo: {
      es: {
        title: 'Sugerencias de nuestro Chef',
        slug: 'Sugerencias de nuestro Chef'
      },
      en: {
        title: `Our Chef's Suggestions`,
        slug: 'our-chef-s-suggestions'
      },
      de: {
        title: 'Empfehlungen Unseres Küchenchefs',
        slug: 'empfehlungen-unseres-kuchenchefs'
      },
      nb: {
        title: 'Kokkens Anbefaling',
        slug: 'kokkens-anbefaling'
      },
      da: {
        title: 'Vores Chefkok Anbefaler',
        slug: 'vores-chefkok-anbefaler'
      },
      sv: {
        title: 'Rekommendation Från Vår Kock',
        slug: 'rekommendation-fran-var-kock'
      },
      fr: {
        title: 'Suggestion de Notre Chef',
        slug: 'suggestion-de-notre-chef'
      },
      nl: {
        title: 'Suggestie Van de Chef',
        slug: 'suggestie-van-de-chef'
      }
    }
  },
  'page->snacks-and-brunch': {
    id: 'page->snacks-and-brunch',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->meals->breakfasts-1',
      'pageSection->drinks->smoothies-1',
      'pageSection->meals->sandwich-1'
    ],
    isPolySection: true,
    displayInfo: {
      es: {
        title: 'Snacks and Brunch',
        slug: 'snacks-and-brunch'
      },
      en: {
        title: 'Snacks and Brunch',
        slug: 'snacks-and-brunch'
      },
      de: {
        title: 'Snacks und Brunch',
        slug: 'snacks-und-brunch'
      },
      nb: {
        title: 'Snacks og Brunsj',
        slug: 'snacks-og-brunsj'
      },
      da: {
        title: 'Snacks og Brunch',
        slug: 'snacks-og-brunch'
      },
      sv: {
        title: 'Snacks och Brunch',
        slug: 'Snacks och Brunch'
      },
      fr: {
        title: 'Collations et brunch',
        slug: 'collations-et-brunch'
      },
      nl: {
        title: 'Snacks and Brunch',
        slug: 'snacks-and-brunch'
      }
    }
  },
  'page->sandwich': {
    id: 'page->sandwich',
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
        title: 'Con las Manos',
        slug: 'con-las-manos'
      },
      en: {
        title: 'Hand-eaten Foods',
        slug: 'hand-eaten-foods'
      },
      de: {
        title: 'Mit Den Händen',
        slug: 'Mit Den Handen'
      },
      nb: {
        title: 'Med Hendene',
        slug: 'med-hendene'
      },
      da: {
        title: 'Til at Spise med Fingrene',
        slug: 'til-at-spise-med-fingrene'
      },
      sv: {
        title: 'Med Händerna',
        slug: 'med-handerna'
      },
      fr: {
        title: 'Avec Les Mains',
        slug: 'avec-les-mains'
      },
      nl: {
        title: 'Zonder Bestek',
        slug: 'zonder-bestek'
      }
    }
  },
  'page->childrens': {
    id: 'page->childrens',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->childrens'],
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
  'page->wines': {
    id: 'page->wines',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->wines-1',
      'pageSection->wines-2',
      'pageSection->wines-3'
    ],
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
  'page->information': {
    id: 'page->information',
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
  'page->refreshments': {
    id: 'page->refreshments',
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
  'page->beers': {
    id: 'page->beers',
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
  'page->coffee-shop': {
    id: 'page->coffee-shop',
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
  'page->bar': {
    id: 'page->bar',
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
  'page->smoothies': {
    id: 'page->smoothies',
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
  'page->appetizers': {
    id: 'page->appetizers',
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
  'page->extra-menu': {
    id: 'page->extra-menu',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->extra-menu'],
    isPolySection: false,
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
    }
  }
};
