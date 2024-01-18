import React, { useState } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';
import { useQuery } from '../../../../../hooks/useQuery';
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonReorderGroup,
  IonReorder,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLoading
} from '@ionic/react';

import { reorderFourOutline } from 'ionicons/icons';
import { DisplayInfo, Slide } from 'definitions/models';

const EditScreensaverSlides: React.FC = () => {
  const [disabledReorderItems, setDisabledReorderItems] = useState(true);
  const [itemIdValue, setItemIdValue] = useState<string>('');

  const { dictionary: screensaver, isLoading: screensaverIsLoading } = useQuery(
    {
      key: 'screensaver'
    }
  );

  const { dictionary: slides, isLoading: slidesIsLoading } = useQuery({
    key: 'slides'
  });

  if (screensaverIsLoading || slidesIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    // const from = event.detail.from;
    // const to = event.detail.to;

    // reorder({ entity: 'screensaver', entityId: '', from, to });

    event.detail.complete();
  };

  const doAdd = () => {
    // add({ entity: 'screensaver', entityId: '', itemId: itemIdValue });
    setItemIdValue('');
  };

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>
          <h1>Editar Diapositivas Activas</h1>
        </IonLabel>
        {screensaver.slides.length > 1 && (
          <IonButton
            color={disabledReorderItems ? 'danger' : 'success'}
            onClick={() => setDisabledReorderItems(!disabledReorderItems)}
          >
            Ordenar
          </IonButton>
        )}
        {!!screensaver.selectableSlides.length &&
          screensaver.selectableSlides.length < screensaver.maxItems &&
          !!itemIdValue && (
            <IonButton
              color="primary"
              disabled={!disabledReorderItems}
              onClick={doAdd}
            >
              Añadir
            </IonButton>
          )}
      </IonListHeader>
      {Boolean(screensaver.selectableSlides.length) &&
        screensaver.selectableSlides.length < screensaver.maxItems &&
        disabledReorderItems && (
          <IonItem>
            <IonLabel>Diapositivas Disponibles</IonLabel>
            <IonSelect
              value={itemIdValue}
              placeholder="Selecciona Slide"
              cancelText="Cancelar"
              okText="Elegir"
              onIonChange={(e) => setItemIdValue(e.detail.value)}
            >
              {screensaver.selectableSlides.map((slideId: string) => {
                const slide: Slide = slides[slideId];
                const info: DisplayInfo = slide.displayInfo['es'];

                return (
                  <IonSelectOption key={slideId} value={slideId}>
                    {info.title}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>
        )}
      <IonReorderGroup
        disabled={disabledReorderItems}
        onIonItemReorder={doReorder}
      >
        {screensaver?.slides.map((slideId: string) => {
          const slide: Slide = slides[slideId];
          const slideInfo: DisplayInfo = slide.displayInfo['es'];

          return (
            <IonItemSliding key={slideId}>
              <IonItemOptions side="end">
                {disabledReorderItems && (
                  <IonItemOption
                    onClick={() => {
                      // remove({
                      //   action: 'one',
                      //   itemId: slideId,
                      //   entity: 'slide',
                      //   entityId: ''
                      // });
                    }}
                    color="danger"
                    expandable
                  >
                    Borrar
                  </IonItemOption>
                )}
              </IonItemOptions>

              <IonItem routerLink={`/config/slides/${slideId}`}>
                <IonReorder slot="start">
                  <IonIcon icon={reorderFourOutline} />
                </IonReorder>
                <IonLabel>{slideInfo.title}</IonLabel>
              </IonItem>
            </IonItemSliding>
          );
        })}
      </IonReorderGroup>
    </IonList>
  );
};

export default EditScreensaverSlides;
