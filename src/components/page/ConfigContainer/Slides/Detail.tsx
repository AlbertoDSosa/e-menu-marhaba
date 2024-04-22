import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useQuery } from '../../../../hooks/useQuery';
import { useMutation } from '../../../../hooks/useMutation';

import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonIcon,
  IonLoading
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
  const [collapseForm, setCollapseForm] = useState<boolean>(false);
  const [displayInfoValue, setDisplayInfoValue] = useState({});

  const { dictionary: slides, isLoading: slidesIsLoading } = useQuery({
    key: 'slides'
  });

  const { mutate: update } = useMutation({
    resource: 'slides',
    action: 'update'
  });

  if (slidesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const slide: Slide = slides[key];
  const slideInfo = slide.displayInfo['es'];

  const updateDisplayInfo = () => {
    update({
      field: 'info',
      entity: 'slide',
      payload: { id: slide.id, displayInfo: displayInfoValue, lang: 'es' }
    });
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
            {/* <IonLabel>Título:</IonLabel> */}
            <IonTextarea
              label="Título:"
              inputmode="text"
              wrap="off"
              cols={30}
              rows={6}
              value={slideInfo.title}
              onIonChange={(e) => {
                setDisplayInfoValue({
                  ...slideInfo,
                  title: e.detail.value as string
                });
              }}
            />
          </IonItem>
          <IonItem>
            {/* <IonLabel>Descripción:</IonLabel> */}
            <IonTextarea
              label="Descripción:"
              inputmode="text"
              wrap="off"
              cols={30}
              rows={6}
              value={slideInfo.description}
              onIonChange={(e) => {
                setDisplayInfoValue({
                  ...slideInfo,
                  description: e.detail.value as string
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
                setDisplayInfoValue(slideInfo);
                setCollapseForm(!collapseForm);
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
        </Collapse>
      </IonList>
      <EditImage
        resource="slides"
        entity={slide}
        size={{ width: 1920, height: 1080 }}
        addToEntity="slide"
      />
    </IonContent>
  );
};

export default withRouter(ConfigSlideDetail);
