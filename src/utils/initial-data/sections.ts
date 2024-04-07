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
    listItemsForCol: 6,
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
    mainImg: 'image->section->aside-650-750-starters-1',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->meals->starters-1'],
    number: '1',
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
  'pageSection->meals->starters-2': {
    id: 'pageSection->meals->starters-2',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-starters-2',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->starters-2'],
    number: '2',
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
  'pageSection->meals->starters-3': {
    id: 'pageSection->meals->starters-3',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-starters-3',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 10,
    lists: ['list->meals->starters-3'],
    number: '1',
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
  'pageSection->meals->skewers-1': {
    id: 'pageSection->meals->skewers-1',
    type: 'section',
    active: true,
    defaultImg: 'image->section->aside-1500-400-default',
    mainImg: 'image->section->aside-1500-400-skewers',
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->skewers'],
    number: '1',
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
  },
  'pageSection->meals->cous-cous-1': {
    id: 'pageSection->meals->cous-cous-1',
    type: 'section',
    active: true,
    defaultImg: 'image->section->aside-1500-400-default',
    mainImg: 'image->section->aside-1500-400-cous-cous',
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->cous-cous'],
    number: '1',
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
  },
  'pageSection->meals->tajin-1': {
    id: 'pageSection->meals->tajin-1',
    type: 'section',
    active: true,
    defaultImg: 'image->section->aside-1500-400-default',
    mainImg: 'image->section->aside-1500-400-tajin',
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->tajin'],
    number: '1',
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
  },
  'pageSection->meals->specials-1': {
    id: 'pageSection->meals->specials-1',
    type: 'section',
    active: true,
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: '',
    template: 'template->pageSection->one-row-two-cols',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 6,
    lists: ['list->meals->specials'],
    number: '1',
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
  },
  'pageSection->wines-1': {
    id: 'pageSection->wines-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-white-wine',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 4,
    lists: [
      'list->wines->white-wines-1',
      'list->wines->white-wines-2',
      'list->wines->rose-wines-1'
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
  'pageSection->wines-2': {
    id: 'pageSection->wines-2',
    type: 'section',
    active: true,
    template: 'template->pageSection->one-row-two-cols->slide',
    defaultImg: 'image->section->aside-650-750-default',
    mainImg: 'image->section->aside-650-750-red-wine-1',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    listItemsForCol: 4,
    lists: ['list->wines->red-wines-1', 'list->wines->red-wines-2'],
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
  }
};
