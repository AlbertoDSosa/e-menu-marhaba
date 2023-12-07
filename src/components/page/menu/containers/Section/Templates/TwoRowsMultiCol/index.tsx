import React from 'react';

import { IonGrid, IonRow, IonCol, IonText } from '@ionic/react';

import { TemplatesProps } from '../index';
import { useData } from '../../../../../../../contexts/DataContext';
import {
  List,
  Image,
  SectionTemplate
} from '../../../../../../../definitions/models';

import ChunkItemList from '../../../List/Templates/ChunkItemList';

const TwoRowsMultiCol: React.FC<TemplatesProps> = ({ section, lang }) => {
  const { get } = useData();
  const lists = get({ collection: 'lists', from: 'state' });
  const images = get({ collection: 'images', from: 'state' });
  const templates = get({ collection: 'templates', from: 'system' });

  const list: List = lists?.dictionary[section.lists[0]];
  const sectionTemplate = templates?.dictionary[section.template];
  const { styles: sectionStyles } = sectionTemplate as SectionTemplate;

  const sectionInfo = section.displayInfo[lang];
  const sectionImg: Image =
    images?.dictionary[section.mainImg || section.defaultImg];

  return (
    <IonGrid style={{ height: '80vh' }}>
      <IonRow style={{ width: '80vw', margin: '0 auto' }}>
        {section.showTitle ? (
          <IonCol color="dark" size="12">
            <IonText className="ion-text-center">
              <h2 style={{ marginTop: '0.45em', fontWeight: 'bold' }}>
                {sectionInfo?.title}
              </h2>
              {section.showExtraInfo && <p>{sectionInfo?.extraInfo}</p>}
            </IonText>
          </IonCol>
        ) : (
          <IonCol color="dark" size="12">
            <div style={{ width: '100%' }}></div>
          </IonCol>
        )}
      </IonRow>
      <IonRow
        className="ion-align-items-center"
        style={{
          height: sectionStyles.list?.rowHeight,
          width: sectionStyles.list?.rowWidth,
          margin: '0 auto'
        }}
      >
        <ChunkItemList
          list={list}
          chunkNumber={section.listItemsForCol}
          lang={lang}
        />
      </IonRow>
      <IonRow
        style={{
          height: sectionStyles.img?.rowHeight
            ? sectionStyles.img?.rowHeight
            : '40vh',
          width: sectionStyles.img?.rowWidth
            ? sectionStyles.img?.rowWidth
            : '80vw',
          margin: '0 auto',
          padding: '.5em'
        }}
      >
        <IonCol>
          <img src={sectionImg.full.src} alt={sectionImg.full.title} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TwoRowsMultiCol;
