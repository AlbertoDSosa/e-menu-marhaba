import OneRowTwoCols from './OneRowTwoCols';
import SingleSection from './SingleSection';
import TwoRowsOneCol from './TwoRowsOneCol';
import Information from './Info';
import Slide from './Slide';
import AllergensTable from './AllergensTable';
import Gallery from './Gallery';

import { Page } from 'definitions/models';
export interface TemplatesProps {
  page: Page;
  lang: string;
}

type TemplatesType = {
  [key: string]: React.FC<TemplatesProps>;
};

const templates: TemplatesType = {
  'template->page->two-rows-one-col': TwoRowsOneCol,
  'template->page->one-row-two-cols': OneRowTwoCols,
  'template->page->single-section': SingleSection,
  'template->page->slide': Slide,
  'template->page->info': Information,
  'template->page->info-allergens': AllergensTable,
  'template->page->info-gallery': Gallery
};

const Templates: React.FC<TemplatesProps> = ({ page, lang }) => {
  const Template: React.FC<TemplatesProps> = templates[page.template];
  return <Template page={page} lang={lang} />;
};

export default Templates;
