import React from 'react';
import {
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonLoading
} from '@ionic/react';

import {
  DisplayInfo,
  ProductListItem,
  Product,
  Variants,
  ProductList,
  InfoList
} from '../../../../../../../definitions/models';

import { useQuery } from '../../../../../../../hooks/useQuery';

interface VariantListProps {
  list: ProductList | InfoList;
  lang: string;
}
const VariantList: React.FC<VariantListProps> = ({ list, lang }) => {
  const { isLoading: variantsIsLoading, dictionary: variants } = useQuery({
    key: 'variants'
  });

  const { dictionary: items, isLoading: itemsIsLoading } = useQuery({
    key: 'items'
  });

  const { isLoading: listItemsIsLoading, dictionary: listItems } = useQuery({
    key: 'listItems'
  });

  if (listItemsIsLoading || itemsIsLoading || variantsIsLoading) {
    return (
      <IonLoading
        className="custom-loading"
        message="Loading"
        spinner="circles"
      />
    );
  }

  const listInfo = list.displayInfo[lang];
  const productVariants: Variants = variants[list.variants!];
  const itemVariants = Object.values(productVariants.itemVariants);

  return (
    <IonGrid>
      <IonRow>
        {list.showTitle && (
          <IonCol className="ion-justify-self-center" color="dark" size="6">
            <IonText className="ion-text-center">
              <h2
                style={{ marginTop: '0.45em', fontWeight: 'bold' }}
                className=""
              >
                {listInfo?.title}
              </h2>
            </IonText>
          </IonCol>
        )}
        {itemVariants.map((item) => {
          const info = item.displayInfo[lang];

          return (
            <IonCol className="ion-align-self-center" size="2" key={item.id}>
              <IonLabel color="dark">{info.title}</IonLabel>
            </IonCol>
          );
        })}
      </IonRow>
      {list.items.map((itemId: string) => {
        const listItem: ProductListItem = listItems[itemId];
        const item: Product = items[listItem.itemId];
        const itemInfo: DisplayInfo = item.displayInfo[lang];
        const itemVariantPrices = Object.values(item.itemVariantPrices!);

        return (
          listItem.show && (
            <IonRow key={itemId}>
              <IonCol size="6">
                <IonLabel>
                  <h2>{itemInfo?.title}</h2>
                  <p className="ion-text-wrap">
                    {listItem.showDescription && itemInfo?.description}
                  </p>
                </IonLabel>
              </IonCol>
              {item.type === 'product' &&
                listItem.showPrice &&
                itemVariantPrices?.map((price, index) => {
                  return (
                    <IonCol size="2" key={index}>
                      <IonText color="dark">
                        {price?.amount ? `${price.amount} €` : ''}
                      </IonText>
                    </IonCol>
                  );
                })}
            </IonRow>
          )
        );
      })}
    </IonGrid>
  );
};

export default VariantList;
