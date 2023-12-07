import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';
import {
  ProductList,
  InfoList,
  Image,
  SectionTemplate
} from '../../../../../../../definitions/models';

import ItemList from '../../../List/Templates/ItemList';

const MultiRowsTwoCols: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { get } = useData();
  const lists = get({ collection: 'lists', from: 'state' });
  const templates = get({ collection: 'templates', from: 'system' });
  const sectionTemplate = templates.dictionary[section.template];
  const { styles: sectionStyles } = sectionTemplate as SectionTemplate;

  return (
    <IonGrid
      style={{
        height: sectionStyles.grid?.height,
        width: sectionStyles.grid?.width,
        padding: sectionStyles.grid?.padding
      }}
    >
      {section.lists.map((listId: string) => {
        const list: ProductList | InfoList = lists.dictionary[listId];
        const images = get({ collection: 'images', from: 'state' });
        const listImg: Image =
          images.dictionary[list.mainImg || list.defaultImg];
        return (
          <IonRow style={{ width: '85vw', margin: '0 auto' }} key={listId}>
            <IonCol
              style={{ paddingLeft: '1em' }}
              size={sectionStyles.list?.colSize}
            >
              <ItemList list={list} lang={lang} />
            </IonCol>
            <IonCol size={sectionStyles.img?.colSize}>
              <img src={listImg.full.src} alt={listImg.full.title} />
            </IonCol>
          </IonRow>
        );
      })}
    </IonGrid>
  );
};

export default MultiRowsTwoCols;
