import React from 'react';
// import styles from './styles.module.css';

import { IonText, IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';

import { useQuery } from 'hooks/useQuery';
import {
  DisplayInfo,
  ProductListItem,
  Product,
  List
} from 'definitions/models';

interface ItemListProps {
  list: List;
  lang: string;
}

const ItemList: React.FC<ItemListProps> = ({ list, lang }) => {
  const { dictionary: listItems, isLoading: listItemsIsLoading } = useQuery({
    key: 'listItems'
  });

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  if (listItemsIsLoading || itemsIsLoading)
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  const listInfo = list.displayInfo[lang];

  return (
    <IonGrid style={{ height: '600px' }}>
      <IonRow className="ion-justify-content-center">
        {list.showTitle && (
          <IonText className="ion-text-center">
            <h2 style={{ marginTop: '0.45em' }}>{listInfo?.title}</h2>
            {list.showExtraInfo && <p>{listInfo?.extraInfo}</p>}
          </IonText>
        )}
      </IonRow>
      {list?.items.map((itemId: string) => {
        const listItem: ProductListItem = listItems[itemId];
        const item: Product = items[listItem.itemId];
        const itemInfo: DisplayInfo = item.displayInfo[lang];

        return (
          listItem.show && (
            <IonRow className="ion-justify-content-center" key={itemId}>
              <IonCol
                className="ion-justify-content-center"
                size={listItem.showPrice ? '4' : '10'}
              >
                <h2 style={{ margin: '.2em' }}>{`-  ${itemInfo?.title}`}</h2>
                <p className="ion-text-wrap">
                  {listItem?.showDescription && itemInfo?.description}
                </p>
              </IonCol>
              {listItem.showPrice && (
                <IonCol size="2" className="ion-align-self-center">
                  <div style={{ borderTop: '1px solid' }}></div>
                </IonCol>
              )}
              {listItem.showPrice && (
                <IonCol size="1" className="ion-align-self-center">
                  <h2 style={{ margin: '0' }} className="ion-text-center">
                    {item.price?.amount} €
                  </h2>
                </IonCol>
              )}
            </IonRow>
          )
        );
      })}
    </IonGrid>
  );
};

export default ItemList;
