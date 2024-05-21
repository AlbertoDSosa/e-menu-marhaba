import React, { useState } from 'react';
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/react';

import { useMutation } from 'hooks/useMutation';

import { AddToEntityItem, EditImageEntity, Key } from 'definitions/dataContext';
import { ImageSaveParams } from 'definitions/editions';
import { addOutline } from 'ionicons/icons';

import ImageList from './ImageList';
import AddImageModal from './AddImageModal';

interface EditImageProps {
  entity: EditImageEntity;
  size: {
    width: number;
    height: number;
  };
  addToEntity: AddToEntityItem;
  resource: Key;
}

const EditImage: React.FC<EditImageProps> = ({
  entity,
  size,
  addToEntity,
  resource
}) => {
  const [showImageEditor, setShowImageEditor] = useState<boolean>(false);
  const { mutate: create } = useMutation({
    resource: 'images',
    action: 'create'
  });

  const doSaveImage = (imageSaveParams: ImageSaveParams) => {
    create({
      entity: 'image',
      addToList: 'images',
      addToResource: resource,
      addToEntity,
      entityId: entity.id,
      payload: {
        lang: 'es',
        image: imageSaveParams,
        displayInfo: {
          es: {
            title: imageSaveParams.full.title,
            slug: imageSaveParams.full.title
          }
        }
      }
    });
  };

  return (
    <IonList>
      <IonListHeader color="dark">
        <IonLabel>
          <h2>Editar Imagen</h2>
        </IonLabel>
        <IonButton onClick={() => setShowImageEditor(true)}>
          <IonIcon icon={addOutline} />
          Añadir Imagen
        </IonButton>
        <AddImageModal
          showModal={showImageEditor}
          setShowModal={setShowImageEditor}
          doSaveImage={doSaveImage}
          size={size}
          imageType={addToEntity}
        />
      </IonListHeader>
      <IonItem>
        <ImageList
          entity={entity}
          entityName={addToEntity}
          resource={resource}
        />
      </IonItem>
    </IonList>
  );
};

export default EditImage;
