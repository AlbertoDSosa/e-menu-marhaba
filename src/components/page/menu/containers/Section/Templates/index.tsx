import TwoRowsMultiCol from './TwoRowsMultiCol';
import MultiRowsTwoCols from './MultiRowsTwoCols';
import OneRowTwoCols from './OneRowTwoCols';
import InfoList from './InfoList';
import OneRowMultiCol from './OneRowMultiCol';
import SimpleList from './SimpleList';
import AllergenicList from './AllergenicList';
import GalleryList from './GalleryList';

import { PageSection } from 'definitions/models';
export interface TemplatesProps {
  section: PageSection;
  lang: string;
}

type TemplatesType = {
  [key: string]: React.FC<TemplatesProps>;
};

const templates: TemplatesType = {
  'template->pageSection->one-row-two-cols': OneRowTwoCols,
  'template->pageSection->one-row-two-cols->slide': OneRowTwoCols,
  'template->pageSection->simple-list': SimpleList,
  'template->pageSection->multi-rows-two-cols': MultiRowsTwoCols,
  'template->pageSection->multi-rows-two-cols->slide': MultiRowsTwoCols,
  'template->pageSection->two-rows-multi-col': TwoRowsMultiCol,
  'template->pageSection->two-rows-multi-col->small-img': TwoRowsMultiCol,
  'template->pageSection->two-rows-multi-col->single-col-list': TwoRowsMultiCol,
  'template->pageSection->one-row-multi-col': OneRowMultiCol,
  'template->pageSection->info-list': InfoList,
  'template->pageSection->gallery-list': GalleryList,
  'template->pageSection->allergens-list': AllergenicList
};

const Templates: React.FC<TemplatesProps> = ({ section, lang }) => {
  const Template: React.FC<TemplatesProps> = templates[section.template];
  return <Template section={section} lang={lang} />;
};

export default Templates;
