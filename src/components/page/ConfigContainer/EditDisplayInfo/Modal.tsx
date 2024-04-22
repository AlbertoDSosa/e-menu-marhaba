import { useState } from 'react';

import { useMutation } from '../../../../hooks/useMutation';
import styles from './styles.module.css';

import {
  IonLabel,
  IonList,
  IonItem,
  IonTextarea,
  IonListHeader,
  IonModal,
  IonButton
} from '@ionic/react';
import { DisplayInfo } from 'definitions/models';

interface ModalProps {
  showModal: boolean;
  setShowModal(show: boolean): void;
  displayInfo: any;
  args: any;
  setDisplayInfo(info: any): void;
}

const EditDisplayInfoModal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  displayInfo,
  setDisplayInfo,
  args
}) => {
  const { entityName, lang, entity, resource } = args;

  const { mutate } = useMutation({
    resource,
    action: 'update'
  });

  const updateDisplayInfo = () => {
    mutate({
      field: 'info',
      entity: entityName,
      payload: { id: entity.id, displayInfo: displayInfo, lang }
    });

    setShowModal(false);
  };
  return (
    <IonModal
      className={styles.modal}
      backdropDismiss={false}
      isOpen={showModal}
    >
      <IonList>
        <IonListHeader>
          <h2>Editar Información</h2>
        </IonListHeader>
        <IonItem>
          <IonLabel>Título:</IonLabel>
          <IonTextarea
            inputmode="text"
            wrap="off"
            cols={30}
            rows={6}
            value={displayInfo.title}
            onIonChange={(e) => {
              setDisplayInfo((info: any) => {
                return { ...info, title: e.detail.value };
              });
            }}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Descripción:</IonLabel>
          <IonTextarea
            inputmode="text"
            wrap="off"
            cols={30}
            rows={6}
            value={displayInfo.description}
            onIonChange={(e) => {
              setDisplayInfo((info: DisplayInfo) => {
                return { ...info, description: e.detail.value };
              });
            }}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Información Extra:</IonLabel>
          <IonTextarea
            inputmode="text"
            wrap="off"
            cols={30}
            rows={6}
            value={displayInfo.extraInfo}
            onIonChange={(e) => {
              setDisplayInfo((info: DisplayInfo) => {
                return { ...info, extraInfo: e.detail.value };
              });
            }}
          />
        </IonItem>
        <IonItem className="ion-padding-vertical" lines="none">
          <IonButton
            expand="block"
            slot="end"
            size="default"
            onClick={() => {
              setDisplayInfo(displayInfo);
              setShowModal(false);
            }}
          >
            Cancelar
          </IonButton>
          <IonButton
            slot="end"
            size="default"
            expand="block"
            onClick={updateDisplayInfo}
          >
            Guardar
          </IonButton>
        </IonItem>
      </IonList>
    </IonModal>
  );
};

export default EditDisplayInfoModal;
