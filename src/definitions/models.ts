import {
  Configurable,
  ShowableInfo,
  Listable,
  Stylable,
  Imaginable,
  Allergenable,
  Variantable
} from './avilables';

export interface DisplayInfo {
  title: string;
  slug: string;
  extraInfo?: string;
  description?: string;
}
export interface Callable {
  displayInfo: {
    [key: string]: DisplayInfo;
  };
}

export interface GeneralInfo extends Imaginable, Callable {
  companyName: string;
  url: string;
  dataVersion: string;
  baseLanguage: string;
  appLanguages: Array<string>;
}

export interface AppType extends Configurable, Callable {}

export interface Language extends Imaginable {
  id: string;
  title: {
    [key: string]: string;
  };
  webUrl: string;
}

export interface Image {
  id: string;
  thumbnail: {
    src: string;
    title: string;
    size?: {
      width: number;
      height: number;
    };
  };
  full: {
    src: string;
    title: string;
    size?: {
      width: number;
      height: number;
    };
  };
}

export interface Category extends Configurable, Callable {
  items: Array<string>;
}

export interface ProductCategory extends Category, Variantable {
  type: 'product';
  hasGroupPrice?: boolean;
  price?: Price;
}

export interface InfoCategory extends Category, Variantable {
  type: 'info';
}

export interface Item extends Configurable, Callable, Imaginable {}
export interface Price {
  amount: string;
  currency?: string;
}

export interface Product extends Item, Allergenable, Variantable {
  type: 'product';
  number: string;
  price: Price;
  itemVariantPrices?: {
    [key: string]: Price;
  };
}

export interface Info extends Item, Variantable {
  type: 'info';
  itemVariantInfo?: {
    [key: string]: string;
  };
}

export interface Menu extends Item {
  type: 'menu';
}

export interface List
  extends Category,
    Listable,
    ShowableInfo,
    Stylable,
    Imaginable {}

export interface ProductList extends List, Variantable {
  type: 'product';
}

export interface InfoList extends List, Variantable {
  type: 'info';
}

export interface ListItem extends Configurable, ShowableInfo, Stylable {
  itemId: string;
}

export interface ProductListItem extends ListItem {
  type: 'product';
  showPrice: boolean;
  showItemDetail: boolean;
}

export interface InfoListItem extends ListItem {
  type: 'info';
}

export interface PageMenu extends List {
  type: 'menu';
}

export interface PageMenuItem extends ListItem {
  href: string;
  isModalMode: boolean;
  isSubMenu: boolean;
  page: string;
  modal: string;
  hasSubMenu: boolean;
  subMenu: string;
}

/// Variants
export interface Variants extends Configurable, Callable {
  itemVariants: {
    [key: string]: ItemVariant;
  };
}

export interface ItemVariant extends Configurable, Callable {}

/// Styles

export interface Styles {}

export interface PageStyles extends Styles {
  title?: {
    textJustify: 'start' | 'center' | 'end';
  };
  grid: {
    width: string;
    height: string;
  };
  row1?: {
    width: string;
    height?: string;
  };
  row2?: {
    width: string;
    height?: string;
  };
  col1?: {
    size: string;
    height?: string;
  };
  col2?: {
    size: string;
    height?: string;
  };
}
export interface MenuStyles extends Styles {}
export interface SectionStyles extends Styles {
  title?: {
    textJustify: 'start' | 'center' | 'end';
  };
  grid?: {
    width: string;
    height: string;
    padding?: string;
  };
  row?: {
    width: string;
    height: string;
  };
  list?: {
    rowWidth?: string;
    rowHeight?: string;
    colSize?: string;
    colHeight?: string;
  };
  img?: {
    rowWidth?: string;
    rowHeight?: string;
    colSize?: string;
    colHeight?: string;
  };
}
export interface ListStyles extends Styles {
  itemIcon: {
    colSize: string;
  };
  itemTitle: {
    colSize: string;
    textJustify: 'start' | 'center' | 'end';
  };
  productLine?: {
    colSize: string;
  };
  productPrice?: {
    colSize: string;
  };
}
export interface ModalStyles extends Styles {}

/// Templates
export interface Template extends Configurable, Callable {
  styles: ListStyles | MenuStyles | SectionStyles | PageStyles;
  type: 'page' | 'list' | 'section' | 'menu' | 'modal';
}

export interface PageTemplate extends Template {
  styles: PageStyles;
  type: 'page';
}
export interface MenuTemplate extends Template {
  styles: MenuStyles;
  type: 'menu';
}
export interface SectionTemplate extends Template {
  styles: SectionStyles;
  type: 'section';
}
export interface ListTemplate extends Template {
  styles: ListStyles;
  type: 'list';
}

export interface ModalTemplate extends Template {
  styles: ModalStyles;
  type: 'modal';
}

export interface Page extends Configurable, Callable, Imaginable, Stylable {
  isPolySection: boolean;
  menuId: string;
  sections: Array<string>;
  menus?: Array<string>;
}

/// Sections
export interface PageSection
  extends Configurable,
    Callable,
    ShowableInfo,
    Imaginable,
    Stylable {
  number: string;
  lists: Array<string>;
  listItemsForCol: number;
}

export interface Modal
  extends Configurable,
    Callable,
    Stylable,
    ShowableInfo,
    Imaginable {}

export interface Slide extends Configurable, Callable, Stylable, Imaginable {}
export interface ListModal extends Modal {
  type: 'modal';
  lists: Array<string>;
}

export interface DetailModal extends Modal {}

export interface Allergens extends List {}
export interface Allergenic extends Item {
  type: 'allergenic';
}
