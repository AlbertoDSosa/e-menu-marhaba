import { DetailModal, ListModal } from 'definitions/models';

export const modals: { [key: string]: ListModal | DetailModal } = {
  'modal->blackboard-list->1': {
    id: 'modal->blackboard-list->1',
    template: 'template->modal->blackboard-list',
    active: true,
    show: true,
    showDescription: false,
    showExtraInfo: true,
    showTitle: true,
    type: 'modal',
    images: [],
    defaultImg: 'image->modal->400-2-garnish-1',
    mainImg: 'image->modal->400-2-garnish-1',
    backgroundImg: 'image->background->blackboard-1',
    lists: ['list->meals->fittings'],
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
  } as ListModal,
  'modal->blackboard-list->2': {
    id: 'modal->blackboard-list->2',
    template: 'template->modal->blackboard-list',
    active: true,
    show: false,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    type: 'modal',
    images: [],
    mainImg: '',
    backgroundImg: 'image->background->blackboard-1',
    defaultImg: '',
    lists: ['list->meals->2'],
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      },
      de: {
        title: '',
        slug: ''
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
  } as ListModal,
  'modal->productDetail': {
    id: 'modal->productDetail',
    template: 'template->modal->productDetail',
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    active: true,
    type: 'modal',
    images: [],
    mainImg: '',
    defaultImg: '',
    backgroundImg: '',
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      },
      de: {
        title: '',
        slug: ''
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
  } as DetailModal
};
