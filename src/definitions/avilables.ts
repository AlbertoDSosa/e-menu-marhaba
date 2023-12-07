export interface Configurable {
  id: string;
  active: boolean;
  type: string;
}

export interface ShowableInfo {
  show: boolean;
  showDescription: boolean;
  showExtraInfo: boolean;
  showTitle: boolean;
}

export interface Listable {
  maxItems: number;
  editable: boolean;
  sortable: boolean;
  selectableItems: Array<string>;
  categories: Array<string>;
}

export interface Stylable {
  template: string;
}

export interface Imaginable {
  defaultImg: string;
  qrImg?: string;
  backgroundImg?: string;
  mainImg: string;
  images?: Array<string>;
  showImg?: boolean;
}

export interface Allergenable {
  selectableAllergens?: Array<string>;
  showAllergens?: boolean;
  hasAllergens: boolean;
  allergens?: Array<string>;
}

export interface Variantable {
  hasVariants: boolean;
  showVariants?: boolean;
  variants?: string;
}
