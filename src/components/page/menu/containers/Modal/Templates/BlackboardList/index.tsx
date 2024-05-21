import React from 'react';
import styles from './styles.module.css';

import { TemplatesProps } from '../index';

import { useQuery } from 'hooks/useQuery';
import { List, ListModal } from 'definitions/models';

import ItemList from './ItemList';

import { IonGrid, IonRow, IonCol, IonText, IonLoading } from '@ionic/react';

const BlackboardList: React.FC<TemplatesProps> = ({ modal, lang }) => {
  const { dictionary: lists, isLoading: listsIsLoading } = useQuery({
    key: 'lists'
  });

  const { dictionary: images, isLoading: imagesIsLoading } = useQuery({
    key: 'images'
  });

  if (listsIsLoading || imagesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  const backgroundImg = images[modal.backgroundImg];
  const modalInfo = modal.displayInfo[lang];

  const listModal: ListModal = modal;

  const listMain = lists[listModal.lists[0]];
  const listInfo = listMain.displayInfo[lang];
  const modalImg = images[modal.mainImg || modal.defaultImg];

  return (
    <div className={styles.container}>
      <IonGrid className={styles.list}>
        <IonRow className="ion-justify-content-center">
          <IonText className="ion-text-center">
            <h1 style={{ fontWeight: 'bold' }}>
              {listModal.lists.length === 1 ? listInfo.title : modalInfo?.title}
            </h1>
            <h2>
              {listModal.lists.length === 1
                ? listInfo.extraInfo
                : modalInfo?.extraInfo}
            </h2>
          </IonText>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          {listModal?.lists.map((listKey) => {
            const list: List = lists[listKey];
            return (
              <IonCol style={{ paddingLeft: '2em' }} key={listKey} size="6">
                <ItemList list={list} lang={lang} />
              </IonCol>
            );
          })}
          <IonCol size="6">
            <img src={modalImg?.full.src} alt="" />
          </IonCol>
        </IonRow>
      </IonGrid>
      {backgroundImg && (
        <img loading="lazy" alt="Background" src={backgroundImg.full?.src} />
      )}
    </div>
  );
};

export default BlackboardList;
