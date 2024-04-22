import uid from 'short-uuid';

import {
  SetProps,
  AddProps,
  RemoveProps,
  ReorderProps,
  UpdateProps,
  CreateProps,
  NewDisplayInfo,
  NewNumber,
  NewPrice,
  NewVariantPrice,
  NewMainImage
} from 'definitions/dataContext';
import {
  categoryActions,
  listActions,
  listItemActions,
  pageMenuActions,
  pageMenuItemActions,
  allergenicActions,
  screensaverActions,
  slideActions,
  itemActions,
  imageActions
} from './types';

import { DisplayInfo } from '../../definitions/models';
import { resolvers } from '../../utils/resolvers';
import { State } from '../../definitions/resolvers';

export const add = (
  state: State,
  { entity, entityId, itemId, addToList }: AddProps
) => {
  const resolver = resolvers(entity);

  const _add: { [key: string]: () => State } = {
    list: () => {
      return resolver[listActions.ADD_ITEM](state, {
        type: listActions.ADD_ITEM,
        entity: entity,
        payload: { entityId, itemId }
      });
    },
    pageMenu: () => {
      return resolver[pageMenuActions.ADD_ITEM](state, {
        type: pageMenuActions.ADD_ITEM,
        entity: entity,
        payload: { entityId, itemId }
      });
    },
    allergenic: () => {
      return resolver[allergenicActions.ADD](state, {
        type: allergenicActions.ADD,
        entity: entity,
        payload: { entityId, itemId }
      });
    },
    screensaver: () => {
      if (addToList === 'selectableItems') {
        return resolver[screensaverActions.ADD_SELECTABLE_SLIDE](state, {
          type: screensaverActions.ADD_SELECTABLE_SLIDE,
          entity: 'selectableSlides',
          payload: { itemId }
        });
      }

      return resolver[screensaverActions.ADD_SLIDE](state, {
        type: screensaverActions.ADD_SLIDE,
        entity: 'slides',
        payload: { itemId }
      });
    },
    slide: () => {
      if (addToList === 'images') {
        return resolver[slideActions.ADD_IMAGE](state, {
          type: slideActions.ADD_IMAGE,
          entity: entity,
          payload: { id: itemId, entityId }
        });
      }
      return state;
    },
    item: () => {
      if (addToList === 'images') {
        return resolver[itemActions.ADD_IMAGE](state, {
          type: itemActions.ADD_IMAGE,
          entity: entity,
          payload: { id: itemId, entityId }
        });
      }
      return state;
    }
  };

  return _add[entity]();
};

export const reorder = (
  state: State,
  { entity, entityId, from, to }: ReorderProps
) => {
  const resolver = resolvers(entity);

  const _reorder: { [key: string]: () => State } = {
    list: () => {
      return resolver[listActions.REORDER_ITEMS](state, {
        type: listActions.REORDER_ITEMS,
        entity: entity,
        payload: { entityId, from, to }
      });
    },
    pageMenu: () => {
      return resolver[pageMenuActions.REORDER_ITEMS](state, {
        type: pageMenuActions.REORDER_ITEMS,
        entity: entity,
        payload: { entityId, from, to }
      });
    },
    allergenic: () => {
      return resolver[allergenicActions.REORDER](state, {
        type: allergenicActions.REORDER,
        entity: entity,
        payload: { entityId, from, to }
      });
    },
    screensaver: () => {
      return resolver[screensaverActions.REORDER_SLIDES](state, {
        type: screensaverActions.REORDER_SLIDES,
        entity: entity,
        payload: { from, to }
      });
    }
  };

  return _reorder[entity]();
};

export const remove = (
  state: State,
  { action, entity, entityId, itemId, items }: RemoveProps
) => {
  const resolver = resolvers(entity);

  if (action === 'one') {
    const _remove: { [key: string]: () => State } = {
      list: () => {
        return resolver[listActions.REMOVE_ITEM](state, {
          type: listActions.REMOVE_ITEM,
          entity: entity,
          payload: { entityId, itemId }
        });
      },
      pageMenu: () => {
        return resolver[pageMenuActions.REMOVE_ITEM](state, {
          type: pageMenuActions.REMOVE_ITEM,
          entity: entity,
          payload: { entityId, itemId }
        });
      },
      allergenic: () => {
        return resolver[pageMenuActions.REMOVE_ITEM](state, {
          type: allergenicActions.REMOVE,
          entity: entity,
          payload: { entityId, itemId }
        });
      },
      slide: () => {
        return resolver[screensaverActions.REMOVE_SLIDE](state, {
          type: screensaverActions.REMOVE_SLIDE,
          entity: entity,
          payload: { itemId }
        });
      }
    };

    return _remove[entity]();
  } else {
    const removeAll: { [key: string]: () => State } = {
      list: () => {
        return resolver[listActions.REMOVE_ALL_ITEMS](state, {
          type: listActions.REMOVE_ALL_ITEMS,
          entity: entity,
          payload: { entityId, items }
        });
      },
      pageMenu: () => {
        return resolver[listActions.REMOVE_ALL_ITEMS](state, {
          type: pageMenuActions.REMOVE_ALL_ITEMS,
          entity: entity,
          payload: { entityId, items }
        });
      },
      allergenic: () => {
        return resolver[allergenicActions.REMOVE_ALL](state, {
          type: allergenicActions.REMOVE_ALL,
          entity: entity,
          payload: { entityId, items }
        });
      }
    };

    return removeAll[entity]();
  }
};

// Set field

export const set = (state: State, { action, info, entity, id }: SetProps) => {
  const resolver = resolvers(entity);
  if (action === 'show') {
    if (info === 'item') {
      const _set: { [key: string]: () => State } = {
        list: () => {
          return resolver[listActions.SET_SHOW](state, {
            type: listActions.SET_SHOW,
            payload: id,
            entity: entity
          });
        },
        pageMenuItem: () => {
          return resolver[pageMenuItemActions.SET_SHOW](state, {
            type: pageMenuItemActions.SET_SHOW,
            payload: id,
            entity: entity
          });
        },
        listItem: () => {
          return resolver[listItemActions.SET_SHOW](state, {
            type: listItemActions.SET_SHOW,
            payload: id,
            entity: entity
          });
        }
      };

      return _set[entity]();
    } else if (info === 'title') {
      const _set: { [key: string]: () => State } = {
        list: () => {
          return resolver[listActions.SET_SHOW_TITLE](state, {
            type: listActions.SET_SHOW_TITLE,
            payload: id,
            entity: entity
          });
        },
        listItem: () => {
          return resolver[listItemActions.SET_SHOW_TITLE](state, {
            type: listItemActions.SET_SHOW_TITLE,
            payload: id,
            entity: entity
          });
        },
        pageMenuItem: () => {
          return resolver[pageMenuItemActions.SET_SHOW_TITLE](state, {
            type: pageMenuItemActions.SET_SHOW_TITLE,
            payload: id,
            entity: entity
          });
        }
      };

      return _set[entity]();
    } else if (info === 'description') {
      const _set: { [key: string]: () => State } = {
        list: () => {
          return resolver[listActions.SET_SHOW_DESCRIPTION](state, {
            type: listActions.SET_SHOW_DESCRIPTION,
            payload: id,
            entity: entity
          });
        },
        listItem: () => {
          return resolver[listItemActions.SET_SHOW_DESCRIPTION](state, {
            type: listItemActions.SET_SHOW_DESCRIPTION,
            payload: id,
            entity: entity
          });
        },
        pageMenuItem: () => {
          return resolver[pageMenuItemActions.SET_SHOW_DESCRIPTION](state, {
            type: pageMenuItemActions.SET_SHOW_DESCRIPTION,
            payload: id,
            entity: entity
          });
        }
      };

      return _set[entity]();
    } else if (info === 'extra-info') {
      const _set: { [key: string]: () => State } = {
        list: () => {
          return resolver[listActions.SET_SHOW_EXTRA_INFO](state, {
            type: listActions.SET_SHOW_EXTRA_INFO,
            payload: id,
            entity: entity
          });
        },
        listItem: () => {
          return resolver[listItemActions.SET_SHOW_EXTRA_INFO](state, {
            type: listItemActions.SET_SHOW_EXTRA_INFO,
            payload: id,
            entity: entity
          });
        },
        pageMenuItem: () => {
          return resolver[pageMenuItemActions.SET_SHOW_EXTRA_INFO](state, {
            type: pageMenuItemActions.SET_SHOW_EXTRA_INFO,
            payload: id,
            entity: entity
          });
        }
      };

      return _set[entity]();
    } else if (info === 'price') {
      const _set: { [key: string]: () => State } = {
        listItem: () => {
          return resolver[listItemActions.SET_SHOW_PRICE](state, {
            type: listItemActions.SET_SHOW_PRICE,
            payload: id,
            entity: entity
          });
        }
      };

      return _set[entity]();
    } else if (info === 'item-detail') {
      return resolver[listItemActions.SET_SHOW_ITEM_DETAIL](state, {
        type: listItemActions.SET_SHOW_ITEM_DETAIL,
        payload: id,
        entity: entity
      });
    }
  } else if (action === 'active') {
    const _set: { [key: string]: () => State } = {
      item: () => {
        return resolver[itemActions.SET_ACTIVE](state, {
          type: itemActions.SET_ACTIVE,
          payload: id,
          entity: entity
        });
      },
      category: () => {
        return resolver[categoryActions.SET_ACTIVE](state, {
          type: categoryActions.SET_ACTIVE,
          payload: id,
          entity: entity
        });
      }
    };

    return _set[entity]();
  }
};

// CRUD

export const create = (
  state: State,
  { entity, payload, addToResource, entityId }: CreateProps
) => {
  const resolver = resolvers(entity);
  const { displayInfo, lang, image } = payload;
  const { slug }: DisplayInfo = displayInfo[lang];
  const id = `${entity}->${addToResource}->${slug}->${uid.generate()}`;

  const _create: { [key: string]: () => State } = {
    slide: () => {
      return resolver[slideActions.CREATE_SLIDE](state, {
        type: slideActions.CREATE_SLIDE,
        entity: addToResource,
        payload: { id, displayInfo }
      });
    },
    image: () => {
      return resolver[imageActions.CREATE](state, {
        type: imageActions.CREATE,
        entity: entity,
        payload: { id, displayInfo, lang, image }
      });
    }
  };

  return _create[entity]();
};

export const update = (
  state: State,
  { field, entity, payload }: UpdateProps
) => {
  const resolver = resolvers(entity);

  if (field === 'info') {
    const _update: { [key: string]: () => State } = {
      item: () => {
        return resolver[itemActions.UPDATE_DISPLAY_INFO](state, {
          type: itemActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          payload: payload as NewDisplayInfo
        });
      },
      category: () => {
        return resolver[categoryActions.UPDATE_DISPLAY_INFO](state, {
          type: categoryActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          payload: payload as NewDisplayInfo
        });
      },
      list: () => {
        return resolver[listActions.UPDATE_DISPLAY_INFO](state, {
          type: listActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          payload: payload as NewDisplayInfo
        });
      },
      pageMenu: () => {
        return resolver[pageMenuActions.UPDATE_DISPLAY_INFO](state, {
          type: pageMenuActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          payload: payload as NewDisplayInfo
        });
      },
      slide: () => {
        return resolver[slideActions.UPDATE_DISPLAY_INFO](state, {
          type: slideActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          payload: payload as NewDisplayInfo
        });
      }
    };

    return _update[entity]();
  } else if (field === 'price') {
    return resolver[itemActions.UPDATE_ITEM_PRICE](state, {
      type: itemActions.UPDATE_ITEM_PRICE,
      entity: entity,
      payload: payload as NewPrice
    });
  } else if (field === 'itemVariantPrice') {
    return resolver[itemActions.UPDATE_ITEM_VARIANT_PRICE](state, {
      type: itemActions.UPDATE_ITEM_VARIANT_PRICE,
      entity: entity,
      payload: payload as NewVariantPrice
    });
  } else if (field === 'number') {
    return resolver[itemActions.UPDATE_ITEM_NUMBER](state, {
      type: itemActions.UPDATE_ITEM_NUMBER,
      entity: entity,
      payload: payload as NewNumber
    });
  } else if (field === 'image') {
    const _set: { [key: string]: () => State } = {
      slide: () => {
        return resolver[slideActions.SET_MAIN_IMAGE](state, {
          type: slideActions.SET_MAIN_IMAGE,
          payload: payload as NewMainImage,
          entity: entity
        });
      },
      item: () => {
        return resolver[itemActions.SET_MAIN_IMAGE](state, {
          type: itemActions.SET_MAIN_IMAGE,
          payload: payload as NewMainImage,
          entity: entity
        });
      }
    };
    return _set[entity]();
  }
};

export default {
  add,
  reorder,
  remove,
  set,
  create,
  update
};
