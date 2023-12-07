import { categories } from './categories';
import { images } from './images';
import { items } from './items';
import { listItems } from './listItems';
import { lists } from './lists';
import { pageMenus, pageMenuItems } from './menus';
import { slides } from './slides';
import { systemData } from './system';

const initialData = {
  generalInfo: systemData.generalInfo,
  screensaver: systemData.screensaver,
  categories,
  images,
  items,
  listItems,
  lists,
  pageMenus,
  pageMenuItems,
  slides
};
export default initialData;
