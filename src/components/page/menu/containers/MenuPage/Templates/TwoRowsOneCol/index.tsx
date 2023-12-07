import React from 'react';

import styles from '../../styles.module.css';

import { IonCol, IonGrid, IonRow } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';

import PageSectionTemplate from '../../..//Section';
import { PageSection } from '../../../../../../../definitions/models';

const TwoRowsOneCol: React.FC<TemplatesProps> = ({ page, lang }) => {
  const { get } = useData();
  const sections = get({ collection: 'pageSections', from: 'system' });
  const section1: PageSection = sections.dictionary[page.sections[0]];
  const section2: PageSection = sections.dictionary[page.sections[1]];

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
            width: '90vw',
            margin: '0 auto'
          }}
        >
          <IonCol>
            <PageSectionTemplate section={section1} lang={lang} />
          </IonCol>
        </IonRow>
        <IonRow
          className="ion-align-items-center"
          style={{ width: '90vw', margin: '0 auto' }}
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
