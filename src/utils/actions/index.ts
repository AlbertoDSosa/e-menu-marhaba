import { Dispatch } from 'react';
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

import { DisplayInfo } from 'definitions/models';

export const add = (
  dispatch: Dispatch<any>,
  { entity, entityId, itemId }: AddProps
) => {
  const _add: { [key: string]: () => void } = {
    list: () => {
      dispatch({
        type: listActions.ADD_ITEM,
        entity: entity,
        collection: 'lists',
        payload: { entityId, itemId }
      });
    },
    pageMenu: () => {
      dispatch({
        type: pageMenuActions.ADD_ITEM,
        entity: entity,
        collection: 'pageMenus',
        payload: { entityId, itemId }
      });
    },
    allergenic: () => {
      dispatch({
        type: allergenicActions.ADD,
        entity: entity,
        collection: 'items',
        payload: { entityId, itemId }
      });
    },
    screensaver: () => {
      dispatch({
        type: screensaverActions.ADD_SLIDE,
        entity: entity,
        collection: 'slides',
        payload: { itemId }
      });
    },
    slide: () => {
      dispatch({
        type: slideActions.ADD_IMAGE,
        entity: entity,
        collection: 'slides',
        payload: { itemId }
      });
    }
  };

  _add[entity]();
};

export const reorder = (
  dispatch: Dispatch<any>,
  { entity, entityId, from, to }: ReorderProps
) => {
  const _reorder: { [key: string]: () => void } = {
    list: () => {
      dispatch({
        type: listActions.REORDER_ITEMS,
        entity: entity,
        collection: 'lists',
        payload: { entityId, from, to }
      });
    },
    pageMenu: () => {
      dispatch({
        type: pageMenuActions.REORDER_ITEMS,
        entity: entity,
        collection: 'pageMenus',
        payload: { entityId, from, to }
      });
    },
    allergenic: () => {
      dispatch({
        type: allergenicActions.REORDER,
        entity: entity,
        collection: 'items',
        payload: { entityId, from, to }
      });
    },
    screensaver: () => {
      dispatch({
        type: screensaverActions.REORDER_SLIDES,
        entity: entity,
        collection: 'slides',
        payload: { from, to }
      });
    }
  };

  _reorder[entity]();
};

export const remove = (
  dispatch: Dispatch<any>,
  { action, entity, entityId, itemId, items }: RemoveProps
) => {
  if (action === 'one') {
    const _remove: { [key: string]: () => void } = {
      list: () => {
        dispatch({
          type: listActions.REMOVE_ITEM,
          entity: entity,
          collection: 'lists',
          payload: { entityId, itemId }
        });
      },
      pageMenu: () => {
        dispatch({
          type: pageMenuActions.REMOVE_ITEM,
          entity: entity,
          collection: 'pageMenus',
          payload: { entityId, itemId }
        });
      },
      allergenic: () => {
        dispatch({
          type: allergenicActions.REMOVE,
          entity: entity,
          collection: 'items',
          payload: { entityId, itemId }
        });
      },
      slide: () => {
        dispatch({
          type: screensaverActions.REMOVE_SLIDE,
          entity: entity,
          collection: 'screensaver',
          payload: { itemId }
        });
      }
    };

    _remove[entity]();
  } else {
    const removeAll: { [key: string]: () => void } = {
      list: () => {
        dispatch({
          type: listActions.REMOVE_ALL_ITEMS,
          entity: entity,
          collection: 'lists',
          payload: { entityId, items }
        });
      },
      pageMenu: () => {
        dispatch({
          type: pageMenuActions.REMOVE_ALL_ITEMS,
          entity: entity,
          collection: 'pageMenus',
          payload: { entityId, items }
        });
      },
      allergenic: () => {
        dispatch({
          type: allergenicActions.REMOVE_ALL,
          entity: entity,
          collection: 'items',
          payload: { entityId, items }
        });
      }
    };

    removeAll[entity]();
  }
};

// Set field

export const set = (
  dispatch: Dispatch<any>,
  { action, info, entity, id }: SetProps
) => {
  if (action === 'show') {
    if (info === 'item') {
      const _set: { [key: string]: () => void } = {
        list: () => {
          dispatch({
            type: listActions.SET_SHOW,
            payload: id,
            entity: entity,
            collection: 'lists'
          });
        },
        pageMenuItem: () => {
          dispatch({
            type: pageMenuItemActions.SET_SHOW,
            payload: id,
            entity: entity,
            collection: 'pageMenuItems'
          });
        },
        listItem: () => {
          dispatch({
            type: listItemActions.SET_SHOW,
            payload: id,
            entity: entity,
            collection: 'listItems'
          });
        }
      };

      _set[entity]();
    } else if (info === 'title') {
      const _set: { [key: string]: () => void } = {
        list: () => {
          dispatch({
            type: listActions.SET_SHOW_TITLE,
            payload: id,
            entity: entity,
            collection: 'lists'
          });
        },
        listItem: () => {
          dispatch({
            type: listItemActions.SET_SHOW_TITLE,
            payload: id,
            entity: entity,
            collection: 'listItems'
          });
        },
        pageMenuItem: () => {
          dispatch({
            type: pageMenuItemActions.SET_SHOW_TITLE,
            payload: id,
            entity: entity,
            collection: 'pageMenuItems'
          });
        }
      };

      _set[entity]();
    } else if (info === 'description') {
      const _set: { [key: string]: () => void } = {
        list: () => {
          dispatch({
            type: listActions.SET_SHOW_DESCRIPTION,
            payload: id,
            entity: entity,
            collection: 'lists'
          });
        },
        listItem: () => {
          dispatch({
            type: listItemActions.SET_SHOW_DESCRIPTION,
            payload: id,
            entity: entity,
            collection: 'listItems'
          });
        },
        pageMenuItem: () => {
          dispatch({
            type: pageMenuItemActions.SET_SHOW_DESCRIPTION,
            payload: id,
            entity: entity,
            collection: 'pageMenuItems'
          });
        }
      };

      _set[entity]();
    } else if (info === 'extra-info') {
      const _set: { [key: string]: () => void } = {
        list: () => {
          dispatch({
            type: listActions.SET_SHOW_EXTRA_INFO,
            payload: id,
            entity: entity,
            collection: 'lists'
          });
        },
        listItem: () => {
          dispatch({
            type: listItemActions.SET_SHOW_EXTRA_INFO,
            payload: id,
            entity: entity,
            collection: 'listItems'
          });
        },
        pageMenuItem: () => {
          dispatch({
            type: pageMenuItemActions.SET_SHOW_EXTRA_INFO,
            payload: id,
            entity: entity,
            collection: 'pageMenuItems'
          });
        }
      };

      _set[entity]();
    } else if (info === 'price') {
      const update: { [key: string]: () => void } = {
        listItem: () => {
          dispatch({
            type: listItemActions.SET_SHOW_PRICE,
            payload: id,
            entity: entity,
            collection: 'listItems'
          });
        }
      };

      update[entity]();
    }
  } else if (action === 'active') {
    const _set: { [key: string]: () => void } = {
      item: () => {
        dispatch({
          type: itemActions.SET_ACTIVE,
          payload: id,
          entity: entity,
          collection: 'items'
        });
      },
      category: () => {
        dispatch({
          type: categoryActions.SET_ACTIVE,
          payload: id,
          entity: entity,
          collection: 'categories'
        });
      }
    };

    _set[entity]();
  }
};

// CRUD

export const create = (
  dispatch: Dispatch<any>,
  { collection, entity, payload, addToEntity, entityId }: CreateProps
) => {
  const { displayInfo, lang, image } = payload;
  const { slug }: DisplayInfo = displayInfo[lang];
  const id = `${entity}->${addToEntity}->${slug}->${uid.generate()}`;
  const _create: { [key: string]: () => void } = {
    slide: () => {
      dispatch({
        type: slideActions.CREATE_SLIDE,
        entity: addToEntity,
        payload: { id, displayInfo },
        collection
      });

      if (addToEntity === 'screensaver') {
        dispatch({
          type: screensaverActions.ADD_SELECTABLE_SLIDE,
          entity: addToEntity,
          payload: { id, displayInfo },
          collection
        });
      }
    },
    image: () => {
      dispatch({
        type: imageActions.CREATE,
        entity: addToEntity,
        payload: { id, displayInfo, lang, image },
        collection
      });

      if (addToEntity === 'slide') {
        dispatch({
          type: slideActions.ADD_IMAGE,
          entity: addToEntity,
          payload: { id, entityId },
          collection
        });
      }
      if (addToEntity === 'item') {
        dispatch({
          type: itemActions.ADD_IMAGE,
          entity: addToEntity,
          payload: { id, entityId },
          collection
        });
      }
    }
  };
  _create[entity]();
};

export const update = (
  dispatch: Dispatch<any>,
  { field, entity, payload }: UpdateProps
) => {
  if (field === 'info') {
    const _update: { [key: string]: () => void } = {
      item: () => {
        dispatch({
          type: itemActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          collection: 'items',
          payload: payload as NewDisplayInfo
        });
      },
      category: () => {
        dispatch({
          type: categoryActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          collection: 'categories',
          payload: payload as NewDisplayInfo
        });
      },
      list: () => {
        dispatch({
          type: listActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          collection: 'lists',
          payload: payload as NewDisplayInfo
        });
      },
      pageMenu: () => {
        dispatch({
          type: pageMenuActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          collection: 'pageMenus',
          payload: payload as NewDisplayInfo
        });
      },
      slide: () => {
        dispatch({
          type: slideActions.UPDATE_DISPLAY_INFO,
          entity: entity,
          collection: 'slides',
          payload: payload as NewDisplayInfo
        });
      }
    };

    _update[entity]();
  } else if (field === 'price') {
    dispatch({
      type: itemActions.UPDATE_ITEM_PRICE,
      payload: payload as NewPrice
    });
  } else if (field === 'itemVariantPrice') {
    dispatch({
      type: itemActions.UPDATE_ITEM_VARIANT_PRICE,
      payload: payload as NewVariantPrice
    });
  } else if (field === 'number') {
    dispatch({
      type: itemActions.UPDATE_ITEM_NUMBER,
      payload: payload as NewNumber
    });
  } else if (field === 'image') {
    const _set: { [key: string]: () => void } = {
      slide: () => {
        dispatch({
          type: slideActions.SET_MAIN_IMAGE,
          payload: payload as NewMainImage,
          entity: entity,
          collection: 'slides'
        });
      },
      item: () => {
        dispatch({
          type: itemActions.SET_MAIN_IMAGE,
          payload: payload as NewMainImage,
          entity: entity,
          collection: 'items'
        });
      }
    };
    _set[entity]();
  }
};

export const destroy = () => {};

export const softDelete = () => {};
