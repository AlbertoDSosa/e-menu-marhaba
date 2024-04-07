import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { useQuery } from '../../../../hooks/useQuery';

import {
  IonContent,
  IonList,
  IonButton,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToggle,
  IonLoading
} from '@ionic/react';

// import { createOutline } from 'ionicons/icons';

import { PageMenuItem, DisplayInfo } from 'definitions/models';

interface PageMenuItemDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const PageMenuItemDetail: React.FC<PageMenuItemDetailPageProps> = ({
  match
}) => {
  const key = match.params.key;

  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: pageMenuItems, isLoading: pageMenuItemsIsLoading } =
    useQuery({
      key: 'pageMenuItems'
    });

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  if (pageMenuItemsIsLoading || itemsIsLoading || generalInfoIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const lang = generalInfo.baseLanguage;
  const pageMenuItem: PageMenuItem = pageMenuItems[key];
  const item = items[pageMenuItem.itemId];
  const itemInfo: DisplayInfo = item.displayInfo[lang];

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>
            <h2>{itemInfo.title}</h2>
            <p>{itemInfo.description}</p>
            {itemInfo.extraInfo && <p>{itemInfo.extraInfo}</p>}
          </IonLabel>
          <IonButton routerLink={`/config/items/${item.id}`}>
            Editar Artículo
          </IonButton>
        </IonItem>
        <IonListHeader color="dark">
          <h3>Opciones de Artículo de Menú</h3>
        </IonListHeader>
        <IonItem>
          <IonLabel>Mostrar Artículo</IonLabel>
          <IonToggle
            color="dark"
            checked={pageMenuItem.show}
            onIonChange={() => {
              // set({
              //   action: 'show',
              //   info: 'item',
              //   entity: 'pageMenuItem',
              //   id: pageMenuItem.id
              // });
            }}
          />
        </IonItem>
        {pageMenuItem.showTitle && (
          <IonItem>
            <IonLabel>Mostrar Título</IonLabel>
            <IonToggle
              color="dark"
              checked={pageMenuItem.showTitle}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'title',
                //   entity: 'pageMenuItem',
                //   id: pageMenuItem.id
                // });
              }}
            />
          </IonItem>
        )}
        {itemInfo.description && (
          <IonItem>
            <IonLabel>Mostrar Descripción</IonLabel>
            <IonToggle
              color="dark"
              checked={pageMenuItem.showDescription}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'description',
                //   entity: 'pageMenuItem',
                //   id: pageMenuItem.id
                // });
              }}
            />
          </IonItem>
        )}
        {itemInfo.extraInfo && (
          <IonItem>
            <IonLabel>Mostrar Información Extra</IonLabel>
            <IonToggle
              color="dark"
              checked={pageMenuItem.showExtraInfo}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'extra-info',
                //   entity: 'pageMenuItem',
                //   id: pageMenuItem.id
                // });
              }}
            />
          </IonItem>
        )}
      </IonList>
    </IonContent>
  );
};

export default withRouter(PageMenuItemDetail);
