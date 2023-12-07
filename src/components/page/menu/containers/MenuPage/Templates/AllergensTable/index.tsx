import React from 'react';
import { useData } from '../../../../../../../contexts/DataContext';

import { IonGrid } from '@ionic/react';

import { TemplatesProps } from '../index';

import { PageSection } from '../../../../../../../definitions/models';
import PageSectionTemplate from '../../../Section';

const AllergensTable: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { get } = useData();
  const sections = get({ collection: 'pageSections', from: 'system' });
  const section: PageSection = sections.dictionary[page.sections[0]];

  return (
    <IonGrid style={{ width: '95vw' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default AllergensTable;
