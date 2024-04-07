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
    sections: ['pageSection->wines-1', 'pageSection->wines-2'],
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
        title: 'Brochettes',
        slug: 'brochettes'
      },
      nl: {
        title: 'Sjasliek',
        slug: 'sjasliek'
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
        title: 'Cous Cous',
        slug: 'cous-cous'
      },
      nl: {
        title: 'Cous Cous',
        slug: 'cous-cous'
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
  'page->meals->specials': {
    id: 'page->meals->specials',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->specials-1'],
    isPolySection: false,
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
  }
};
