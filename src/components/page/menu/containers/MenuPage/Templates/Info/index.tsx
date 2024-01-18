import React from 'react';

import { IonGrid, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';
import PageSectionTemplate from '../../..//Section';
import { PageSection } from '../../../../../../../definitions/models';

const Information: React.FC<TemplatesProps> = ({ page, lang }) => {
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
    <IonGrid style={{ height: '80vh' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default Information;
