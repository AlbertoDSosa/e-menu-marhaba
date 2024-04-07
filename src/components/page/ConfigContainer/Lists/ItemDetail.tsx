import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { useQuery } from '../../../../hooks/useQuery';

import {
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonToggle,
  IonButton,
  IonLoading
} from '@ionic/react';

// import { createOutline } from 'ionicons/icons';

import {
  Product,
  ProductListItem,
  Info,
  DisplayInfo
} from 'definitions/models';

interface ListItemDetailPageProps
  extends RouteComponentProps<{
    key: string;
  }> {}

const ListItemDetail: React.FC<ListItemDetailPageProps> = ({ match }) => {
  const key = match.params.key;

  const { dictionary: generalInfo, isLoading: generalInfoIsLoading } = useQuery(
    {
      key: 'generalInfo'
    }
  );

  const { dictionary: listItems, isLoading: listItemsIsLoading } = useQuery({
    key: 'listItems'
  });

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  if (generalInfoIsLoading || itemsIsLoading || listItemsIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );

  const lang = generalInfo.baseLanguage;
  const listItem: ProductListItem = listItems[key];
  const item: Product | Info = items[listItem.itemId];
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
          <h3>Opciones de Artículo de Lista</h3>
        </IonListHeader>
        <IonItem>
          <IonToggle
            color="dark"
            checked={listItem.show}
            onIonChange={() => {
              // set({
              //   action: 'show',
              //   info: 'item',
              //   entity: 'listItem',
              //   id: listItem.id
              // });
            }}
          >
            Mostrar Artículo
          </IonToggle>
        </IonItem>
        {item.type === 'product' && (
          <IonItem>
            <IonToggle
              color="dark"
              checked={listItem.showPrice}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'price',
                //   entity: 'listItem',
                //   id: listItem.id
                // });
              }}
            >
              Mostrar Precio
            </IonToggle>
          </IonItem>
        )}
        {listItem.showTitle && (
          <IonItem>
            <IonToggle
              color="dark"
              checked={listItem.showTitle}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'title',
                //   entity: 'listItem',
                //   id: listItem.id
                // });
              }}
            >
              Mostrar Título
            </IonToggle>
          </IonItem>
        )}
        {itemInfo.description && (
          <IonItem>
            <IonToggle
              color="dark"
              checked={listItem.showDescription}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'description',
                //   entity: 'listItem',
                //   id: listItem.id
                // });
              }}
            >
              Mostrar Descripción
            </IonToggle>
          </IonItem>
        )}
        {itemInfo.extraInfo && (
          <IonItem>
            <IonToggle
              color="dark"
              checked={listItem.showExtraInfo}
              onIonChange={() => {
                // set({
                //   action: 'show',
                //   info: 'extra-info',
                //   entity: 'listItem',
                //   id: listItem.id
                // });
              }}
            >
              Mostrar Información Extra
            </IonToggle>
          </IonItem>
        )}
      </IonList>
    </IonContent>
  );
};

export default withRouter(ListItemDetail);
