export const systemData: any = {
  appTypes: {
    'appType->basic': {
      id: 'appType->basic',
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
      }
    },
    'appType->default': {
      id: 'appType->default',
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
      }
    }
  },
  appInfo: {
    version: '0.0.1',
    appType: 'appType->basic',
    appLanguages: ['es', 'en']
  },
  generalInfo: {
    companyName: 'Restaurante Marhaba',
    baseLanguage: 'es',
    dataVersion: '0',
    logoImg: '',
    qrImg: 'image->qr->qr-flag',
    url: 'https://restaurantemarhaba.com',
    appLanguages: ['es', 'en', 'de', 'nb', 'da', 'sv', 'fr', 'nl'],
    displayInfo: {
      es: {
        title: 'Información',
        extraInfo: 'Todos los precios incluyen IGIC',
        slug: 'informacion'
      },
      en: {
        title: 'Information',
        extraInfo: 'All prices include IGIC',
        slug: 'information'
      },
      de: {
        title: 'Information',
        extraInfo: 'Alle Preise beinhalten IGIC',
        slug: 'information'
      },
      nb: {
        title: 'Informasjon',
        extraInfo: 'Alle priser inkluderer IGIC',
        slug: 'informasjon'
      },
      da: {
        title: 'Information',
        extraInfo: 'Alle priser inkluderer IGIC',
        slug: 'information'
      },
      sv: {
        title: 'Information',
        extraInfo: 'Alla priser inkluderar IGIC',
        slug: 'information'
      },
      fr: {
        title: 'Informations',
        extraInfo: 'Tous les prix incluent IGIC',
        slug: 'informations'
      },
      nl: {
        title: 'Informatie',
        extraInfo: 'Alle prijzen zijn inclusief IGIC',
        slug: 'informatie'
      }
    }
  },
  screensaver: {
    active: true,
    maxItems: 20,
    selectableSlides: [],
    slides: [
      'slide->screensaver->logo-1',
      'slide->screensaver->breakfasts-2',
      'slide->screensaver->breakfasts-1',
      'slide->screensaver->smoothies-1',
      'slide->screensaver->live-music-1',
      'slide->screensaver->capacity-1',
      'slide->screensaver->capacity-toilet-1',
      'slide->screensaver->certificated-covid-1',
      'slide->screensaver->basic-rules-1',
      'slide->screensaver->good-practice-1',
      'slide->screensaver->terrace-1',
      'slide->screensaver->allergens-1',
      'slide->screensaver->smoke-1'
    ],
    slideOpts: {
      speed: 1000,
      autoplay: {
        delay: 5000
      }
    },
    timeToShow: 'time->screensaver->1-minute-and-half',
    selectableTimesToShow: {
      'time->screensaver->30-seconds': {
        id: 'time->screensaver->30-seconds',
        time: 30000,
        displayInfo: {
          es: {
            title: '30 segundos'
          }
        }
      },
      'time->screensaver->1-minute': {
        id: 'time->screensaver->1-minute',
        time: 60000,
        displayInfo: {
          es: {
            title: '1 minuto'
          }
        }
      },
      'time->screensaver->1-minute-and-half': {
        id: 'time->screensaver->1-minute-and-half',
        time: 90000,
        displayInfo: {
          es: {
            title: '1 minuto y medio'
          }
        }
      },
      'time->screensaver->2-minutes': {
        id: 'time->screensaver->2-minutes',
        time: 120000,
        displayInfo: {
          es: {
            title: '2 minutos'
          }
        }
      }
    }
  }
};
