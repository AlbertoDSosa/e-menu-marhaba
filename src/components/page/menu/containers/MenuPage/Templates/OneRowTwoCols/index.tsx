import React from 'react';

import styles from '../../styles.module.css';

import { IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';
import { PageSection } from '../../../../../../../definitions/models';
import PageSectionTemplate from '../../../Section';

const OneRowTwoCols: React.FC<TemplatesProps> = ({ page, lang }) => {
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

  let colOneSection: PageSection = sections[page.sections[0]];
  let colTwoSection: PageSection = sections[page.sections[1]];

  return (
    <IonGrid
      className={styles.backgroundImg}
      style={{ height: '90vh', padding: '.5em' }}
    >
      <IonRow
        style={{
          width: '90vw',
          height: '88.5vh',
          margin: '0 auto',
          backgroundColor: 'rgba(255,255,255,90%)'
        }}
      >
        <IonCol size="8" style={{ padding: 0 }}>
          <PageSectionTemplate section={colOneSection} lang={lang} />
        </IonCol>
        <br />
        <IonCol size="4" style={{ padding: 0 }}>
          <PageSectionTemplate section={colTwoSection} lang={lang} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default OneRowTwoCols;
