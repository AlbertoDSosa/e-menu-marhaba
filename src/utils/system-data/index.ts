import { allergens as systemAllergens } from './allergens';
import { languages as systemLanguages } from './languages';
import { modals as systemModals } from './modals';
import { templates as systemTemplates } from './templates';
import { variants as systemVariants } from './variants';

import { pages as systemPages } from './pages';
import { sections as systemSections } from './sections';

export const allergens = systemAllergens;
export const languages = systemLanguages;
export const modals = systemModals;
export const templates = systemTemplates;
export const variants = systemVariants;

export const pages = systemPages;
export const pageSections = systemSections;

const systemData = {
  allergens,
  languages,
  modals,
  templates,
  variants,
  pages,
  pageSections
};
export default systemData;
