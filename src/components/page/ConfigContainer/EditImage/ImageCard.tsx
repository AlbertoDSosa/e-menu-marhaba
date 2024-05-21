import React from 'react';

import {
  IonCol,
  IonCard,
  IonImg,
  IonCardContent,
  IonIcon,
  IonButton
} from '@ionic/react';

import { useMutation } from 'hooks/useMutation';

import { Image } from 'definitions/models';
import { trashOutline } from 'ionicons/icons';
import { AddToEntityItem, Key } from 'definitions/dataContext';

interface ImageCardProps {
  img: Image;
  isMainImg: boolean;
  entityId: string;
  entity: AddToEntityItem;
  resource: Key;
}

const ImageCard: React.FC<ImageCardProps> = ({
  img,
  isMainImg,
  entityId,
  entity,
  resource
}) => {
  const { mutate } = useMutation({ resource, action: 'update' });

  const doSetMainImage = () => {
    mutate({
      entity,
      field: 'image',
      payload: { entityId, id: img.id }
    });
  };

  return (
    <IonCol size="4" style={{ border: isMainImg ? '2px solid blue' : '' }}>
      <IonCard onClick={doSetMainImage} button={!isMainImg}>
        <IonImg src={img.thumbnail.src} alt={img.thumbnail.title} />
        <IonCardContent>
          <IonButton
            onClick={() => {}}
            shape="round"
            color="primary"
            disabled={isMainImg}
          >
            <IonIcon icon={trashOutline} />
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};

export default ImageCard;
