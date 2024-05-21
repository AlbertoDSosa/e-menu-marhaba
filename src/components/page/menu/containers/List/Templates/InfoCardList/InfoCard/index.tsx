import React from 'react';
import { IonGrid, IonRow, IonCol, IonText, IonLoading } from '@ionic/react';

import { useQuery } from 'hooks/useQuery';
import {
  ListItem,
  Info,
  Image
} from 'definitions/models';

interface InfoCardProps {
  listItem: ListItem;
  lang: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ listItem, lang }) => {
  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  const { dictionary: images, isLoading: imagesIsLoading } = useQuery({
    key: 'images'
  });

  if (itemsIsLoading || imagesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const item: Info = items[listItem.itemId];
  const itemInfo = item.displayInfo[lang];
  const infoImg: Image = images[item.mainImg || item.defaultImg];

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <img
            style={{ borderRadius: '50%', border: '1px solid' }}
            src={infoImg?.full.src}
            alt={infoImg?.full.title}
          />
        </IonCol>
        <IonCol className="ion-align-self-center">
          <IonText>
            {listItem.showTitle && (
              <h3 style={{ fontWeight: 'bold' }}>{itemInfo?.title}</h3>
            )}
          </IonText>
          <IonText>
            <h4 style={{ margin: '.8em' }}>{itemInfo?.description}</h4>
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default InfoCard;
