import React from 'react';

import { IonCol, IonGrid, IonRow, IonText, IonLoading } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useQuery } from 'hooks/useQuery';
import { List } from 'definitions/models';

import ChunkItemList from '../../../List/Templates/ChunkItemList';

const OneRowMultiCol: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { isLoading: listsIsLoading, dictionary: lists } = useQuery({
    key: 'lists'
  });

  if (listsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const list: List = lists[section.lists[0]];
  const sectionInfo = section.displayInfo[lang];

  return (
    <IonGrid style={{ height: '80vh' }}>
      <IonRow style={{ width: '80vw', margin: '0 auto' }}>
        {section.showTitle && (
          <IonCol color="dark" size="12">
            <IonText className="ion-text-center">
              <h2 style={{ marginTop: '0.45em', fontWeight: 'bold' }}>
                {sectionInfo?.title}
              </h2>
              {section.showExtraInfo && <p>{sectionInfo?.extraInfo}</p>}
            </IonText>
          </IonCol>
        )}
      </IonRow>
      <IonRow style={{ width: '85vw', margin: '0 auto', padding: '1em' }}>
        <ChunkItemList
          list={list}
          chunkNumber={section.listItemsForCol}
          lang={lang}
        />
      </IonRow>
      <IonRow style={{ width: '65vw', margin: '0 auto' }}></IonRow>
    </IonGrid>
  );
};

export default OneRowMultiCol;
