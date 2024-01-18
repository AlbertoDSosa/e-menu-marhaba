import { Dictionary } from 'definitions/dataContext';
import { categories } from './categories';
import { images } from './images';
import { items } from './items';
import { listItems } from './listItems';
import { lists } from './lists';
import { pageMenus, pageMenuItems } from './menus';
import { slides } from './slides';
import { systemData } from './system';
import { allergens } from './allergens';
import { languages } from './languages';
import { modals } from './modals';
import { templates } from './templates';
import { variants } from './variants';
import { pages } from './pages';
import { sections } from './sections';

type InitialData = {
  generalInfo: Dictionary;
  screensaver: Dictionary;
  categories: Dictionary;
  images: Dictionary;
  items: Dictionary;
  listItems: Dictionary;
  lists: Dictionary;
  pageMenus: Dictionary;
  pageMenuItems: Dictionary;
  slides: Dictionary;
  allergens: Dictionary;
  languages: Dictionary;
  modals: Dictionary;
  templates: Dictionary;
  variants: Dictionary;
  pages: Dictionary;
  sections: Dictionary;
};

const initialData: InitialData = {
  generalInfo: systemData.generalInfo,
  screensaver: systemData.screensaver,
  categories,
  images,
  items,
  listItems,
  lists,
  pageMenus,
  pageMenuItems,
  slides,
  allergens,
  languages,
  modals,
  templates,
  variants,
  pages,
  sections
};
export default initialData;
