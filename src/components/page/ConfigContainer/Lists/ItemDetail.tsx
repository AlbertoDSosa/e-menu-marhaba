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
import ToggleSlide from '../../../../components/ui/ToggleSlide';

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
          <ToggleSlide
            show={listItem.show}
            title="Mostrar Artículo"
            variables={{
              resource: 'listItems',
              action: 'set',
              args: {
                action: 'show',
                info: 'item',
                entity: 'listItem',
                id: listItem.id
              }
            }}
          />
        </IonItem>
        {item.type === 'product' && (
          <IonItem>
            <ToggleSlide
              show={listItem.showPrice}
              title="Mostrar Precio"
              variables={{
                resource: 'listItems',
                action: 'set',
                args: {
                  action: 'show',
                  info: 'price',
                  entity: 'listItem',
                  id: listItem.id
                }
              }}
            />
          </IonItem>
        )}
        {listItem.showTitle && (
          <IonItem>
            <ToggleSlide
              show={listItem.showTitle}
              title="Mostrar Título"
              variables={{
                resource: 'listItems',
                action: 'set',
                args: {
                  action: 'show',
                  info: 'title',
                  entity: 'listItem',
                  id: listItem.id
                }
              }}
            />
          </IonItem>
        )}
        {itemInfo.description && (
          <IonItem>
            <ToggleSlide
              show={listItem.showDescription}
              title="Mostrar Descripción"
              variables={{
                resource: 'listItems',
                action: 'set',
                args: {
                  action: 'show',
                  info: 'description',
                  entity: 'listItem',
                  id: listItem.id
                }
              }}
            />
          </IonItem>
        )}

        <IonItem>
          <ToggleSlide
            show={listItem.showExtraInfo}
            title="Mostrar Información Extra"
            variables={{
              resource: 'listItems',
              action: 'set',
              args: {
                action: 'show',
                info: 'extra-info',
                entity: 'listItem',
                id: listItem.id
              }
            }}
          />
        </IonItem>

        <IonItem>
          <ToggleSlide
            show={listItem.showItemDetail}
            title="Mostrar Detalles"
            variables={{
              resource: 'listItems',
              action: 'set',
              args: {
                action: 'show',
                info: 'item-detail',
                entity: 'listItem',
                id: listItem.id
              }
            }}
          />
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default withRouter(ListItemDetail);
