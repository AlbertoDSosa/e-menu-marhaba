import React from 'react';

import { IonGrid } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';
import { PageSection } from '../../../../../../../definitions/models';
import PageSectionTemplate from '../../../Section';

const Gallery: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { get } = useData();
  const sections = get({ collection: 'pageSections', from: 'system' });
  const section: PageSection = sections.dictionary[page.sections[0]];

  return (
    <IonGrid className="ion-padding ion-margin-top" style={{ width: '85vw' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default Gallery;
