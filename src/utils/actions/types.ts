export const SET_LOADED_STATE = 'init->setloadState';

export enum categoryActions {
  UPDATE_DISPLAY_INFO = 'category->updateDisplayInfo',
  SET_ACTIVE = 'category->setActive'
}

export enum itemActions {
  UPDATE_ITEM_PRICE = 'item->updatePrice',
  UPDATE_ITEM_VARIANT_PRICE = 'item->updateItemVariantPrice',
  UPDATE_ITEM_NUMBER = 'item->updateNumber',
  UPDATE_DISPLAY_INFO = 'item->updateDisplayInfo',
  SET_ACTIVE = 'item->setActive',
  ADD_IMAGE = 'item->addImage',
  SET_MAIN_IMAGE = 'item->setMainImage'
}

export enum listActions {
  UPDATE_DISPLAY_INFO = 'list->updateDisplayInfo',
  SET_SHOW = 'list->setShow',
  SET_SHOW_TITLE = 'list->setShowTitle',
  SET_SHOW_EXTRA_INFO = 'list->setShowExtraInfo',
  SET_SHOW_DESCRIPTION = 'list->setShowDescription',
  REORDER_ITEMS = 'list->reorderItems',
  ADD_ITEM = 'list->addItem',
  REMOVE_ITEM = 'list->deleteItem',
  REMOVE_ALL_ITEMS = 'list->deleteAllItems'
}

export enum listItemActions {
  SET_SHOW = 'listItem->setShow',
  SET_SHOW_PRICE = 'listItem->setShowPrice',
  SET_SHOW_TITLE = 'listItem->setShowTitle',
  SET_SHOW_EXTRA_INFO = 'listItem->setShowExtraInfo',
  SET_SHOW_DESCRIPTION = 'listItem->setShowDescription',
  SET_SHOW_ITEM_DETAIL = 'listItem->setShowItemDetail'
}

export enum pageMenuActions {
  UPDATE_DISPLAY_INFO = 'pageMenu->updateDisplayInfo',
  REORDER_ITEMS = 'pageMenu->reorderItems',
  ADD_ITEM = 'pageMenu->addItem',
  REMOVE_ITEM = 'pageMenu->deleteItem',
  REMOVE_ALL_ITEMS = 'pageMenu->deleteAllItems'
}

export enum pageMenuItemActions {
  SET_SHOW = 'pageMenuItem->setShow',
  SET_SHOW_TITLE = 'pageMenuItem->setShowTitle',
  SET_SHOW_EXTRA_INFO = 'pageMenuItem->setShowExtraInfo',
  SET_SHOW_DESCRIPTION = 'pageMenuItem->setShowDescription'
}

export enum allergenicActions {
  REORDER = 'allergenic->reorder',
  ADD = 'allergenic->add',
  REMOVE = 'allergenic->remove',
  REMOVE_ALL = 'allergenic->removeAll'
}

export enum screensaverActions {
  ADD_SELECTABLE_SLIDE = 'screensaver->addSelectableSlide',
  ADD_SLIDE = 'screensaver->addSlide',
  REMOVE_SLIDE = 'screensaver->removeSlide',
  REORDER_SLIDES = 'screensaver->reorderSlides'
}

export enum slideActions {
  CREATE_SLIDE = 'slide->create',
  UPDATE_DISPLAY_INFO = 'slide->updateDisplayInfo',
  DELETE_SLIDE = 'slide->delete',
  ADD_IMAGE = 'slide->addImage',
  SET_MAIN_IMAGE = 'slide->setMainImage'
}

export enum imageActions {
  CREATE = 'image->create',
  DELETE = 'image->delete',
  UPDATE = 'image->update'
}
