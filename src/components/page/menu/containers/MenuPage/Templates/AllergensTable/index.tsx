import React from 'react';
import { useQuery } from '../../../../../../../hooks/useQuery';
import { IonGrid, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';

import { PageSection } from '../../../../../../../definitions/models';
import PageSectionTemplate from '../../../Section';

const AllergensTable: React.FC<TemplatesProps> = ({ page, lang }) => {
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
    <IonGrid style={{ width: '95vw' }}>
      <PageSectionTemplate section={section} lang={lang} />
    </IonGrid>
  );
};

export default AllergensTable;
