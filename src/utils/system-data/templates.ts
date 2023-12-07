import {
  Template,
  PageTemplate,
  SectionTemplate,
  ListTemplate
} from 'definitions/models';

interface Templates {
  [key: string]: Template;
}

export const templates: Templates = {
  'template->page->': {
    id: 'template->page->',
    type: 'page',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      grid: {
        width: '',
        height: ''
      }
    }
  } as PageTemplate,
  'template->page->-': {
    id: 'template->page->-',
    active: true,
    type: 'page',
    displayInfo: {
      es: {
        title: '',
        description: '',
        slug: ''
      },
      en: {
        title: '',
        description: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      grid: {
        width: '',
        height: ''
      }
    }
  } as PageTemplate,
  'template->pageSection->two-rows-multi-col': {
    id: 'template->pageSection->two-rows-multi-col',
    type: 'section',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      list: {
        rowHeight: '40vh',
        rowWidth: '80vw'
      }
    }
  } as SectionTemplate,
  'template->pageSection->two-rows-multi-col->small-img': {
    id: 'template->pageSection->two-rows-multi-col',
    type: 'section',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      list: {
        rowHeight: '50vh',
        rowWidth: '80vw'
      },
      img: {
        rowHeight: '30vh',
        rowWidth: '80vw'
      }
    }
  } as SectionTemplate,
  'template->pageSection->two-rows-multi-col->single-col-list': {
    id: 'template->pageSection->two-rows-multi-col->single-col-list',
    type: 'section',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      list: {
        rowHeight: '40vh',
        rowWidth: '60vw'
      }
    }
  } as SectionTemplate,
  'template->pageSection->one-row-two-cols': {
    id: 'template->pageSection->one-row-two-cols',
    type: 'section',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      row: {
        width: '86vw',
        height: '85vh'
      }
    }
  } as SectionTemplate,
  'template->pageSection->one-row-two-cols->slide': {
    id: 'template->pageSection->one-row-two-cols->slide',
    type: 'section',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      row: {
        width: '86vw',
        height: '75vh'
      },
      list: {
        colSize: '6.7'
      },
      img: {
        colSize: '5.3'
      }
    }
  } as SectionTemplate,
  'template->pageSection->multi-rows-two-cols->slide': {
    id: 'template->pageSection->multi-rows-two-cols->slide',
    type: 'section',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      title: {
        textJustify: 'center'
      },
      grid: {
        width: '100%',
        height: '80vh',
        padding: '1.5em'
      },
      list: {
        colSize: '6.5'
      },
      img: {
        colSize: '5.5'
      }
    }
  } as SectionTemplate,
  'template->list->drinks': {
    id: 'template->list->drinks',
    active: true,
    type: 'list',
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      itemIcon: {
        colSize: '0.7'
      },
      itemTitle: {
        colSize: '5',
        textJustify: 'center'
      },
      productLine: {
        colSize: '4.3'
      },
      productPrice: {
        colSize: '2'
      }
    }
  } as ListTemplate,
  'template->list->meals->short-title': {
    id: 'template->list->meals->short-title',
    type: 'list',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      itemIcon: {
        colSize: '0.7'
      },
      itemTitle: {
        colSize: '6',
        textJustify: 'center'
      },
      productLine: {
        colSize: '4'
      },
      productPrice: {
        colSize: '1.3'
      }
    }
  } as ListTemplate,
  'template->list->default': {
    id: 'template->list->default',
    type: 'list',
    active: true,
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      }
    },
    styles: {
      itemIcon: {
        colSize: '0.7'
      },
      itemTitle: {
        colSize: '7',
        textJustify: 'start'
      },
      productLine: {
        colSize: '3'
      },
      productPrice: {
        colSize: '1.3'
      }
    }
  } as ListTemplate
};
