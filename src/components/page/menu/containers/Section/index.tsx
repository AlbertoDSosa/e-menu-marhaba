import Templates from './Templates';

import { PageSection } from 'definitions/models';

interface PageSectionProps {
  section: PageSection;
  lang: string;
}

const PageSectionTemplate: React.FC<PageSectionProps> = ({ section, lang }) => {
  return <Templates section={section} lang={lang} />;
};

export default PageSectionTemplate;
