import React from 'react';

import styles from '../../styles.module.css';

import { IonCol, IonGrid, IonRow, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';

import PageSectionTemplate from '../../..//Section';
import { PageSection } from '../../../../../../../definitions/models';

const TwoRowsOneCol: React.FC<TemplatesProps> = ({ page, lang }) => {
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
  const section1: PageSection = sections[page.sections[0]];
  const section2: PageSection = sections[page.sections[1]];

  return (
    <div className={styles.backgroundImg}>
      <IonGrid
        style={{
          height: '89vh',
          margin: '0 auto',
          backgroundColor: 'rgba(255,255,255,90%)'
        }}
      >
        <IonRow
          className="ion-align-items-center"
          style={{
            width: '95vw',
            margin: '0 auto'
          }}
        >
          <IonCol>
            <PageSectionTemplate section={section1} lang={lang} />
          </IonCol>
        </IonRow>
        <IonRow
          className="ion-align-items-center"
          style={{ width: '95vw', margin: '0 auto' }}
        >
          <IonCol>
            <PageSectionTemplate section={section2} lang={lang} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default TwoRowsOneCol;
