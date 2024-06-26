import React from 'react';
// import styles from './styles.module.css';

import { IonGrid, IonRow, IonCol, IonText, IonLoading } from '@ionic/react';

import { useQuery } from 'hooks/useQuery';
import { List, ListItem } from 'definitions/models';

import InfoCard from '../../../List/Templates/InfoCardList/InfoCard';

interface InfoCardListProps {
  list: List;
  lang: string;
}

const InfoCardList: React.FC<InfoCardListProps> = ({ list, lang }) => {
  const { isLoading: listItemsIsLoading, dictionary: listItems } = useQuery({
    key: 'listItems'
  });

  if (listItemsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const listInfo = list.displayInfo[lang];

  return (
    <IonGrid style={{ height: '80vh', width: '85vw' }}>
      <IonRow>
        {list.showTitle && (
          <IonCol color="dark" size="12">
            <IonText className="ion-text-center">
              <h2 style={{ fontWeight: 'bold' }}>{listInfo?.title}</h2>
              {list.showExtraInfo && <p>{listInfo?.extraInfo}</p>}
            </IonText>
          </IonCol>
        )}
      </IonRow>
      <IonRow
        style={{ height: '70vh', margin: '0 auto' }}
        className="ion-align-items-center ion-justify-content-center"
      >
        {list.items.map((itemId) => {
          const listItem: ListItem = listItems[itemId];
          return (
            listItem.show && (
              <IonCol key={itemId} size="4">
                <InfoCard listItem={listItem} lang={lang} />
              </IonCol>
            )
          );
        })}
      </IonRow>
    </IonGrid>
  );
};

export default InfoCardList;
