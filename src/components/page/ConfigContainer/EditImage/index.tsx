import React, { useState } from 'react';
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/react';

import { useData } from '../../../../contexts/DataContext';
import { AddToEntityItem, EditImageEntity } from 'definitions/dataContext';
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
}

const EditImage: React.FC<EditImageProps> = ({ entity, size, addToEntity }) => {
  const { create } = useData();
  const [showImageEditor, setShowImageEditor] = useState<boolean>(false);

  const doSaveImage = (imageSaveParams: ImageSaveParams) => {
    create({
      collection: 'images',
      entity: 'image',
      addToEntity,
      entityId: entity.id,
      payload: {
        lang: 'es',
        image: imageSaveParams.src,
        displayInfo: {
          es: { title: imageSaveParams.title, slug: imageSaveParams.title }
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
        />
      </IonListHeader>
      <IonItem>
        <ImageList entity={entity} entityName={addToEntity} />
      </IonItem>
    </IonList>
  );
};

export default EditImage;
