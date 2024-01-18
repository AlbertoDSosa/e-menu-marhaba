// import { useState } from 'react';
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
  updateDisplayInfo(displayInfo: DisplayInfo): void;
  displayInfo: any;
}

const EditDisplayInfoModal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  updateDisplayInfo,
  displayInfo
}) => {
  // const [displayInfoValue, setDisplayInfoValue] = useState(displayInfo);

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
            // onIonChange={(e) => {
            //   setDisplayInfoValue((info: DisplayInfo) => {
            //     return { ...info, title: e.detail.value };
            //   });
            // }}
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
            // onIonChange={(e) => {
            //   setDisplayInfoValue((info: DisplayInfo) => {
            //     return { ...info, description: e.detail.value };
            //   });
            // }}
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
            // onIonChange={(e) => {
            //   setDisplayInfoValue((info: DisplayInfo) => {
            //     return { ...info, extraInfo: e.detail.value };
            //   });
            // }}
          />
        </IonItem>
        <IonItem className="ion-padding-vertical" lines="none">
          <IonButton
            expand="block"
            slot="end"
            size="default"
            // onClick={() => {
            //   setDisplayInfoValue(displayInfo);
            //   setShowModal(false);
            // }}
          >
            Cancelar
          </IonButton>
          <IonButton
            slot="end"
            size="default"
            expand="block"
            // onClick={() => {
            //   updateDisplayInfo(displayInfoValue);
            //   setShowModal(false);
            // }}
          >
            Guardar
          </IonButton>
        </IonItem>
      </IonList>
    </IonModal>
  );
};

export default EditDisplayInfoModal;
