import React from 'react';

import { IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from 'hooks/useQuery';
import { Image } from 'definitions/models';

import ItemList from '../../../List/Templates/ItemList';

const SimplsList: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { isLoading: imagesIsLoading, dictionary: images } = useQuery({
    key: 'images'
  });

  const { isLoading: listsIsLoading, dictionary: lists } = useQuery({
    key: 'lists'
  });

  if (imagesIsLoading || listsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }
  const list = lists[section.lists[0]];
  const sectionImg: Image = images[section.mainImg || section.defaultImg];

  return (
    <IonGrid style={{ padding: 0 }}>
      <IonRow className="ion-justify-content-center" style={{ height: '85vh' }}>
        <IonCol
          className="ion-align-self-center"
          size="11"
          style={{ padding: 0 }}
        >
          <div style={{ width: '100%', height: '45vh' }}>
            <ItemList list={list} lang={lang} />
          </div>
          <div style={{ width: '100%', height: '40vh' }}>
            <img src={sectionImg.full.src} alt={sectionImg.full.title} />
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SimplsList;
