import React from 'react';

import { IonGrid } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';
import PageSectionTemplate from '../../..//Section';
import { PageSection } from '../../../../../../../definitions/models';

const Information: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { get } = useData();

  const sections = get({ collection: 'pageSections', from: 'system' });
  const section: PageSection = sections.dictionary[page.sections[0]];

  return (
    <IonGrid style={{ height: '80vh' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default Information;
