import React from 'react';

import { IonGrid, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from 'hooks/useQuery';
import { PageSection } from 'definitions/models';
import PageSectionTemplate from '../../../Section';

const Gallery: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { isLoading: sectionsIsLoading, dictionary: sections } = useQuery({
    key: 'sections'
  });

  if (sectionsIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  const section: PageSection = sections[page.sections[0]];

  return (
    <IonGrid className="ion-padding ion-margin-top" style={{ width: '85vw' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default Gallery;
