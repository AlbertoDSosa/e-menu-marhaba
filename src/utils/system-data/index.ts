import { allergens as systemAllergens } from '../initial-data/allergens';
import { languages as systemLanguages } from '../initial-data/languages';
import { modals as systemModals } from '../initial-data/modals';
import { templates as systemTemplates } from '../initial-data/templates';
import { variants as systemVariants } from '../initial-data/variants';

import { pages as systemPages } from '../initial-data/pages';
import { sections as systemSections } from '../initial-data/sections';
import { Dictionary } from 'definitions/dataContext';

export const allergens = systemAllergens;
export const languages = systemLanguages;
export const modals = systemModals;
export const templates = systemTemplates;
export const variants = systemVariants;

export const pages = systemPages;
export const pageSections = systemSections;

type SystemData = {
  allergens: Dictionary;
  languages: Dictionary;
  modals: Dictionary;
  templates: Dictionary;
  variants: Dictionary;
  pages: Dictionary;
  pageSections: Dictionary;
};

const systemData: SystemData = {
  allergens,
  languages,
  modals,
  templates,
  variants,
  pages,
  pageSections
};
export default systemData;
