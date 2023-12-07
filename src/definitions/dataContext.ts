import {
  DisplayInfo,
  Price,
  Category,
  List,
  Item,
  Allergenic,
  Modal,
  Slide,
  PageSection
} from 'definitions/models';

export type StateColletion =
  | 'lists'
  | 'items'
  | 'categories'
  | 'listItems'
  | 'pageMenus'
  | 'pageMenuItems'
  | 'images'
  | 'slides'
  | 'generalInfo'
  | 'screensaver';

export type SystemCollection =
  | 'images'
  | 'languages'
  | 'variants'
  | 'allergens'
  | 'templates'
  | 'modals'
  | 'pages'
  | 'pageSections';

export type UpdateDisplayInfoEntity =
  | 'item'
  | 'category'
  | 'list'
  | 'pageMenu'
  | 'listItem'
  | 'pageMenuItem';

export type EditItemEntity = 'list' | 'pageMenu' | 'allergenic';

export type ReorderItems = {
  entityId: string;
  from: number;
  to: number;
};

export type EditItem = {
  entityId: string;
  itemId: string;
};

export type DeleteAllItems = {
  entityId: string;
  items: Array<string>;
};

export type Dictionary = {
  [key: string]: any;
};

export type Results = {
  collection: Dictionary[];
  dictionary: Dictionary;
};

export type DisplayInfoEntity =
  | Category
  | List
  | Item
  | Allergenic
  | Modal
  | Slide;

export type EditImageEntity =
  | PageSection
  | Slide
  | Item
  | List
  | Modal
  | Allergenic;

export type NewPrice = {
  id: string;
  price: Price;
};

export type NewVariantPrice = {
  itemId: string;
  variantId: string;
  price: Price;
};

export type NewNumber = {
  id: string;
  number: string;
};

export type NewDisplayInfo = {
  id: string;
  displayInfo: DisplayInfo;
  lang: string;
};

export type NewMainImage = {
  id: string;
  entityId: string;
};

export type EditImageCollection =
  | 'slides'
  | 'sections'
  | 'lists'
  | 'items'
  | 'pageMenuItems'
  | 'modals';

export interface GetDataProps {
  collection: SystemCollection | StateColletion;
  from: 'system' | 'state';
}

export type SetEntity =
  | 'item'
  | 'list'
  | 'pageMenu'
  | 'listItem'
  | 'pageMenuItem'
  | 'slide';

export interface SetProps {
  action: 'show' | 'active';
  info: 'item' | 'price' | 'title' | 'description' | 'extra-info';
  entity: SetEntity;
  id: string;
}

export type ArrayEditEntity =
  | 'list'
  | 'slide'
  | 'images'
  | 'pageMenu'
  | 'allergenic'
  | 'screensaver';

export interface AddProps {
  entity: ArrayEditEntity;
  entityId: string;
  itemId?: string;
}

export interface ReorderProps {
  entity: ArrayEditEntity;
  entityId: string;
  from: number;
  to: number;
}

export interface RemoveProps {
  action: 'one' | 'many';
  entity: ArrayEditEntity;
  entityId: string;
  itemId?: string;
  items?: string[];
}

export type AddToEntityItem = 'screensaver' | 'slide' | 'item';

export interface CreateProps {
  collection: 'slides' | 'images';
  entity: 'slide' | 'image';
  addToEntity: AddToEntityItem;
  entityId?: string;
  payload: {
    lang: string;
    image?: string;
    displayInfo: { [key: string]: DisplayInfo };
  };
}

export type UpdateEntity =
  | 'item'
  | 'category'
  | 'list'
  | 'pageMenu'
  | 'listItem'
  | 'pageMenuItem'
  | 'screensaver'
  | 'generalInfo'
  | 'slide'
  | 'image';

export interface UpdateProps {
  field: 'info' | 'price' | 'itemVariantPrice' | 'number' | 'image';
  entity: UpdateEntity;
  payload:
    | NewDisplayInfo
    | NewNumber
    | NewPrice
    | NewVariantPrice
    | NewMainImage;
}

export interface DeleteProps {
  entity:
    | 'item'
    | 'category'
    | 'list'
    | 'pageMenu'
    | 'listItem'
    | 'pageMenuItem'
    | 'slide'
    | 'image';
  id: string;
}
