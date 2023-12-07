import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useData } from '../../../../contexts/DataContext';

import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonIcon
} from '@ionic/react';
import { Slide, DisplayInfo } from 'definitions/models';

import {
  // createOutline,
  chevronDownCircle,
  chevronForwardCircle
} from 'ionicons/icons';
import EditImage from '../EditImage';
import { Collapse } from 'react-collapse';

interface SlideDetailProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const ConfigSlideDetail: React.FC<SlideDetailProps> = ({ match }) => {
  const key = match.params.key;
  const { update, get } = useData();

  const slides = get({ collection: 'slides', from: 'state' });
  const slide: Slide = slides.dictionary[key];
  const slideInfo = slide.displayInfo['es'];

  const [displayInfoValue, setDisplayInfoValue] =
    useState<DisplayInfo>(slideInfo);

  const [disableButtons, setDisableButtons] = useState<boolean>(true);
  const [collapseForm, setCollapseForm] = useState<boolean>(false);

  const updateDisplayInfo = () => {
    update({
      field: 'info',
      entity: 'slide',
      payload: { id: slide.id, displayInfo: displayInfoValue, lang: 'es' }
    });
    setDisableButtons(true);
  };

  return (
    <IonContent>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>
            <h2>Editar Información</h2>
          </IonLabel>
          <IonButton
            color="light"
            onClick={() => {
              setCollapseForm(!collapseForm);
            }}
          >
            <IonIcon
              icon={collapseForm ? chevronDownCircle : chevronForwardCircle}
            />
          </IonButton>
        </IonListHeader>
        <Collapse isOpened={collapseForm} checkTimeout={800}>
          <IonItem>
            <IonLabel>Título:</IonLabel>
            <IonTextarea
              inputmode="text"
              wrap="off"
              cols={30}
              rows={6}
              value={displayInfoValue.title}
              onIonChange={(e) => {
                setDisplayInfoValue((info: DisplayInfo) => {
                  return { ...info, title: e.detail.value as string };
                });
                setDisableButtons(false);
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
              value={displayInfoValue.description}
              onIonChange={(e) => {
                setDisplayInfoValue((info: DisplayInfo) => {
                  return { ...info, description: e.detail.value as string };
                });
                setDisableButtons(false);
              }}
            />
          </IonItem>
          <IonItem className="ion-padding-vertical" lines="none">
            <IonButton
              expand="block"
              slot="end"
              size="default"
              onClick={() => {
                setDisplayInfoValue(slideInfo);
                setDisableButtons(true);
              }}
              disabled={disableButtons}
            >
              Cancelar
            </IonButton>
            <IonButton
              slot="end"
              size="default"
              expand="block"
              onClick={updateDisplayInfo}
              disabled={disableButtons}
            >
              Guardar
            </IonButton>
          </IonItem>
        </Collapse>
      </IonList>
      <EditImage
        entity={slide}
        size={{ width: 1920, height: 1080 }}
        addToEntity="slide"
      />
    </IonContent>
  );
};

export default withRouter(ConfigSlideDetail);
