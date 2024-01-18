import React from 'react';

import { IonRow, IonCol, IonGrid, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from '../../../../../../../hooks/useQuery';
import {
  Image,
  SectionTemplate
} from '../../../../../../../definitions/models';
import ItemList from '../../../List/Templates/ItemList';

const OneRowTwoCols: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { isLoading: templatesIsLoading, dictionary: templates } = useQuery({
    key: 'templates'
  });

  const { isLoading: imagesIsLoading, dictionary: images } = useQuery({
    key: 'images'
  });

  const { isLoading: listsIsLoading, dictionary: lists } = useQuery({
    key: 'lists'
  });

  if (imagesIsLoading || listsIsLoading || templatesIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const sectionTemplate = templates[section.template];
  const { styles: sectionStyles } = sectionTemplate as SectionTemplate;

  const list = lists[section.lists[0]];
  const sectionImg: Image = images[section.mainImg || section.defaultImg];

  return (
    <IonGrid style={{ height: '85vh', width: '90vw' }}>
      <IonRow
        style={{
          width: sectionStyles.row?.width,
          height: sectionStyles.row?.height,
          margin: '0 auto'
        }}
        className="ion-align-items-center"
      >
        <IonCol
          style={{ paddingLeft: '1.5em' }}
          size={sectionStyles.list?.colSize}
        >
          <ItemList list={list} lang={lang} />
        </IonCol>
        <IonCol style={{ width: '100%' }} size={sectionStyles.img?.colSize}>
          <img
            style={{ display: 'block', margin: '0 auto' }}
            src={sectionImg.full.src}
            alt={sectionImg.full.title}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default OneRowTwoCols;
