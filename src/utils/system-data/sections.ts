import { PageSection } from 'definitions/models';

export const sections: { [key: string]: PageSection } = {
  'pageSection->desserts-1': {
    id: 'pageSection->desserts-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-400-default',
    mainImg: 'image->section->aside-1500-400-desserts',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 8,
    lists: ['list->desserts'],
    number: '1',
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
  'pageSection->meals->starters-1': {
    id: 'pageSection->meals->starters-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-starters',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->meals->to-share-or-to-snack-1'],
    number: '1',
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
  'pageSection->meals->starters-2': {
    id: 'pageSection->meals->starters-2',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-350-default',
    mainImg: 'image->section->aside-1500-350-starters',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->to-share-or-to-snack-2'],
    number: '2',
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
  'pageSection->meals->salads-1': {
    id: 'pageSection->meals->salads-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-400-default',
    mainImg: 'image->section->aside-1500-400-salads',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->something-fresh'],
    number: '1',
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
  'pageSection->meals->spoon-dishes-1': {
    id: 'pageSection->meals->spoon-dishes-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-400-default',
    mainImg: 'image->section->aside-1500-400-spoon-dishes',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->spoon-dishes'],
    number: '1',
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
  'pageSection->meals->fittings-1': {
    id: 'pageSection->meals->fittings-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->simple-list',
    defaultImg: 'image->section->aside-500-420-default',
    mainImg: '',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->fittings'],
    number: '2',
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
    }
  },
  'pageSection->meals->sea-and-mountains': {
    id: 'pageSection->meals->sea-and-mountains',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols',
    defaultImg: 'image->section->aside-750-2-default',
    mainImg: 'image->section->aside-750-2-sea-and-montain',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->meals->sea-and-mountains'],
    number: '1',
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
  'pageSection->meals->sea-and-mountains-1': {
    id: 'pageSection->meals->sea-and-mountains-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-350-default',
    mainImg: 'image->section->aside-1500-350-surf',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->meals->sea-and-mountains-1'],
    number: '1',
    displayInfo: {
      es: {
        title: 'Mar',
        slug: 'mar'
      },
      en: {
        title: 'Surf',
        slug: 'surf'
      },
      de: {
        title: 'Meer',
        slug: 'meer'
      },
      nb: {
        title: 'Hav',
        slug: 'hav'
      },
      da: {
        title: 'Hav',
        slug: 'hav'
      },
      sv: {
        title: 'Hav',
        slug: 'hav'
      },
      fr: {
        title: 'Mer',
        slug: 'mer'
      },
      nl: {
        title: 'Uit de Zee',
        slug: 'uit-de-zee'
      }
    }
  },
  'pageSection->meals->sea-and-mountains-2': {
    id: 'pageSection->meals->sea-and-mountains-2',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-350-default',
    mainImg: 'image->section->aside-1500-350-turf',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->meals->sea-and-mountains-2'],
    number: '1',
    displayInfo: {
      es: {
        title: 'Montaña',
        slug: 'montana'
      },
      en: {
        title: 'Turf',
        slug: 'turf'
      },
      de: {
        title: 'Berge',
        slug: 'berge'
      },
      nb: {
        title: 'Fjell',
        slug: 'fjell'
      },
      da: {
        title: 'Bjerge',
        slug: 'bjerge'
      },
      sv: {
        title: 'Berg',
        slug: 'berg'
      },
      fr: {
        title: 'Montagne',
        slug: 'montagne'
      },
      nl: {
        title: 'Uit de Bergen',
        slug: 'uit-de-bergen'
      }
    }
  },
  'pageSection->meals->our-chef-s-suggestions-1': {
    id: 'pageSection->meals->our-chef-s-suggestions-1',
    type: 'section',
    active: true,
    defaultImg: 'image->section->aside-750-2-default',
    mainImg: 'image->section->aside-750-2-our-chef-s-suggestions',
    template: 'template->pageSection->one-row-two-cols',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->our-chef-s-suggestions'],
    number: '1',
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
  'pageSection->meals->breakfasts-1': {
    id: 'pageSection->meals->breakfasts-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-breakfasts',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->meals->breakfasts'],
    number: '1',
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
    }
  },
  'pageSection->meals->sandwich-1': {
    id: 'pageSection->meals->sandwich-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-brunch',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->meals->sandwich'],
    number: '1',
    displayInfo: {
      es: {
        title: 'Brunch',
        slug: 'brunch'
      },
      en: {
        title: 'Brunch',
        slug: 'brunch'
      },
      de: {
        title: 'Brunch',
        slug: 'brunch'
      },
      nb: {
        title: 'Brunch',
        slug: 'brunch'
      },
      da: {
        title: 'Brunch',
        slug: 'brunch'
      },
      sv: {
        title: 'Brunch',
        slug: 'brunch'
      },
      fr: {
        title: 'Brunch',
        slug: 'brunch'
      },
      nl: {
        title: 'Brunch',
        slug: 'brunch'
      }
    }
  },
  'pageSection->meals->childrens': {
    id: 'pageSection->meals->childrens',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-400-default',
    mainImg: 'image->section->aside-1500-400-childrens',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->childrens'],
    number: '1',
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
  'pageSection->meals->childrens-1': {
    id: 'pageSection->meals->childrens-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-childrens',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->meals->childrens'],
    number: '1',
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
  'pageSection->wines-1': {
    id: 'pageSection->pageSection->wines-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-red-wine',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->wines->red-wines'],
    number: '1',
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
  'pageSection->wines-2': {
    id: 'pageSection->wines-2',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-white-wine',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->wines->white-wines'],
    number: '2',
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
  'pageSection->wines-3': {
    id: 'pageSection->wines-3',
    type: 'section',
    active: true,
    template: 'template->pageSection->multi-rows-two-cols->slide',
    defaultImg: '',
    mainImg: '',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 4,
    lists: [
      'list->wines->rose-wines',
      'list->wines->sweet-wines',
      'list->wines->sangrias-and-champagnes'
    ],
    number: '3',
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
  'pageSection->drinks->refreshments-1': {
    id: 'pageSection->drinks->refreshments-1',
    type: 'section',
    active: true,
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-refreshments',
    template: 'template->pageSection->two-rows-multi-col->small-img',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 8,
    lists: ['list->drinks->refreshments'],
    number: '1',
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
  'pageSection->drinks->beers-1': {
    id: 'pageSection->beers-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols',
    defaultImg: 'image->section->aside-750-2-default',
    mainImg: 'image->section->aside-650-750-beers',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->drinks->beers'],
    number: '1',
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
  'pageSection->drinks->coffee-shop-1': {
    id: 'pageSection->coffee-shop-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols',
    defaultImg: 'image->section->aside-750-2-default',
    mainImg: 'image->section->aside-750-2-coffee-shop',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->drinks->coffee-shop'],
    number: '2',
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
  'pageSection->drinks->whiskies-1': {
    id: 'pageSection->drinks->whiskies-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-whisky',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->drinks->whiskies'],
    number: '8',
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
    }
  },
  'pageSection->drinks->rums-2': {
    id: 'pageSection->drinks->rums-2',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-rums',
    listItemsForCol: 10,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->drinks->rums'],
    number: '4',
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
    }
  },
  'pageSection->drinks->combined-3': {
    id: 'pageSection->drinks->combined-3',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 10,
    template: 'template->pageSection->multi-rows-two-cols->slide',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    lists: ['list->drinks->vodkas', 'list->drinks->ciders'],
    number: '3',
    displayInfo: {
      es: {
        title: 'Combinados',
        slug: 'combinados'
      },
      en: {
        title: 'Combined',
        slug: 'combined'
      },
      de: {
        title: 'Kombiniert',
        slug: 'kombiniert'
      },
      nb: {
        title: 'Kombinert',
        slug: 'kombinert'
      },
      da: {
        title: 'Kombineret',
        slug: 'kombineret'
      },
      sv: {
        title: 'Kombinerad',
        slug: 'kombinerad'
      },
      fr: {
        title: 'Combiné',
        slug: 'combine'
      },
      nl: {
        title: 'Gecombineerd',
        slug: 'gecombineerd'
      }
    }
  },
  'pageSection->drinks->gins-4': {
    id: 'pageSection->drinks->gins-4',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-gins',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->drinks->gins'],
    number: '4',
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
    }
  },
  'pageSection->drinks->cognac-and-brandy-5': {
    id: 'pageSection->drinks->cognac-and-brandy-5',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-cognac',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->drinks->cognac-and-brandy'],
    number: '5',
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
    }
  },
  'pageSection->drinks->liqueurs-6': {
    id: 'pageSection->drinks->liqueurs-6',
    template: 'template->pageSection->one-row-multi-col',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 7,
    lists: ['list->drinks->liqueurs'],
    number: '6',
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
    }
  },
  'pageSection->drinks->cocktails-7': {
    id: 'pageSection->drinks->cocktails-7',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-350-default',
    mainImg: 'image->section->aside-1500-350-cocktails',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->drinks->cocktails'],
    number: '7',
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
    }
  },
  'pageSection->drinks->appetizers-1': {
    id: 'pageSection->drinks->appetizers-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols',
    defaultImg: 'image->section->aside-750-2-default',
    mainImg: 'image->section->aside-750-2-appetizers',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 8,
    lists: ['list->drinks->appetizers'],
    number: '9',
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
  'pageSection->drinks->smoothies-1': {
    id: 'pageSection->drinks->smoothies-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->info-list',
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 6,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    lists: ['list->drinks->smoothies-1'],
    number: '1',
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
  'pageSection->drinks->smoothies-2': {
    id: 'pageSection->drinks->smoothies-2',
    type: 'section',
    active: true,
    template: 'template->pageSection->info-list',
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 6,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->drinks->smoothies-2'],
    number: '1',
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
  'pageSection->info->allergens-1': {
    id: 'pageSection->info->allergens-1',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    template: 'template->pageSection->allergens-list',
    listItemsForCol: 10,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->info->allergens'],
    number: '1',
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
  'pageSection->info->sanitary-measures-1': {
    id: 'pageSection->info->sanitary-measures-1',
    template: 'template->pageSection->info-list',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 6,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->info->sanitary-measures-1'],
    number: '1',
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
  'pageSection->info->sanitary-measures-2': {
    id: 'pageSection->info->sanitary-measures-2',
    template: 'template->pageSection->info-list',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 6,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->info->sanitary-measures-2'],
    number: '1',
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
  'pageSection->information': {
    id: 'pageSection->information',
    template: 'template->pageSection->info-list',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 6,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->info->information'],
    number: '1',
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
  'pageSection->info->gallery-1': {
    id: 'pageSection->info->gallery-1',
    template: 'template->pageSection->gallery-list',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 0,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->info->gallery'],
    number: '1',
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
  'pageSection->meals->extra-menu': {
    id: 'pageSection->meals->extra-menu',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    template: 'template->pageSection->simple-list',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->meals->extra-menu'],
    number: '1',
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
