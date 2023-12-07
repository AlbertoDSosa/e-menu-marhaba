import React from 'react';

import { IonRow, IonCol, IonGrid } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';
import {
  Image,
  SectionTemplate
} from '../../../../../../../definitions/models';
import ItemList from '../../../List/Templates/ItemList';

const OneRowTwoCols: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { get } = useData();
  const lists = get({ collection: 'lists', from: 'state' });
  const images = get({ collection: 'images', from: 'state' });
  const templates = get({ collection: 'templates', from: 'system' });
  const sectionTemplate = templates.dictionary[section.template];
  const { styles: sectionStyles } = sectionTemplate as SectionTemplate;

  const list = lists.dictionary[section.lists[0]];
  const sectionImg: Image =
    images.dictionary[section.mainImg || section.defaultImg];

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
